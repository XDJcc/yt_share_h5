import { ShareParamsType } from "@/global/base_type/base_type";

interface OpAppUtilsType {
  openApp(callback: () => void): void;

  phoneOs(): string;

  openUrl(url: string, type: string);
}

export default class OpenAppUtils implements OpAppUtilsType {
  readonly params: ShareParamsType;

  constructor(params: ShareParamsType) {
    this.params = params;
  }

  public phoneOs(): string {
    const u = navigator.userAgent,
      isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
      isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      isWecChat = u.indexOf(`MicroMessenger`) > -1;

    if (isiOS) {
      return "IOS";
    }
    if (isAndroid) {
      if (isWecChat) {
        return "WeChat";
      }
      return "Android";
    }
    return "";
  }

  public openUrl(url: string, type: string) {
    // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
    // 否则打开a标签的href链接
    const ifr = document.createElement("iframe");
    ifr.src = url;
    ifr.style.display = "none";
    document.body.appendChild(ifr);
    window.setTimeout(() => {
      document.body.removeChild(ifr);
    }, 3000);
    const t = Date.now();
    let r = "";
    if (type === "IOS") {
      r = "https://testflight.apple.com/join/U9AWtsWf";
      const delay = setInterval(function () {
        const d = new Date();
        const t1 = d.getTime();
        if (t1 - t < 3000 && t1 - t > 2000) {
          alert("请下载APP");
          window.location.href = r;
        }
        if (t1 - t >= 3000) {
          clearInterval(delay);
        }
      }, 1000);
      // let timer = setTimeout(function () {
      //   return Date.now() - t > 2200
      //     ? clearTimeout(timer)
      //     : !document.hidden && (location.href = r);
      // }, 1000);
    } else {
      r = "https://fwy-prod.iyuetiao.com/file/yt-release.apk";
      let timer = setTimeout(function () {
        return Date.now() - t > 2200
          ? clearTimeout(timer)
          : !document.hidden && (location.href = r);
      }, 2000);
    }
  }

  public openApp(callback): void {
    const { ph, pd } = this.params;
    try {
      let params = "?" + `ph=${ph}&pd=${pd}`;
      const type: string = this.phoneOs();
      if (type === "Android") {
        const url = "sharelink://fengweiyun.iyuetiao.com/app" + params;
        this.openUrl(url, "Android");
      } else if (type === "IOS") {
        // this.openUrl(url, "IOS");
        // return;

        /*
         * */
        // const t = Date.now();
        // const delay = setInterval(function () {
        //   const d = new Date();
        //   const t1 = d.getTime();
        //   if (t1 - t < 3000 && t1 - t > 2000) {
        //     alert("请下载APP");
        //     window.location.href = url;
        //   }
        //   if (t1 - t >= 3000) {
        //     clearInterval(delay);
        //   }
        // }, 1000);
        /*
         * */
        // const timer = setTimeout(() => {
        //   if (Date.now() - t > 2200) {
        //     clearTimeout(timer);
        //   } else {
        //     // 如果未安装，则跳转到App Store下载页面，应将your-app-id替换为实际的应用程序ID
        //     // location.href = "itms-apps://itunes.apple.com/cn/app/";
        //     window.location.href = "https://testflight.apple.com/join/U9AWtsWf";
        //   }
        // }, 2000);
        window.location.href = "https://fengweiyun.iyuetiao.com/app/" + params;
      } else if (type === "WeChat") {
        callback();
      } else {
        callback();
      }
    } catch (err) {
      alert("跳转失败，请重试");
    }
  }
}

import http from "@/utils/http";

export default class GoodRequest {
  /*
   * 获取Token
   * */
  static async captchaImage<T>() {
    return await http.reqGet<T>(`/system-api/captchaImage`);
  }

  /*
   * 获取Token
   * */
  static async mockLogin<T>(data: MockToken) {
    return await http.reqPost<T>(`/system-api/login`, data);
  }

  /*
   * 获取 商品详情数据
   * */
  static async getGoodsDetail<T>(sign: string): Promise<T> {
    return await http.reqGet<T>(`/v1/share/goodsDetail`, {
      sign,
    });
  }

  /*
   * 获取 文章详情数据
   * */
  static async getArticleDetail<T>(sign: string): Promise<T> {
    return await http.reqGet<T>(`/v1/share/articleDetail`, {
      sign,
    });
  }
}

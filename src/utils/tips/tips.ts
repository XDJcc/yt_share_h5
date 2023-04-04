import { showDialog } from "vant/lib";

interface TipsUtilsType {}

export class TipsUtils implements TipsUtilsType {
  static toAppUseAll(): void {
    showDialog({ message: "请在APP内操作", theme: "round-button" }).then(
      (r) => {}
    );
  }
}

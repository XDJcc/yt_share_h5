export default class TimeUtils {
  /*
   * 获取传入时间的 当前 月-日
   * 时间跨度 > 一年 返回 年-月-日
   * */
  static getNowMonthDay(date: string): string {
    const targetDate = new Date(date);
    const month = targetDate.getMonth() + 1;
    const day = targetDate.getDate();
    const year = targetDate.getFullYear();
    if (Date.now() > targetDate.getTime() + 1000 * 60 * 60 * 24 * 365) {
      return `${year}-${month}-${day}`;
    }
    return `${month}-${day}`;
  }
}

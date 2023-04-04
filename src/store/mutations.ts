/*
 *  master_mutations
 * */
import { UPDATE_NAME, UPDATE_ARTICLE } from "./type";
import { IsState } from "@/store/state";

const mutations = {
  ["setToken"](state, data: string): void {
    localStorage.setItem("token", data);
  },
  [UPDATE_ARTICLE](state: IsState, { type, data }): void {
    switch (type) {
      case 1:
        state.shun_jian = data;
        break;
      case 2:
        state.bi_jian = data;
        break;
      case 3:
        state.dian_ping = data;
        break;
    }
  },
  update_loading(state, { data }): void {
    state.isLogin = data;
    sessionStorage.setItem("isLogin", state.isLogin);
  },
  update_android_more(state: IsState, data: boolean): void {
    state.showAndroidMore = data;
  },
};
export default mutations;

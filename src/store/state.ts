/*
 *  master_state
 * */
export interface IsState {
  name: string;
  isLogin: boolean;
  token: string;
  showAndroidMore: boolean;
  [key: string]: unknown;
}

const state: IsState = {
  name: "",
  isLogin: sessionStorage.getItem("isLogin") == "true",
  token: "",
  shun_jian: {},
  bi_jian: {},
  dian_ping: {},
  showAndroidMore: false,
};

export default state;

/*
 *   master_action
 * */
import { Commit } from "vuex";

const actions = {
  mockToken({ commit }: { commit: Commit }, token: string) {
    commit("setToken", token);
  },
  update_loading({ commit }, { data }) {
    commit("update_loading", { data });
  },
};
export default actions;

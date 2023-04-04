import { createStore, Store } from "vuex";
import actions from "./actions";
import state from "@/store/state";
import mutations from "@/store/mutations";

const store: Store<any> = createStore({
  state: () => state,
  actions,
  mutations,
});
export default store;

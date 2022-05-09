import { createStore } from "vuex";
import journalModule from '../modules/dayBook/store/journal/index'
import authModule from "../modules/auth/store/index";

const store = createStore({
  modules: {
    journal: journalModule,
    auth: authModule,
  },
});

export default store;

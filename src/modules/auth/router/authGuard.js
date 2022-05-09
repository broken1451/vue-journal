import store from "@/store"; // root store principal a nivel de src
import { useStore } from "vuex";

export const isAuthenticatedGuardJournal = async (to, from, next) => {
  // to ruta a la que quiere ir
  // from de donde viene
  // next lo dejo pasar o lo redirecciono a otro lugar
  // 1) una forma
  // const storeVuex = useStore(); // no sirve en los guard debe ser el store principal
  // console.log({ to, from, next });
  // console.log({ store, storeVuex });
  // console.log("store =====>> ", store.state.auth.status);
  // const { ok } = await store.dispatch("auth/checkAuthentication"); // auth-module/checkAuthentication-accion
  // if (ok) {
  //     console.log("store =====>> ", store.state.auth.status);
  //     next();
  // } else {
  //     next({ name: "login" });
  // }

  // 2) Segunda forma
  //   console.log("store =====>> ", store); //store.getters["counter/squareCount"];
  //   if (localStorage.getItem("status") == "authenticated") {
  //     console.log("store =====>> ", store.state.auth.status);
  //     next();
  //   } else {
  //     console.log("store else =====>> ", store.state.auth.status);
  //     next({ name: "login" });
  //   }

  // 3) Tercera forma
  console.log("store =====>> ", store.getters["auth/currentState"]); //store.getters["counter/squareCount"];
  if (localStorage.getItem("status") == "authenticated") {
    console.log("store =====>> if ", store.getters["auth/currentState"]);
    localStorage.setItem("status", store.getters["auth/currentState"]);
    next();
  } else {
    console.log("store =====>> else ", store.getters["auth/currentState"]);
    next({ name: "login" });
  }
};

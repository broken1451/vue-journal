// export const myAction = async (contex) => {
// }

import authApi from "../../../api/auth";

export const createUser = async ({ commit }, user) => {
  const { email, name, password } = user;

  try {
    const { data } = await authApi.post(":signUp", {
      email,
      password,
      returnSecureToken: true,
    });
    const { idToken, refreshToken } = data;
    console.log({ idToken, refreshToken });
    const resp = await authApi.post(":update", {
      displayName: name,
      idToken,
      returnSecureToken: true,
    });
    console.log({ resp });
    //   todo mutation: login user
    delete user.password;
    commit("loginMutationUser", { user, idToken, refreshToken });
    return { ok: true };
  } catch (error) {
    console.log("error ");
    console.log({ error });
    return {
      ok: false,
      msg: error.response.data.error.message,
    };
  }
};

export const signInUser = async ({ commit }, user) => {
  const { email, password } = user;

  try {
    const { data } = await authApi.post(":signInWithPassword", {
      email,
      password,
      returnSecureToken: true,
    });
    const { idToken, refreshToken, displayName } = data;
    console.log({ idToken, refreshToken, data });
    user.name = displayName;
    //   todo mutation: login user
    delete user.password;
    commit("loginMutationUser", { user, idToken, refreshToken });
    return { ok: true };
  } catch (error) {
    console.log("error ");
    console.log({ error });
    return {
      ok: false,
      msg: error.response.data.error.message,
    };
  }
};

export const checkAuthentication = async ({ commit }) => {
  const idToken = localStorage.getItem("idToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!idToken) {
    commit("logout");
    return { ok: false, msg: "No hay token en la peticion" };
  }
  try {
    console.log({ idToken });
    const { data } = await authApi.post(":lookup", { idToken });
    console.log("data");
    console.log(data);
    const { email, displayName } = data.users[0];

    const user = {
      name: displayName,
      email,
    };
    commit("loginMutationUser", { user, idToken, refreshToken });
    return { ok: true };
  } catch (error) {
    commit("logout");
    return {
      ok: false,
      msg: error.response.data.error.message,
    };
  }
};

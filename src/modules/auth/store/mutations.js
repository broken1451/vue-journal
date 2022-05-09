// export const myMutations =  (state) => {
// };

export const loginMutationUser = (state, { user, idToken, refreshToken }) => {
  if (idToken) {
    localStorage.setItem("idToken", idToken);
    state.idToken = idToken;
  }

  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
    state.refreshToken = refreshToken;
  }
  console.log({ user });
  state.user = user;
  state.status = "authenticated";
  localStorage.setItem("status", state.status);
};

export const logout = (state) => {
  state.user = null;
  state.idToken = null;
  state.refreshToken = null;
  state.status = "not-authenticated";
  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
};

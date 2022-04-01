// export const myGetters = (state) => {
//     return state
// };

export const getEntriesByTerm = (state) => (term = '') => {
  if (term.trim().length == 0) {
    return state.entries;
  } else {
    return state.entries.filter(entry => entry.text.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }
};

export const getEntriesById = (state) => (id= '') => {
  // console.log({ state, id });
  const entry = state.entries.find((e) => e.id === id);
  if (!id) return
  return { ...entry };
};
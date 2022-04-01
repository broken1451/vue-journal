// export const myMutations =  (state) => {
// };

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries]; //[anteriores,nuevas entradas]
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  //   const idx = state.entries.map((entri) => { return entri.id }).indexOf(entry.id);
  //   state.entries[idx] = entry;
  const idx = state.entries
    .map((entri) => entri.id)
    .findIndex((i) => i == entry.id);
  console.log("state.entries ", state.entries);
  console.log("state.entries[idx] ", state.entries[idx]);
  state.entries[idx] = entry;
};

export const addEntry = (/*state, entry*/ state, entry) => {
  //   state.entries[entry, ...state.entries];
  state.entries.unshift(entry);
  console.log("add ===>> ", state.entries);
};

export const deleteEntryMutation = (/*state, entry*/ state, entry) => {
  state.entries = state.entries.filter((e) => e.id != entry.id);
//   state.entries = newEntries;
};

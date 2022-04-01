// export const myAction = async (contex) => {
// }
import journalApi from "../../../../api/journalApi";

export const loadEntries = async (/*contex*/ contex) => {
  const { data } = await journalApi.get("/entries.json");
  if (!data) return contex.commit("setEntries", []);
  const entries = [];
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id], // valores q apunta a dicho id
    });
  }
  setTimeout(() => {
    contex.commit("setEntries", entries);
  }, 2000);
  console.log(entries);
};

export const updateEntry = async (/*contex*/ { commit }, entry) => {
  const { date, text, picture, id } = entry;
  const dataTosave = {
    date,
    text,
    picture,
  };
  await journalApi.put(`/entries/${id}.json`, dataTosave);
  //   const { data } = await journalApi.put(`/entries/${id}.json`, dataTosave);
  //   console.log({ commit });
  //   console.log({ data });
  commit("updateEntry", { ...entry });
};

export const createEntry = async (/*contex, entry */ { commit }, newEntry) => {
  const { date, text, picture = "" } = newEntry;
  const dataTosave = {
    date,
    text,
    picture,
  };

  const { data } = await journalApi.post(`/entries.json`, dataTosave);
  const { name } = data;
  dataTosave.id = name;
  //   newEntry.id = name;
  //   commit("addEntry", newEntry);
  commit("addEntry", dataTosave);
  return name;
};

export const deleteEntryFirebase = async ({ commit }, entry) => {
  await journalApi.delete(`/entries/${entry.id}.json`);
  commit("deleteEntryMutation", entry);
  return;
};

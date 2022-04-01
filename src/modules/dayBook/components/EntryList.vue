<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        v-model="term"
        type="text"
        class="form-control"
        placeholder="Buscar Entrada"
      />
    </div>

    <div class="mt-2 d-flex flex-column">
      <button @click="$router.push({name: 'EntryView', params: {id: 'new'}})" class="btn btn-primary mx-3"> <i class="fa fa-plus-circle"></i> Nueva entrada</button>
    </div>

    <div class="entry-scrollarea">
      <h2 v-for="entry in entriesByterm" :key="entry.id">
        <Entry :entry="entry" />
      </h2>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  name: "EntryList",
  data() {
    return {
      term: "",
    };
  },
  components: {
    Entry: defineAsyncComponent(() => import("./Entry")),
  },
  computed: {
    ...mapGetters("journal", {
      entries: "getEntriesByTerm",
    }),
    entriesByterm() {
      return this.entries(this.term);
    },
  },
};
</script>
<style lang='scss' scoped>
input {
  height: 55px;
}
.entry-list-container {
  border: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow: scroll;
}
</style>
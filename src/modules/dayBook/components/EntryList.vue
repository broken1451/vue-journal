<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar Entrada" />
    </div>

    <div class="entry-scrollarea">
      <h2 v-for="item in 100" :key="item"><Entry /></h2>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("./Entry")),
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
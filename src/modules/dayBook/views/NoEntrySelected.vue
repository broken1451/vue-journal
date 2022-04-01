<template >
<div>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
    <Fab @on:click='goto($event)' />
</div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "NoEntrySelected",
  components: {
      Fab: defineAsyncComponent(() => import("../components/Fab")),
  },
  methods: {
    goto(event){
      console.log(event);
      this.$router.push({name: 'EntryView', params: {id: 'new'}})
    }
  },
};
</script>
<style scoped lang="scss">
div {
  height: 100%;
}
</style>
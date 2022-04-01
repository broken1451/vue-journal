<template>
  <div>
    <Navbar />
    <div v-if="isLoading" class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
          Espere por favor...
          <i class="fa fa-spin fa-sync"></i>
        </div>
    </div>

    <div v-else class="d-flex">
      <div class="col-4">
        <EntryList />
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState} from "vuex";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList")),
  },
  computed: {
    // getters o state
     ...mapState({
      isLoading: (state) => state.journal.isLoading
    }),
  },
  methods: {
    ...mapActions("journal", {
      loadEntries: "loadEntries",
    }),
  },
  created() {
    this.loadEntries();
  }
};
</script>
<style scoped>
</style>
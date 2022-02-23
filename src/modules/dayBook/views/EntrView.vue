<template >
  <div>
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2022, martes</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
      <hr />
    </div>

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="Que sucedio hoy?"></textarea>
    </div>
    <!-- <Fab :icon='icon'/> -->
    <Fab icon="fa-save" />
    <img
      class="img-thumbnail"
      src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
      alt="entry-picture"
      srcset=""
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    id: {
      type: String,
    },
  },
  name: "EntryView",
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab")),
  },
  data() {
    return {
      icon: "",
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    if (this.$route.params.id) {
      this.icon = "fa-save";
    } else {
      this.icon = "fa-plus";
    }
  },
};
</script>
<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
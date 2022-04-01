<template >
  <div v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDate }}</span>
      </div>

      <div>
        <input type="file" @change="onSelectImg($event)" ref="imgSelect"  v-show="false" accept="image/png, image/jpeg"/>
        <button
          v-if="entry.id"
          @click="deleteEntry()"
          class="btn btn-danger mx-2"
        >
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary" @click="onselecteImg()">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
      <hr />
    </div>

    <div class="d-flex flex-column px-3 h-75">
      <textarea
        placeholder="Que sucedio hoy?"
        rows="30"
        v-model="entry.text"
      ></textarea>

      <img
        v-if="localImg"
        class="img-thumbnail"
        :src="localImg"
        alt="entry-picture"
        srcset=""
      />

      <img v-if="entry.picture && !localImg"
        class="img-thumbnail"
        :src="entry.picture"
        alt="entry-picture"
        srcset=""
      />
    </div>
    <!-- <Fab :icon='icon'/> -->
    <Fab icon="fa-save" @on:click="saveEntry($event)" />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
import getDayMonthYear from "../helpers/getDayMonthYear";
import uploadImg from "../helpers/uploadImg";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  name: "EntryView",
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab")),
  },
  data() {
    return {
      icon: "",
      entry: {
        text: "",
      },
      localImg: null,
      file: null
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.icon = "fa-save";
    } else {
      this.icon = "fa-plus";
    }
  },
  methods: {
    loadEntry() {
      // console.log(this.id);
      let entry;
      if (this.id === "new") {
        entry = {
          date: new Date().toDateString(),
          text: "",
        };
        this.$router.push({ name: "EntryView", params: { id: "new" } });
      } else {
        entry = this.entriesgetEntriesById(this.id);
        //  console.log("entry", Object.entries(entry).length ); ver si un objeto viene vacio
        if (Object.entries(entry).length == 0)
          return this.$router.push({ name: "NoEntrySelected" });
      }
      this.entry = entry;
    },
    async saveEntry(event) {
      Swal.fire({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      // console.log(this.entry);
      const picture = await uploadImg(this.file);
      this.entry.picture = picture
      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        console.log("nueva entrada", this.entry);
        console.log("guardando entrada", event);
        const id = await this.createEntry(this.entry);
        this.$router.push({ name: "EntryView", params: { id } });
      }
       this.file = null;
      setTimeout(() => {
        Swal.fire("Guardado", "Entrada registrada con exito", "success");
      }, 1000);
     
    },
    ...mapActions("journal", {
      updateEntry: "updateEntry",
      createEntry: "createEntry",
      deleteEntryFirebase: "deleteEntryFirebase",
    }),
    async deleteEntry() {
      // console.log("delete ===> ", this.entry);
      const { isConfirmed } = await Swal.fire({
        title: "Esta seguro?",
        text: "Uma vez borrado, no se puede recuperar",
        showDenyButton: true,
        confirmButtonText: "Si, estoy seguro.",
      });

      if (isConfirmed) {
        Swal.fire({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntryFirebase(this.entry);
        this.$router.push({ name: "NoEntrySelected" });
        setTimeout(() => {
          Swal.fire("Eliminado", "", "success");
        }, 1000);
      }
    },
    onSelectImg(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImg = null;
        this.file = null;
        return;
      }

      this.file = file;

      const fr = new FileReader();
      fr.onload = () => (this.localImg = fr.result); // despues ejecuta esto y carga la img
      fr.readAsDataURL(file); // se ejecuta esto primero
    },
    onselecteImg(){
      // this.$refs.imgSelect.click() ->  document.querySelector('input').click();
     this.$refs.imgSelect.click();
    }
  },
  computed: {
    ...mapGetters("journal", {
      entriesgetEntriesById: "getEntriesById",
    }),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDate() {
      const { yearDate } = getDayMonthYear(this.entry.date);
      return yearDate;
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id(/*value, oldvalue*/) {
      console.log("watch");
      this.loadEntry();
    },
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
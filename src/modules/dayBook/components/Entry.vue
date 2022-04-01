<template >
  <div @click="goto()" class="mb-3 pointer p-2 entry-container">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }} </span>
      <span class="mx-1 fs-5">{{ month }} </span>
      <span class="mx-2 fw-light">{{ yearDate }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>
<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  name: "Entry",
  methods: {
    goto() {
      this.$router.push({ name: "EntryView", params: { id: this.entry.id } });
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    yearDate() {
      const date = new Date(this.entry.date);
      return `${date.getFullYear()}, ${days[date.getDay()]}`;
    },
  },
};
</script>
<style scoped lang='scss'>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  // & significa toma esta clase .entry-container y aplicale lo q esta despues de los :
  &:hover {
    background-color: lighten($color: gray, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
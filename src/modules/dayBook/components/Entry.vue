<template >
  <div @click="goto()" class="mb-3 pointer p-2 entry-container">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">12 </span>
      <span class="mx-1 fs-5">Julio </span>
      <span class="mx-2 fw-light">2022, lunes</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
      repellendus rem praesentium, esse totam pariatur in, eveniet est
      doloremque aliquam distinctio laboriosam exercitationem ab consequatur
      tempore doloribus itaque minus facere.z
    </div>
  </div>
</template>
<script>
export default {
  name: "Entry",
  methods: {
    goto(){
      this.$router.push({name:'EntrView', params:{id:2}})
    }
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
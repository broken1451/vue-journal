<template>
  <div>
    <button class="btn btn-primary">
      <!-- <i :class="`fa fa-2x ${icon}`"></i> -->
      <i :class="icon" class="fa fa-2x"></i>
    </button>
  </div>
</template>
<script>
// default fa-plus
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: "fa-plus",
    },
  },
  name: "Fab",
};
</script>
<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
}
</style>
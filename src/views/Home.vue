<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button @click="gotodaybook()" class="btn btn-primary">Primary</button>
    <button @click="gotodaybook()" class="btn btn-secondary">Secondary</button>
    <button @click="gotodaybook()" class="btn btn-success">Success</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    gotodaybook(){
      this.$router.push({name:'NoEntrySelected'}); // navegacion
    }
  },
}
</script>

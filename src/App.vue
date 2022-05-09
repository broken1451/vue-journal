<template>
  <div id="nav">
    <h1 v-if="authStatus === 'authenticating'">{{ authStatus }}</h1>
    <router-view v-else />
  </div>
  <!-- // los mixin es una manera compartir codigo -->
</template>
<script>
import useAuth from "./modules/auth/composables/useAuth";
export default {
  setup() {
    const { checkAuthStatus, authStatus } = useAuth();

    checkAuthStatus();
    return {
      checkAuthStatus,
      authStatus,
    };
  },
};
</script>
<style>
</style>

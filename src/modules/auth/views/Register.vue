<template >
  <div>
    <span class="login100-form-title p-b-41"> Registro </span>
    <form
      @submit.prevent="onSubmit"
      class="login100-form validate-form p-b-33 p-t-5"
    >
      <div class="wrap-input100 validate-input" data-validate="Ingrese nombre">
        <input
          v-model="userForm.name"
          class="input100"
          type="text"
          placeholder="Nombre"
          required
        />
        <span class="focus-input100" data-placeholder="&#xe82a;"></span>
      </div>
      <div class="wrap-input100 validate-input" data-validate="Ingrese correo">
        <input
          v-model="userForm.email"
          class="input100"
          type="email"
          placeholder="Correo"
          required
        />
        <span class="focus-input100" data-placeholder="&#xe818;"></span>
      </div>

      <div class="wrap-input100 validate-input" data-validate="Ingrese clave">
        <input
          v-model="userForm.password"
          class="input100"
          type="password"
          placeholder="Contraseña"
          required
        />
        <span class="focus-input100" data-placeholder="&#xe80f;"></span>
      </div>

      <div class="container-login100-form-btn m-t-32">
        <button type="submit" class="login100-form-btn">Crear Cuenta</button>
      </div>

      <div class="container-login100-form-btn m-t-32">
        <router-link :to="{ name: 'login' }">ya tienes cuenta?</router-link>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import useAuth from "../composables/useAuth";
import Swal from "sweetalert2";
import { useRouter } from 'vue-router';


export default {
  setup() {
    const { createUser } = useAuth();
    const router =useRouter()
    const userForm = ref({
      email: "a@gmail.com",
      name: "adrian",
      password: "123456",
    });

    return {
      userForm,
      onSubmit: async () => {
        console.log("form ", userForm.value);
        const { ok, msg } = await createUser(userForm.value);
        if (!ok) {
          Swal.fire("Error", msg, "error");
        } else {
          router.push({name: 'NoEntrySelected' })
        }
      },
    };
  },
};
</script>
<style scoped>
</style>
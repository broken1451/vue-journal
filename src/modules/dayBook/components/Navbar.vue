<template >
    <div>
        <nav class="navbar bg-primary">
            <a class="navbar-brand text-white" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/logo.png" height="24" class='d-inline-block align-text-top mx-2' alt="logo" srcset="">
                {{username}}
            </a>
            <div class="d-flex">
                <button class="btn btn-info mx-2" @click="onLogout">
                    <i class="fa fa-sign-out-alt"></i>
                </button>
            </div>
        </nav>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import useAuth from '../../auth/composables/useAuth'
export default {
  name: 'Navbar',

    setup() {
        const router = useRouter();
        const {username, logout} = useAuth();

        return {
            username,
            onLogout: () =>{
                router.push({name:'login'})
                // window.location.href = 'http://localhost:8080/#/auth';
                logout()
            }
        }
    }
}
</script>
<style >
    
</style>
<template>
<div>
<b-container fluid style="display: flex; height: 100vh; justify-content: center;">
    <Login></Login>
</b-container>
</div>  
</template>

<script>
import Login from '../components/Login.vue'
export default {
    components: {
        Login
    },
    created () {
        if (localStorage.token) {
            this.$store.commit('SETISLOGIN', true)
            this.$router.push('/dashboard')
        }
    }
}
</script>

<style scoped>

</style>
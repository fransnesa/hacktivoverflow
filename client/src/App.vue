<template>
<div>
<b-container fluid style="padding: 0; margin: 0;">
    <Navbar v-if="isLogin"></Navbar>
    <b-container style="display: flex; justify-content: center; align-items: center; height: 100vh; margin-top: 40px; padding: 0;">
        <b-col cols="9" style="height: 100vh; display: flex; flex-direction: column;" class="">
            <router-view/>
       </b-col>
    </b-container>
</b-container>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex'
export default {
    components: {
        Navbar
    },
    computed: {
        ...mapState(['isLogin'])
    },
    created() {
        if (localStorage.token) {
            this.$router.push('/dashboard')
            this.$store.commit('SETISLOGIN', true)
        }
        else {
            this.$router.push('/')
            this.$store.commit('SETISLOGIN', false)
        }
    }
}
</script>

<style scoped>
.giveMeEllipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-height: 1.5;        /* fallback */
    max-height: 2*1.5;       /* fallback */
}
</style>
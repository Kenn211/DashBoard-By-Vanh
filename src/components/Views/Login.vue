<template>
    <div class="login-page">
        <div class="bg-img">
                <div class="page">
                    <HeaderLogin></HeaderLogin>
                    <FormLogin></FormLogin>
                    <FooterLogin></FooterLogin>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderLogin from '../Modal/Login/HeaderLogin.vue';
import FormLogin from '../Modal/Login/FormLogin.vue';
import FooterLogin from '../Modal/Login/FooterLogin.vue';

</script>

<style scoped>
.login-page {
    width: 100%;
    height: auto;
}

.bg-img {
    height: auto;
    min-height: 100vh;
    background-image: url(../../assets/login.jpg);
    position: relative;
}

.bg-overlay{
    height: auto;
    min-height: 100vh;
    position: relative;
    z-index: 10;
}

.page {
    margin: 0 14%;
}
</style>
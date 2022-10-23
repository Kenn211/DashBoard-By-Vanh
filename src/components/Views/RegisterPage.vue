<template>
    <div class="login-page">
        <div class="bg-img">
                <div class="page">
                    <HeaderRegister></HeaderRegister>
                    <FormRegister></FormRegister>
                    <FooterRegister></FooterRegister>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderRegister from '../Modal/Register/HeaderRegister.vue';
import FormRegister from '../Modal/Register/FormRegister.vue';
import FooterRegister from '../Modal/Register/FooterRegister.vue';


</script>

<style scoped>
.login-page {
    width: 100%;
    height: auto;
}

.bg-img {
    height: auto;
    min-height: 100vh;
    background-image: url(../../assets/register.jpg);
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
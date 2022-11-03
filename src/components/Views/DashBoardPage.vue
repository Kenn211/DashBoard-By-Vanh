<template>
    <a-layout style="min-height: 100vh;">
        <Slider></Slider>

        <a-layout class="page">
            <a-layout-header style="padding: 0;"><Header></Header></a-layout-header>
            <a-layout-content><Contentt></Contentt></a-layout-content>
            <a-layout-footer style="padding: 0;"><Footer></Footer></a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import Slider from '../Modal/DashBoardPage/Slider/Slider.vue';
import Header from '../Modal/DashBoardPage/Header/Header.vue';
import Contentt from '../Modal/DashBoardPage/Contentt/Contentt.vue';
import Footer from '../Modal/DashBoardPage/Footer/Footer.vue';

</script>

<style scoped>
.ant-layout-header {
    background-color: #f0f2f5;
}
.page{
    margin-left: 19%;
    margin-right: 1%;
}
</style>
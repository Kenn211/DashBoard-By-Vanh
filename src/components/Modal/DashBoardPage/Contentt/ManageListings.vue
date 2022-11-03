<template>
    <h1>Manage Listings</h1>
    <div class="card-product">
        <div class="card-product-item" v-for="item in dataProduct" :key="item.id">
            <div class="card-header">
                <img :src="item.urlImg"  style="width: 100%;" alt="">
            </div>
            <div class="card-body">
                <div class="card-body-icon">
                    <a-tooltip placement="bottom">
                        <template #title>
                            <span>View</span>
                        </template>
                        <i class="fas fa-eye icon-change"></i>
                    </a-tooltip>
                    
                    <a-tooltip placement="bottom">
                        <template #title>
                            <span>Edit</span>
                        </template>
                        <i class="fas fa-pen icon-change"></i>
                    </a-tooltip>

                    <a-tooltip placement="bottom">
                        <template #title>
                            <span>Remove</span>
                        </template>
                        <i @click="handleDelete(item.id)" class="fas fa-window-close icon-change"></i>
                    </a-tooltip>
                </div>

                <div class="card-body-title">
                    <span>{{item.name}}</span>
                    <span>{{item.desc}}</span>
                </div>

            </div>
            <div class="card-footer">
                <div class="footer-right">
                    <span>${{item.price}}/night</span>
                </div>

                <div class="footer-left">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{item.address}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Product } from '../../../Interfaces/interfaces';


const dataProduct = ref<Product[]>([
    {
        id: 1,
        urlImg: 'https://demos.creative-tim.com/material-dashboard-pro-bs4/assets/img/card-2.jpg',
        name: 'Copy 5 Stars Apartment',
        desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
        address: 'Barcelona, Spain',
        price: 899
    },
    {
        id: 2,
        urlImg: 'https://demos.creative-tim.com/material-dashboard-pro-bs4/assets/img/card-3.jpg',
        name: 'Office Studio',
        desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
        address: 'London, UK',
        price: 1.119
    },
    {
        id: 3,
        urlImg: 'https://demos.creative-tim.com/material-dashboard-pro-bs4/assets/img/card-1.jpg',
        name: 'Beautiful Castle',
        desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
        address: ' Milan, Italy',
        price: 459
    },
])

function handleDelete(idProduct: number) {
    dataProduct.value = dataProduct.value.filter((item) => idProduct != item.id)
}
</script>

<style scoped>
h1 {
    font-size: 28px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: lighter;
    opacity: 0.8;
}

.card-product {
    display: grid;
    grid-template-columns: 32% 32% 32%;
    gap: 2%;
    margin-top: 50px;
}

.card-product-item {
    background-color: #fff;
    padding: 0 15px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
    border-radius: 6px;
    cursor: pointer;
}

.card-header {
    transition: all .3s cubic-bezier(.34, 1.61, .7, 1);
    transform: translateZ(0);
    position: relative;
    padding: 0;
}

.card-header img{
    border-radius: 5px;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 20%);
    margin-top: -20px;
}

.card-product-item:hover .card-header {
    transform: translate3d(0, -50px, 0);
    z-index: 3 !important;
}

.card-body {
    margin-top: -50px;
}

.card-body-icon {
    text-align: center;
}

.icon-change {
    padding: 8px 15px;
    cursor: pointer;
    color: gray;
}

.icon-change:nth-child(2){
    color: green;
}

.icon-change:nth-child(3){
    color: red;
}

.card-body-title {
    margin-top: 20px;
    text-align: center;
}

.card-body-title span {
    display: block;
}

.card-body-title span:nth-child(1) {
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 5px;
}

.card-body-title span:nth-child(2) {
    font-size: 13px;
    opacity: 0.7;
}
.card-footer{
    background-color: #fff;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-right{
    font-size: 20px;
    opacity: 0.6;
}

.footer-left{
    font-size: 12px;
    opacity: 0.6;
}

.footer-left i{
    margin-right: 10px;
}
</style>
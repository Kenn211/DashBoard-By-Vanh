<template>
    <div class="setting-slider">
        <!-- <a-dropdown :trigger="['click']">
            <div class="ant-dropdown-link" style="text-align: center;">
                <setting-outlined style="font-size: 25px; color: #fff; cursor: pointer;" />
            </div>
            <template #overlay>
                <a-menu style="top: -110px; width: 350px; left: -60px; border-radius: 8px; padding: 0 10px;">
                    <a-menu-item>
                        <div class="sidebar-filters">
                            <span>SIDEBAR FILTERS</span>
                        </div>
                        <div class="color-filters">
                            <span class="color-select badge-purple" style="background-color: purple;"></span>
                            <span class="color-select badge-azure" style="background-color: #2ca8ff;"></span>
                            <span class="color-select badge-green" style="background-color: #18ce0f;"></span>
                            <span class="color-select badge-warning" style="background-color: #ff9800;"></span>
                            <span class="color-select badge-danger" style="background-color: #f44336;"></span>
                            <span class="color-select badge-rose" style="background-color: #e91e63;"></span>
                        </div>
                    </a-menu-item>

                    <a-divider style="margin: 10px 0;"></a-divider>

                    <a-menu-item>
                        <div class="sidebar-filters">
                            <span>SIDEBAR BACKGROUND</span>
                        </div>
                        <div class="color-filters">
                            <span class="color-select badge-black" style="background-color: black;"></span>
                            <span class="color-select badge-gray" style="background-color: gray;"></span>
                            <span class="color-select badge-danger" style="background-color: #f44336;"></span>
                        </div>
                    </a-menu-item>

                    <a-divider style="margin: 10px 0;"></a-divider>

                    <a-menu-item>
                        <div class="siderbar-mini">
                            <div class="sidebar-title">
                                <span>Siderbar Mini</span>
                            </div>

                            <div class="input-check">
                                <label for="">
                                    <input type="checkbox">
                                    <span class="toogle"></span>
                                </label>
                            </div>
                        </div>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown> -->
        <SettingOutlined  @click="handleOpenSetting" style="font-size: 25px; color: #fff; cursor: pointer;"/>
    </div>

    <transition appear>
        <div class="sub-menu" v-if="isOpen">
        a
        </div>
    </transition>
</template>

<script setup lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
let isOpen = ref<boolean>(false)
function handleOpenSetting(){
    isOpen.value = !isOpen.value;
    console.log(isOpen.value);
}
</script>

<style scoped>
.setting-slider {
    position: fixed;
    z-index: 20;
    padding: 15px 24px;
    background-color: gray;
    opacity: 0.7;
    right: 0;
    top: 10rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
}

.sub-menu{
    background-color: #fff;
    z-index: 30;
    position: fixed;
    top: 10%;
    width: 350px;
    height: 300px;
    border-radius: 8px;
    padding: 0 10px;
    right: 90px;
    transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
}

.sub-menu::after{
    content: "";
    display: inline-block;
    position: fixed;
    top: 170px;
    width: 16px;
    border-bottom: 16px solid transparent;
    border-left: 16px solid gray;
    border-top: 16px solid transparent;
    right: 75px;
}

.ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover, li {
    background-color: #fff !important;
}

.sidebar-filters {
    text-align: center;
    padding-top: 5px;
}

.sidebar-filters span {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
}

.color-filters {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.color-select {
    display: inline-block;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    margin-right: 10px;
}

.color-select:last-child {
    margin-right: 0;
}

.color-select:hover {
    border: 3px solid black;
}

.input-check label input[type=checkbox] {
    opacity: 0;
    width: 0;
    height: 0;
}

.toogle {
    content: "";
    display: inline-block;
    width: 30px;
    height: 15px;
    background-color: rgba(80, 80, 80, .7);
    border-radius: 15px;
    transition: background .3s ease;
    vertical-align: middle;
}

.toogle::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 1px 3px 1px rgb(0 0 0 / 40%);
    left: -5px;
    top: -2.5px;
    border: 1px solid rgba(0, 0, 0, .54);
    transition: left .3s ease, background .3s ease, box-shadow .1s ease;
}

.input-check label input[type=checkbox]:checked + .toogle {
    background-color: #9c27b0;
}

.input-check label input[type=checkbox]:checked + .toggle:after {
    border-color: #9c27b0;
}

.input-check label input[type=checkbox]:checked + .toggle:after {
    left: 15px;
}
</style>
<template>
    <a-layout-sider width="17%" v-model:collapsed="collapsed" collapsible>
        <div class="logo"></div>
        <div style="
            height: 70px;
            display: flex;
            justify-content: start;
            align-items: center;
          ">
            <a href="#" style="padding: 10px; font-size: 18px; color: #fff">
                <span style="margin-right: 20px">CT</span>
                <span v-if="!collapsed">CREATIVE TIM</span>
            </a>
        </div>
        <a-divider style="height: 1px; background-color: #28343b; margin: 10px 0;" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-sub-menu key="sub1" >
                <template #title style="padding-left: 0;">
                    <span class="user">
                        <div class="photo photo-callapsd">
                            <img src="../../../../assets/dribbble.png"
                                :class="collapsed ? 'photo-callapsd' : 'photo'" />
                        </div>
                        <div class="user-info">
                            <span v-if="!collapsed">Tania Andrew</span>
                        </div>
                    </span>
                </template>
                <a-menu-item key="3">My Profile</a-menu-item>
                <a-menu-item key="4">Edit Profile</a-menu-item>
                <a-menu-item key="5">Settings</a-menu-item>
            </a-sub-menu>

            <a-divider style="background-color: #28343b; margin: 10px 0;" />

            <a-menu-item key="2" class="color-dashboasrd">
                <dashboard-outlined />
                <span>Dashboard </span>
            </a-menu-item>
            <a-sub-menu key="sub2">
                <template #title>
                    <span class="css-title-menu">
                        <picture-outlined />
                        <span>Page</span>
                    </span>
                </template>
                <a-menu-item key="3">Pricing</a-menu-item>
                <a-menu-item key="4">RTLSupport</a-menu-item>
                <a-menu-item key="5">Timeline</a-menu-item>
                <a-menu-item key="6">Logo Page</a-menu-item>
                <a-menu-item key="7">Register Page</a-menu-item>
                <a-menu-item key="8">Lock Screen Page</a-menu-item>
                <a-menu-item key="9">User Profile</a-menu-item>
                <a-menu-item key="10">Error Page</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub3">
                <template #title>
                    <span class="css-title-menu">
                        <team-outlined />
                        <span>Components</span>
                    </span>
                </template>
                <a-menu-item key="11">Regular Forms</a-menu-item>
                <a-menu-item key="12">Extended Forms</a-menu-item>
                <a-menu-item key="13">Validation Forms</a-menu-item>
                <a-menu-item key="14">Wizard</a-menu-item>
            </a-sub-menu>
            
            <a-sub-menu key="sub4">
                <template #title>
                    <span class="css-title-menu">
                        <user-outlined />
                        <span>Form</span>
                    </span>
                </template>
                <a-menu-item key="15">Regular Tables</a-menu-item>
                <a-menu-item key="16">Extended Tables</a-menu-item>
                <a-menu-item key="17">DataTables.Net</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub5">
                <template #title>
                    <span class="css-title-menu">
                        <user-outlined />
                        <span>Table</span>
                    </span>
                </template>
                <a-menu-item key="18">Regular Tables</a-menu-item>
                <a-menu-item key="19">Extended Tables</a-menu-item>
                <a-menu-item key="20">DataTables.Net</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub6">
                <template #title>
                    <span class="css-title-menu">
                        <user-outlined />
                        <span>Map</span>
                    </span>
                </template>
                <a-menu-item key="21">Regular Tables</a-menu-item>
                <a-menu-item key="22">Extended Tables</a-menu-item>
                <a-menu-item key="23">DataTables.Net</a-menu-item>
            </a-sub-menu>

            <a-menu-item key="24">
                <span class="css-title-menu">
                    <desktop-outlined />
                    <span>Widgets</span>
                </span>
            </a-menu-item>

            <a-menu-item key="25">
                <span class="css-title-menu">
                    <desktop-outlined />
                    <span>Charts</span>
                </span>
            </a-menu-item>

            <a-menu-item key="26">
                <span class="css-title-menu">
                    <desktop-outlined />
                    <span>Calenders</span>
                </span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script setup lang="ts">
import {
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    PictureOutlined,
    DashboardOutlined
} from "@ant-design/icons-vue";
import { ref } from "vue";


const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);

</script>
<style>
.site-layout .site-layout-background {
    background: #fff;
}

.ant-layout-sider {
    box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
}


.ant-menu-submenu {
    margin: 20px auto 0;
}

.ant-menu-submenu .ant-menu-submenu-inline {
    padding: 10px 0;
}

.ant-menu-title-content {
    display: flex;
    align-items: center;
}

.ant-menu-inline .ant-menu-submenu-title{
    display: flex;
    align-items: center;
}

.menu-user {
    height: 60px;
}

.user {
    display: flex;
    align-items: center;
}

.user .photo {
    border-radius: 50%;
    width: 34px;
    overflow: hidden;
    height: 34px;
    line-height: 1.5em;
}

.css-title-menu{
    display: flex;
    align-items: center;
}

.photo-callapsd {
    min-width: 34px;
    height: 34px;
}

.user .photo img {
    width: 100%;
}

.user .user-info {
    padding-left: 10px;
}

.color-dashboasrd {
    background-color: rgb(192, 79, 79);
}

.ant-menu-submenu {
    margin: 0;
}

.ant-layout-sider-children{
    margin: 0 10px;
}
</style>
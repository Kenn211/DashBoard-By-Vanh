<template>
    <div class="header">
        <div class="header-left">
            <span class="title-header">
                Dashboard
            </span>
        </div>

        <div class="header-right">
            <div class="input-search">
                <input type="text" placeholder="Search">
                <search-outlined class="icon-search" />
            </div>
            <div class="icon-menu">
                <dashboard-outlined class="icon-outline"/>
            </div>

            <div class="icon-menu">
                <a-dropdown :trigger="['click']">
                    <div class="ant-dropdown-link" @click.prevent>
                        <bell-outlined class="icon-outline"/>
                    </div>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item style="padding: 0;" key="0">
                                <span class="item-menu">Mike John responted tp your email</span>
                            </a-menu-item>
                            <a-menu-item style="padding: 0;" key="1">
                                <span class="item-menu">You have 5 new tasks</span>
                            </a-menu-item>
                            <a-menu-item style="padding: 0;" key="3"><span class="item-menu">You're now friend with Andrew</span></a-menu-item>
                            <a-menu-item style="padding: 0;" key="4"><span class="item-menu">Another Notifycation</span></a-menu-item>
                            <a-menu-item style="padding: 0;" key="5"><span class="item-menu">Another One</span></a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>

            <div class="icon-menu">
                <a-dropdown :trigger="['click']">
                    <div class="ant-dropdown-link" @click.prevent>
                        <user-outlined class="icon-outline"/>
                    </div>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item style="padding: 0;" key="0">
                                <span class="item-menu-user">Profile</span>
                            </a-menu-item>
                            <a-menu-item style="padding: 0;" key="1">
                                <span class="item-menu-user">Settings</span>
                            </a-menu-item>                 
                            <a-menu-divider />
                            <a-menu-item @click="handleLogout" style="padding: 0;" key="3"><span class="item-menu-user">Log out</span></a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    SearchOutlined,
    DashboardOutlined,
    BellOutlined,
    UserOutlined
} from "@ant-design/icons-vue";

function handleLogout() {
    alert("Đã đăng xuất")
    window.localStorage.removeItem('isLoggedIn');
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
}

.title-header {
    font-size: 20px;
    opacity: 0.8;
}

.header-right {
    display: flex;
}

.icon-search {
    padding: 12px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 20px;
    margin-left: 10px;
}

.icon-search:hover{
    box-shadow: 0 14px 26px -12px hsl(0deg 0% 60% / 42%), 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px hsl(0deg 0% 60% / 20%)
}
.input-search{
    cursor: pointer;
}
.input-search input {
    border: none;
    height: 40px;
    background-color: #f0f2f5;
    border-bottom: 1px solid gray;
    opacity: 0.9;
}

.input-search input:focus {
    border-bottom: 1px solid #9c27b0;
}

.icon-menu .anticon{
    cursor: pointer;
}

.ant-dropdown-menu{
    border-radius: 4px;
}
.icon-outline{
    font-size: 20px;
    padding: 15px;
    border-radius: 10px;
}

.icon-outline:hover {
    background-color: rgb(194, 190, 190);
}

.item-menu{
    padding: 10px;
    display: flex;
    padding-left: 15px;
    border-radius: 4px;
    align-items: center;
    color: rgb(90, 84, 84);
    font-size: 13px;
    margin-left: 5px;
    margin-right: 5px;
}

.item-menu:hover{
    background-color: #9c27b0;
    color: #fff;
}

.item-menu-user{
    padding: 10px;
    padding-right: 40px;
    display: flex;
    padding-left: 15px;
    border-radius: 4px;
    align-items: center;
    color: rgb(90, 84, 84);
    font-size: 13px;
    margin-left: 5px;
    margin-right: 5px;
}

.item-menu-user:hover{
    background-color: #9c27b0;
    color: #fff;
}
</style>
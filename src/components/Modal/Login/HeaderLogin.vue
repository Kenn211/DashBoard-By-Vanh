<template>
    <div class="header-login">
        <div class="container">
            <div class="row py-4">
                <div class="col-3 align-self-center">
                    <div class="logo-login">
                        <span>Login Page</span>
                    </div>
                </div>

                <div class="col-9">
                    <div class="nav-bar-header">
                        <ul class="nav-bar-menu">
                            <router-link style="margin-right: 10px;" to="/">
                                <li class="nav-bar-item">
                                    <i class="fa fa-tachometer-alt"></i>
                                    <span>DASHBOARD</span>
                                </li>
                            </router-link>
                            <router-link style="margin-right: 10px;" to="/register">
                                <li class="nav-bar-item">
                                    <i class="fas fa-user-plus"></i>
                                    <span>REGISTER</span>
                                </li>
                            </router-link>
                            <li class="nav-bar-item">
                                <i class="fa fa-fingerprint"></i>
                                <span>LOGIN</span>
                            </li>
                            <li class="nav-bar-item">
                                <i class="fas fa-lock"></i>
                                <span>LOCK</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.logo-login span {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
}

.nav-bar-menu {
    display: flex;
    justify-content: flex-end;
}

.nav-bar-item {
    color: #fff;
    font-size: 14px;
    padding: 15px;
    border-radius: 4px;
    margin-right: 10px;
}

.nav-bar-item:nth-child(3) {
    background-color: rgb(136, 136, 136);
}

.nav-bar-item:hover {
    background-color: gray;
    cursor: pointer;
}


.nav-bar-menu .nav-bar-item:last-child {
    margin-right: 0;
}

.nav-bar-item i {
    margin-right: 8px;
}
</style>
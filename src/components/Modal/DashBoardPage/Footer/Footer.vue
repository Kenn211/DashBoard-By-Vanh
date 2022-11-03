<template>
    <div class="footer-login">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 align-self-center footer-left">
                        <ul class="menu-list d-flex">
                            <li class="menu-item">
                                <span>CREATIVE KENN</span>
                            </li>
                            <li class="menu-item">
                                <span>ABOUT US</span>
                            </li>
                            <li class="menu-item">
                                <span>BLOG</span>
                            </li>
                            <li class="menu-item">
                                <span>LICENSES</span>
                            </li>
                        </ul>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="footer-right">
                        <span>© 2022, made with <i class="fas fa-heart"></i> by Creative Kenn for better web</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer-login{
    margin-top: 15vh;
    opacity: 0.6;
}

.menu-list{
    margin: 0;
}
.menu-item{
    color: black;
    font-size: 12px;
    padding: 10px;
    font-weight: bolder;
}

.footer-right{
    padding: 10px;
    color: black;
    font-size: 16px;
    text-align: end;
}
</style>
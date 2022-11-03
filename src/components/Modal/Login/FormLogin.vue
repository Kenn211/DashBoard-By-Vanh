<template>
    <div class="form-login">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <form action="">
                        <!--Card Header-->
                        <div class="card-header">
                            <div class="card-header-title">
                                <span>Login</span>
                            </div>
                            <ul class="menu-contact d-flex">
                                <li class="item-contact mx-3">
                                    <i class="fab fa-facebook-square"></i>
                                </li>
                                <li class="item-contact mx-3">
                                    <i class="fab fa-twitter"></i>
                                </li>
                                <li class="item-contact mx-3"><i class="fab fa-google"></i></li>
                            </ul>
                        </div>

                        <!--Card body-->
                        <div class="card-body">
                            <div class="card-body-title">
                                <span>Or Be Classical</span>
                            </div>
                            <div class="form-input-login">
                                <div class="input-text">
                                    <div class="icon-input">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <input type="text" v-model="formLogin.name" class="input__login"
                                        placeholder="First Name..." />

                                </div>

                                <div class="input-text">
                                    <div class="icon-input">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <input type="gmail" v-model="formLogin.email" class="input__login"
                                        placeholder="Email..." />
                                </div>

                                <div class="input-text">
                                    <div class="icon-input">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <a-input-password :bordered="false" class="input__login" v-model:value="formLogin.password" placeholder="Password" />
                                </div>
                            </div>
                        </div>

                        <!--Card Footer-->
                        <div class="card-footer">
                            <div class="card-footer-login">
                                <span @click="handleLogin">Let's Go</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { User } from '../../Interfaces/interfaces';
import router from '../../Router/router';

const dataLogin = reactive<User>({
    id: 1,
    name: 'a',
    email: 'a',
    password: '1'
});

const formLogin = reactive<User>({
    id: 1,
    name: '',
    email: '',
    password: ''
});

// (async () => {
//     try {
//         const res = await LoginRepositories.getDataLogin();
//         dataLogin.value = res.data;
//         console.log(dataLogin.value);
//     } catch (error) {
//         console.log(error);
//     }
// })();

function handleLogin() {
    if ((formLogin.name === dataLogin.name) && (formLogin.email === dataLogin.email) && (formLogin.password === dataLogin.password)) {
        window.localStorage.setItem('isLoggedIn', 'true');
        router.push('/');
    }
    else if ((formLogin.name == '' || null) || (formLogin.email == '' || null) || (formLogin.password == '' || null)) {
        alert('Nhập vào bạn ơi...');
    } else if ((formLogin.name !== dataLogin.name) || (formLogin.email !== dataLogin.email) || (formLogin.password !== dataLogin.password)) {
        alert('Sai bạn ơi');
        console.log(formLogin);
    }
}
</script>

<style scoped>
.form-login {
    margin-top: 10%;
    animation-name: loginAni;
    transition: 0.2s all ease linear;
    animation-duration: 1s;
}

@keyframes loginAni {
    0% {
        margin-top: -10px;
        opacity: 0.2;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 0.8;
    }
}

form {
    background-color: #fff;
    border-radius: 10px;
}

.card-header {
    position: relative;
    margin: 0 15px 0px 15px;
    background-color: rgb(247, 89, 115);
    height: 120px;
    top: -40px;
    border-radius: 5px;
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
        0 7px 10px -5px rgb(233 30 99 / 40%);
}

.card-header-title {
    padding: 10px 0;
    text-align: center;
}

.card-header-title span {
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
}

.menu-contact {
    justify-content: center;
    margin-top: 15px;
}

.item-contact {
    color: #fff;
    cursor: pointer;
}

.card-body {
    position: relative;
    top: -30px;
}

.card-body-title {
    text-align: center;
}

.card-body-title span {
    opacity: 0.7;
    font-size: 14px;
}

.input-text {
    display: flex;
}

.input__login {
    margin-left: 10px;
    border: none;
    border-bottom: 1px solid rgb(194, 188, 188);
    margin-top: 15px;
    outline: none;
    border-radius: 0;
    cursor: pointer;
    width: 100%;
    padding: 0;
}

.input__login:focus {
    outline: none;
    border: none;
    transition: 0.2s all ease linear;
    border-bottom: #9c27b0 1px solid;
}

.input-text .line {
    border-bottom: #9c27b0 2px solid;
}


.icon-input {
    display: flex;
    align-self: center;
    padding: 10px;
    margin-top: 15px;
}

.card-footer {
    padding: 30px;
}

.card-footer-login {
    text-align: center;
}

.card-footer-login span {
    color: rgb(243, 101, 124);
    font-size: 18px;
    cursor: pointer;
}

.card-footer-login span:hover {
    color: rgb(243, 55, 86);
}
</style>

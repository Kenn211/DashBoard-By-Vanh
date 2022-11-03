<template>
    <div class="form-register">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card-sign-up py-5">
                        <h2 class="title-sign-up">Register</h2>

                        <div class="card-body px-5">
                            <div class="info">
                                <div class="info-list d-flex">
                                    <div class="info-icon">
                                        <img src="../../../assets/timeline.png" alt="">
                                    </div>
                                    <div class="info-desc">
                                        <h4>Maketing</h4>
                                        <p>We've created the marketing campaign of the website. It was a very
                                            interesting collaboration.</p>
                                    </div>
                                </div>

                                <div class="info-list d-flex">
                                    <div class="info-icon">
                                        <img src="../../../assets/programming-code-signs.png" alt="">
                                    </div>
                                    <div class="info-desc">
                                        <h4>Fully Coded in HTML5</h4>
                                        <p>We've developed the website with HTML5 and CSS3. The client has access to the
                                            code using GitHub.</p>
                                    </div>
                                </div>

                                <div class="info-list d-flex">
                                    <div class="info-icon">
                                        <img src="../../../assets/group.png" alt="">
                                    </div>
                                    <div class="info-desc">
                                        <h4>Built Audience</h4>
                                        <p>There is also a Fully Customizable CMS Admin Dashboard for this product.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="form-register">
                                <div class="social text-center">
                                    <img src="../../../assets/facebook.png" alt="">
                                    <img src="../../../assets/dribbble.png" alt="">
                                    <img src="../../../assets/twitter.png" alt="">
                                    <h4>or be classical</h4>
                                </div>

                                <form class="form-input-login">
                                    <div class="input-text">
                                        <div class="icon-input">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <input type="text" class="input__login" v-model="formRegister.name" placeholder="First Name..." />

                                    </div>

                                    <div class="input-text">
                                        <div class="icon-input">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <input type="email" required v-model="formRegister.email" class="input__login" placeholder="Email..." />

                                    </div>

                                    <div class="input-text">
                                        <div class="icon-input">
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <input type="password" v-model="formRegister.password" class="input__login" placeholder="Password..." />

                                    </div>

                                    <div class="input-text">
                                        <div class="input-check">
                                            <a-checkbox v-model:checked="formRegister.terms"></a-checkbox>
                                            <span class="check"></span>
                                        </div>
                                        <div style="margin-top: 5px;">
                                            <span>I agree to the&nbsp;</span>
                                            <a href="">teams and conditions</a>
                                        </div>
                                    </div>
                                </form>

                                <div class="btn-register text-center">
                                    <button type="submit" @click="onSubmit()">GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { User } from '../../Interfaces/interfaces'
const dataRegister = ref<User[]>([])

const formRegister = reactive<User>({
    id: dataRegister.value.length + 1,
    name: '',
    email: '',
    password: '',
    terms: false
})


const error = reactive({
    text: "",
    status: false
});

const success = reactive({
    text: "",
    status: false
});

function onSubmit(){
    if(formRegister.name !== '' && formRegister.email !== '' && formRegister.password !== '' && formRegister.terms == true){
        dataRegister.value.push(
            {
                ...formRegister,
                id: dataRegister.value.length + 1
            }
        );
        console.log(dataRegister.value)
    }else if(formRegister.name == '' || formRegister.email == '' || formRegister.password == '' || formRegister.terms == false){
        alert("Nhập vào bạn eei...");
    }
}

</script>

<style scoped>

@keyframes RegisterAni {
    0% {
        margin-top: -20rem;
        opacity: 0.2;
    }

    50% {
        opacity: 0.5;
    }

    80% {
        opacity: 0.65;
    }

    100% {
        opacity: 0.8;
    }
}

.card-sign-up {
    background-color: #fff;
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-top: 10px;
    animation-name: RegisterAni;
    transition: 0.2s all ease linear;
    animation-duration: 1s;
}

.title-sign-up {
    text-align: center;
    opacity: 0.8;
}

.card-body {
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 4%;
}

.info {
    padding-right: 5%;
}

.form-register {
    padding-left: 5%;
}

.info-icon img {
    color: #E91E63;
}

.info-desc {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}

.info-desc h4 {
    font-size: 17px;
    margin-top: 7px;
    margin-bottom: 20px;
    color: rgb(46, 45, 45);
}

.info-desc p {
    font-size: 14px;
    margin-top: 0;
    opacity: 0.7;
}

.social img {
    width: 40px;
}

.social img:nth-child(1),
.social img:nth-child(2) {
    margin-right: 10px;
}

.card-body img:hover {
    border-radius: 50%;
    cursor: pointer;
}

.card-body img:nth-child(3):hover {
    box-shadow: 0 14px 26px -12px rgb(85 172 238 / 42%), 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(85 172 238 / 20%);
}

.card-body img:nth-child(2):hover {
    box-shadow: 0 14px 26px -12px rgb(234 76 137 / 42%), 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(234 76 137 / 20%);
}

.card-body img:nth-child(1):hover {
    box-shadow: 0 14px 26px -12px rgb(59 89 152 / 42%), 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(59 89 152 / 20%);
}

.social h4 {
    font-weight: inherit;
    font-size: 14px;
    margin: 20px 0;
}

.input-text {
    display: flex;
    margin-top: 20px;
    align-items: center;
}

.input__login {
    margin-left: 10px;
    border: none;
    border-bottom: 1px solid rgb(194, 188, 188);
    outline: none;
    border-radius: 0;
    cursor: pointer;
    width: 100%;
}

.input__login:focus {
    transition: 0.2s all ease linear;
    border-bottom: #9c27b0 1px solid;
}

.icon-input {
    display: flex;
    align-self: center;
    padding: 10px;
}

.input-check {
    padding: 8px;
    margin-top: 5px;
}

.input-check input {
    width: 20px;
    height: 20px;
}

.input-check input:checked {
    color: #9c27b0;
    background-color: #fff;
}

.form-input-login .input-text:last-child span{
    font-size: 14px;
    opacity: 0.7;
}

.form-input-login .input-text:last-child a {
    color:#9c27b0;
    font-size: 14px;
}

.btn-register{
    margin-top: 10px;
}
.btn-register button{
    padding: 12px;
    border: none;
    background-color: #9c27b0;
    border-radius: 30px;
    font-size: 12px;
    color: #fff;
}

.btn-register button:hover{
    box-shadow: 0 14px 26px -12px rgb(156 39 176 / 42%), 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(156 39 176 / 20%);
}
</style>
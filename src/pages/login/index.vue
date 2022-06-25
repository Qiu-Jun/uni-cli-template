<template>
    <viwe class="login-box">
        <view>
            <u--input
                placeholder="请输入账号"
                border="surround"
                v-model="form.username"
            ></u--input>
            <u--input
                placeholder="请输入密码"
                border="surround"
                type="password"
                v-model="form.password"
            ></u--input>
            <u--input
                placeholder="请输入验证码"
                border="surround"
                v-model="form.captcha"
            ></u--input>
            <image
                :src="baseUrl + '/shop/common/captcha?' + nowTimeStand"
                @click="handleCaptcha"
            ></image>
        </view>


        <viwe>
            <u--input
                placeholder="请输入账号"
                border="surround"
                v-model="regForm.phone"
            ></u--input>
            <u--input
                placeholder="请输入密码"
                border="surround"
                type="password"
                v-model="regForm.password"
            ></u--input>
            <u--input
                placeholder="请输入验证码"
                border="surround"
                v-model="form.code"
            ></u--input>
           
             
        </viwe>
        <u-button
            type="primary"
            text="获取验证码"
            @click="handleSMScode"
        />
        <u-button
            type="primary"
            text="登录"
            @click="handleLogin"
        />

        <u-button
            type="primary"
            text="注册"
            @click="handleRegister"
        />
    </viwe>
</template>

<script>
import {  getAgreement } from '@/apis/common'
import { userRegister } from '@/apis/user'
import { getPhoneCodeUnlogin } from '@/apis/common'
import { baseUrl } from '@/config/constants'
import { debounce } from '@/utils/utils'
import Validate from '@/lib/validator/index'
import { notEmpty, isMobile } from '@/lib/validator/rules'
import { mapActions }  from 'vuex'

export default {
    data() {
        return {
            baseUrl,
            nowTimeStand: Date.now(),
            form: {
                username: '',
                captcha: '',
                password: '',

                phone: '',
                password: '',
                code: ''
            }
        }
    },

    methods: {
        ...mapActions('user', ['login']),

        handleCaptcha: debounce(function () {
            this.nowTimeStand = Date.now()
        }, 300),

        handleLogin: debounce(async function () {
            const errMsg = this.validateForm()
            if(errMsg) return this.$u.toast(errMsg)
            this.login(this.form)
        }, 500),

        handleRegister: debounce(function () {
            userRegister({
                phone: '17328503244',
                password: '12345678',
                code: this.form.code
            }).then(res => {
                console.log(res)
            })
        }, 500),

        handleSMScode: debounce(function () {
            getPhoneCodeUnlogin({
                phone: '17328503244',
                captcha: this.form.captcha
            }).then(res => {
                console.log(res)
            })
        }, 500),

        validateForm() {
            const validator = new Validate({
                notEmpty,
                isMobile 
            })
            const form = this.form
            validator.add(form.username, [{ strategy: 'notEmpty', errorMsg: '请输入账号' }, { strategy: 'isMobile', errorMsg: '请输入正确的手机号码' }])
            validator.add(form.captcha, [{ strategy: 'notEmpty', errorMsg: '请输入验证码' }])
            validator.add(form.password, [{ strategy: 'notEmpty', errorMsg: '请输入密码' }])
            return validator.validate()
        }
    }
}
</script>

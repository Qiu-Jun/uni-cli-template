import { request } from '@/lib/service/index'

// 登录
export function userLogin(data) {
    return request({
        url: '/shop/login',
        method: 'post',
        data
    })
}

// 注册
export function userRegister(data) {
    return request({
        url: '/shop/register',
        method: 'post',
        data
    })
}

// 手机验证码登录
export function userPhoneLogin(data) {
    return request({
        url: '/shop/loginByMsg',
        method: 'post',
        data
    }) 
}

// 重置密码
export function userResetPassword(data) {
    return request({
        url: '/shop/resetPassword',
        method: 'post',
        data
    }) 
}

// 修改手机号
export function userEditPhone(data) {
    return request({
        url: '/shop/changePhone',
        method: 'post',
        data
    }) 
}


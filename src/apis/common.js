import { request } from '@/lib/service/index'

// 测试
export function test(data) {
    return request({
        url: '/shop/login',
        method: 'post',
        data
    })
}

// 获取手机验证码(非登录)
export function getPhoneCodeUnlogin(data) {
    return request({
        url: '/shop/common/sendResetMsgCode',
        method: 'post',
        data
    }) 
}

// 获取手机验证码(登录)
export function getPhoneCodeNeedlogin() {
    return request({
        url: '/shop/common/sendMsgCode',
        method: 'post',
        data
    }) 
}

// 获取商户服务协议
export function getAgreement() {
    return request({
        url: '/shop/common/getServiceAgreement'
    }) 
}
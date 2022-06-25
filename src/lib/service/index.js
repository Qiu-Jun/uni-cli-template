import { mergeOps, httpCodeCb } from './helper'
// 未处理好

export function request(options) {
    const config = mergeOps(options)
    console.log(config)
    return new Promise((resolve, reject) => {
        if(config.showLoading) {
            uni.showLoading({
                title: '加载中...',
                mask: true
            })
        }
        uni.request({
            ...config,
            success: res => {
                const { statusCode, data } = res
                if(statusCode === 200) {
                    const { code } = data
                    httpCodeCb[code](data, resolve, reject)
                }
            },
            fail: err => {
                console.log(err)
            },
            complete: () => {
                config.showLoading && uni.hideLoading()
            }
        })
    })
}

export function upload() {
    return new Promise((resolve, reject) => {

    })
}
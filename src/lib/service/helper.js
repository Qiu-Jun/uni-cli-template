import { baseUrl } from '@/config/constants'
import store from '@/store/index'

export function mergeOps(ops) {
    if(!ops || !ops.url) return
    const configs = {
        url: `${baseUrl + ops.url}`,
        header: {
            'content-type': 'application/x-www-form-urlencoded',
            token: store.getters.token || null
        },
        data: ops.data || null,
        method: ops.method ? ops.method.toUpperCase() : 'GET',
        showLoading: ops.showLoading ? ops.showLoading : true
    }
    ops.header && (config.header = {
        ...config.header,
        ...ops.header
    })
    return configs
}

export const httpCodeCb = {
    0: (data, resolve, reject) => {
        return resolve(data)
    },
    400: (data, resolve, reject) => {
        wx.showToast({
            title: data.msg,
            icon: 'none'
        })
        return reject(data)
    },
}
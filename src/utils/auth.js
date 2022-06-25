import { setStorage, getStorageSync, removeStorageSync } from '@/lib/storage/index'
import { userInfoKey } from '@/config/constants'
/**
 * @desc userInfo和token用一个对象存
 */
 
export function setUserInfo(userInfoData) {
    if(!userInfoData) return
    return setStorage(userInfoKey, userInfoData)
}

export function getUser() {
    return getStorageSync(userInfoKey)
}

export function removeUserInfo() {
    return removeStorageSync(userInfoKey)
}

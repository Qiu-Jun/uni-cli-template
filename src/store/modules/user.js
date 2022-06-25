/**
 * @desc 此模块为用户相关
 */
import { userLogin } from '@/apis/user'
import { userInfoKey } from '@/config/constants'
import { getStorageSync, setStorage, removeStorageSync } from '@/lib/storage/index' 

const state = {
	token: null,
    userInfo: null
}

const mutations = {
    SETTOKEN: (state, token) => {
        state.token = token
    },
    SETUSERINFO: (state, userInfo) => {
        state.userInfo = userInfo
    }
}

const actions = {
    // 初始化用户信息
    initUserInfo: ({ commit }) => {
        const userInfo = getStorageSync(userInfoKey)
        if(userInfo && userInfo.token) {
            commit('SETTOKEN', userInfo.token)
            commit('SETUSERINFO', userInfo.userInfo)
        } else {
            uni.navigateTo({
                url: '/pages/login/index'
            })
        }
    },

    login: ({ commit }, form) => {
        userLogin(form)
            .then(({ code, data }) => {
                if(code === 0) {
                    const { token, loginAccount } = data
                    commit('SETUSERINFO', loginAccount || null)
                    commit('SETTOKEN', token || null)
                    setStorage(userInfoKey, {
                        token: token || null,
                        userInfo: loginAccount || null
                    })
                    uni.navigateBack()
                }
            })
    },

    logout: ({ commit }) => {
        commit('SETTOKEN', null)
        commit('SETUSERINFO', null)
        removeStorageSync(userInfoKey)
    }
}

export default {
    namespaced: true, 
    state,
	mutations,
	actions
}
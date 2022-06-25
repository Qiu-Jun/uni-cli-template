/**
 * @desc 此模块为app相关  如一些系统信息
 */
const state = {
	systemInfo: {}
}

const mutations = {
    SETSYSTEMINFO: (state, systemData) => {
        state.systemInfo = systemData
    }
}

const actions = {
	setSystemInfo: ({ commit }) => {
        const systemInfo = uni.getSystemInfoSync()
        commit('SETSYSTEMINFO', systemInfo || {})
    }
}

export default {
    namespaced: true, 
    state,
	mutations,
	actions
}
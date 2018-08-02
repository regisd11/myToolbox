const types = {
    TOGGLE_LOGIN_PAGE: 'TOGGLE_LOGIN_PAGE',

}

// initial state
const state = {
    loginPage: false
}

// getters
const getters = {
    loginPage: state => state.loginPage
}

// actions
const actions = {
    toggleLoginPage({
        commit,
        state
    }) {
        commit(types.TOGGLE_LOGIN_PAGE)
    }

}

// mutations
const mutations = {
    [types.TOGGLE_LOGIN_PAGE](state) {
        state.loginPage = !state.loginPage
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
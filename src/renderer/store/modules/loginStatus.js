const types = {

    TOGGLE_LOGEDIN: 'TOGGLE_LOGEDIN'
}

// initial state
const state = {
    isloged: false,

}

// getters
const getters = {
    isloged: state => state.isloged,

}

// actions
const actions = {
    toggleIsloged({
        commit,
        state
    }) {
        commit(types.TOGGLE_LOGEDIN)
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
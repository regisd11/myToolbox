const types = {
    TOGGLE_EDITEXP_PAGE: 'TOGGLE_EDITEXP_PAGE',
    TOGGLE_NEWEXP_PAGE: 'TOGGLE_NEWEXP_PAGE'

}

// initial state
const state = {
    editExpPage: false,
    newExpPage: false
}

// getters
const getters = {
    editExpPage: state => state.editExpPage,
    newExpPage: state => state.newExpPage
}

// actions
const actions = {
    toggleNewExpPage({
        commit,
        state
    }) {
        commit(types.TOGGLE_NEWEXP_PAGE)
    },
    toggleEditExpPage({
        commit,
        state
    }) {
        commit(types.TOGGLE_EDITEXP_PAGE)
    }

}

// mutations
const mutations = {
    [types.TOGGLE_NEWEXP_PAGE](state) {
        state.newExpPage = !state.newExpPage
    },
    [types.TOGGLE_EDITEXP_PAGE](state) {
        state.editExpPage = !state.editExpPage
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
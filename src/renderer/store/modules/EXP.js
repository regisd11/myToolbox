const types = {
    TOGGLE_EDITEXP_PAGE: 'TOGGLE_EDITEXP_PAGE',

}

// initial state
const state = {
    editExpPage: false
}

// getters
const getters = {
    editExpPage: state => state.editExpPage
}

// actions
const actions = {
    toggleEditExpPage({
        commit,
        state
    }) {
        commit(types.TOGGLE_EDITEXP_PAGE)
    }

}

// mutations
const mutations = {
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
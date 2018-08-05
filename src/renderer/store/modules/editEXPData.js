const types = {
    SAVE_EDITEXP_DATA: 'SAVE_EDITEXP_DATA',

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
        commit(types.SAVE_EDITEXP_DATA)
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
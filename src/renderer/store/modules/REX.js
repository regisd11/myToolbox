const types = {
    TOGGLE_EDITREX_PAGE: 'TOGGLE_EDITREX_PAGE',

}

// initial state
const state = {
    editRexPage: false
}

// getters
const getters = {
    editRexPage: state => state.editRexPage
}

// actions
const actions = {
    toggleEditRexPage({
        commit,
        state
    }) {
        commit(types.TOGGLE_EDITREX_PAGE)
    }

}

// mutations
const mutations = {
    [types.TOGGLE_EDITREX_PAGE](state) {
        state.editRexPage = !state.editRexPage
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
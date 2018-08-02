const types = {
    TOGGLE_EDITDC_PAGE: 'TOGGLE_EDITDC_PAGE',

}

// initial state
const state = {
    editDcPage: false
}

// getters
const getters = {
    editDcPage: state => state.editDcPage
}

// actions
const actions = {
    toggleEditDCPage({
        commit,
        state
    }) {
        commit(types.TOGGLE_EDITDC_PAGE)
    }

}

// mutations
const mutations = {
    [types.TOGGLE_EDITDC_PAGE](state) {
        state.editDcPage = !state.editDcPage
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
const types = {
    TOGGLE_EDITPROFILE_PAGE: 'TOGGLE_EDITPROFILE_PAGE',

}

// initial state
const state = {
    editProfilePage: false
}

// getters
const getters = {
    editProfilePage: state => state.editProfilePage
}

// actions
const actions = {
    toggleEditProfilePage({
        commit,
        state
    }) {
        commit(types.TOGGLE_EDITPROFILE_PAGE)
    }

}

// mutations
const mutations = {
    [types.TOGGLE_EDITPROFILE_PAGE](state) {
        state.editProfilePage = !state.editProfilePage
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
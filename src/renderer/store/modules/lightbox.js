const types = {
    EDIT_IMAGE_TOGGLE: 'EDIT_IMAGE_TOGGLE',
}

// initial state
const state = {
    image: false,
}

// getters
const getters = {
    image: state => state.image
}

// actions
const actions = {
    toggleImage({
        commit,
        state
    }) {
        commit(types.EDIT_IMAGE_TOGGLE)
    }
}

// mutations
const mutations = {
    [types.EDIT_IMAGE_TOGGLE](state) {
        state.image = !state.image
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
import path from "path";
import {
    resolve
} from "url";
import {
    remote
} from "electron";
import fs from "fs";

const types = {
    GET_PROFILE: 'GET_PROFILE',
}

let getMyProfile = function() {
    let file = path.join(remote.app.getPath("userData"), "/profile.json")
    if (fs.existsSync(file)) {
        var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
        return obj
    } else {
        let obj = {
            consultantName: "",
            consultantPosition: "",
            consultantLanguages: [],
            consultantCommunity: ""
        };
        return obj
    }
}

// initial state
const state = {
    profile: getMyProfile(),
}

// getters
const getters = {
    profile: state => state.profile
}

// actions
const actions = {
    getProfile({
        commit,
        state
    }) {
        commit(types.GET_PROFILE)
    }
}

// mutations
const mutations = {
    [types.GET_PROFILE](state) {
        state.profile = getMyProfile()
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
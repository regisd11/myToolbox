import path from "path";
import {
    resolve
} from "url";
import {
    remote
} from "electron";
import fs from "fs";

const types = {
    GET_PHOTO: 'GET_PHOTO',
}

let getMyPhoto = function() {
    let file = path.join(remote.app.getPath("userData"), "/photo.png")
    let extensionName = path.extname(file)
    if (fs.existsSync(file)) {
        let bitmap = fs.readFileSync(file);
        let myBuffer = new Buffer(bitmap).toString('base64')
        let imgSrcString = `data:image/${extensionName.split('.').pop()};base64,${myBuffer}`;
        return imgSrcString
    } else {
        let imgSrcString = "../../static/imgs/300x480.png"
        return imgSrcString
    }
}

// initial state
const state = {
    photo: getMyPhoto(),
}

// getters
const getters = {
    photo: state => state.photo
}

// actions
const actions = {
    getPhoto({
        commit,
        state
    }) {
        commit(types.GET_PHOTO)
    }
}

// mutations
const mutations = {
    [types.GET_PHOTO](state) {
        state.photo = getMyPhoto()
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
const promise = require('es6-promise').Promise

import db from '../../datastore'

// initial state
const state = {
    DCsList: []
}


// getters
const getters = {
    DCsList: state => {
        return state.DCsList
    },
    dc: (state, getters) => id => {

        return state.DCsList.find(({
            _id
        }) => _id == id)
    }
}

// actions
const actions = {
    storeDc({
        commit
    }, dc) {
        return new promise((resolve, reject) => {
            let callback = (err, newDc, updatedDc) => {
                if (err) {
                    console.error(err)
                    reject(err)
                }
                const dcToBeSaved = updatedDc ? updatedDc : newDc
                commit('saveDc', dcToBeSaved)
                resolve()
            }
            if (dc._id) {
                db.DCs.update({
                    _id: dc._id,
                }, dc, {
                    returnUpdatedDocs: true
                }, callback)
            } else {
                db.DCs.insert(dc, callback)
            }
        })
    },
    removeDc({
        commit
    }, _id) {
        new promise((resolve, reject) => {
            db.DCs.remove({
                _id: _id
            }, {}, (err, numRemoved) => {
                if (err) {
                    console.error(err)
                    reject(err)
                }
                commit('deleteDc', _id)
                resolve()
            })
        })
    },
    saveDcAct: (context, payload) => {
        context.commit('saveDc', payload)
    },
    populateDcStoreAct: (context) => {
        context.commit("populateDcStore")
    },
    storeExpAct: (context, dc) => {
        context.commit("storeDc", dc)
    }

}

// mutations
const mutations = {
    populateDcStore: (state) => {
        db.DCs.find({}, (err, result) => {
            if (err) {
                console.log('oula error : ' && err)
            } else {
                state.DCsList = result
            }
        })
    },
    saveDc: (state, payload) => {
        state.DCsList.unshift(payload)
    },
    deleteDc: (state, payload) => {
        let index = state.DCsList.findIndex(({
            payload
        }) => _id === payload)
        state.DCsList.splice(index, 1)
    }


}

export default {
    state,
    getters,
    actions,
    mutations
}
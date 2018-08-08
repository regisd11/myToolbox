const promise = require('es6-promise').Promise

import db from '../../datastore'

// initial state
const state = {
    expList: []
}


// getters
const getters = {
    expList: state => {
        return state.expList
    },
    exp: (state, getters) => id => {
        state.expList.find(({
            _id
        }) => _id == id)
    }
}

// actions
const actions = {
    storeExp({
        commit
    }, exp) {
        console.log('debut du processus')
        console.log(exp)
        return new promise((resolve, reject) => {
            console.log('la promise')
            let callback = (err, newExp, updatedExp) => {
                if (err) {
                    console.error(err)
                    reject(err)
                }
                const expToBeSaved = updatedExp ? updatedExp : newExp
                console.log('expToBeSaved')
                console.log(expToBeSaved)
                console.log('commit saveExp')
                commit('saveExp', expToBeSaved)
                resolve()
            }
            console.log('exp ajouté au store')
            if (exp._id) {
                console.log("update de exp à la base")
                db.exps.update({
                    _id: exp._id,
                }, exp, {
                    returnUpdatedDocs: true
                }, callback)
            } else {
                console.log("ajout de exp à la base")
                db.exps.insert(exp, callback)
            }
        })
    },
    removeExp({
        commit
    }, _id) {
        new promise((resolve, reject) => {
            db.exps.remove({
                _id: _id
            }, {}, (err, numRemoved) => {
                if (err) {
                    console.error(err)
                    reject(err)
                }
                commit('deleteExp', _id)
                resolve()
            })
        })
    },
    saveEXPact: (context, payload) => {
        context.commit('saveExp', payload)
    },
    populateExpStoreAct: (context) => {
        context.commit("populateExpStore")
    },
    storeExpAct: (context, exp) => {
        context.commit("storeExp", exp)
    }

}

// mutations
const mutations = {
    populateExpStore: (state) => {
        db.exps.find({}, (err, result) => {
            if (err) {
                console.log('oula error : ' && err)
            } else {
                state.expList = result
            }
        })
    },
    saveExp: (state, payload) => {
        state.expList.unshift(payload)
    },
    deleteExp: (state, payload) => {
        let index = state.expList.findIndex(({
            payload
        }) => _id === payload)
        state.expList.splice(index, 1)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
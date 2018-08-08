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
            $db.exps.remove({
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
    populateExpStoreAct: (context, payload) => {
        context.commit("populateExpStore", payload)
    },
    storeExpAct: (context, exp, database) => {
        context.commit("storeExp", exp, database)
    }

}

// mutations
const mutations = {
    populateExpStore: (state, payload) => {
        payload.find({}, (err, result) => {

            if (err) {
                console.log('oula error : ' && err)
            } else {
                console.log(result)
                state.expList.push(result)
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
    },
    storeExp: (
        state,
        exp,
        db
    ) => {
        return new promise((resolve, reject) => {
            let callback = (err, newExp, updatedExp) => {
                if (err) {
                    console.error(err)
                    reject(err)
                }
                const expToBeSaved = updatedExp ? updatedExp : newExp
                commit('saveExp', expToBeSaved)
                resolve()
            }

            if (exp._id) {
                db.update({
                    _id: exp._id
                }, exp, {
                    returnUpdatedDocs: true
                }, callback)
            } else {
                db.insert(exp, callback)
            }
        })
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
/*
{
    _id: null,
    client: null,
    experienceName: null,
    experienceBegin: null,
    experienceEnd: null,
    context: null,
    subjects: [{
        subject: null,
        tasks: [{
            task: null,
            subTasks: [{
                subTask: null
            }]
        }]
    }]
}
*/

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
                $db.exps.update({
                    _id: exp._id
                }, exp, {
                    returnUpdatedDocs: true
                }, callback)
            } else {
                $db.exps.insert(exp, callback)
            }
        })
    },
    removeExp({
        commit
    }, _id) {
        return new promise((resolve, reject) => {
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
    }

}

// mutations
const mutations = {
    populateExpStore: (state, payload) => {
        db.exps.find({}, (err, result) => {
            state.expList = result
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
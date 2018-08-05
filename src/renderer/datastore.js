import datastore from 'nedb'
import path from 'path'
import {
    resolve
} from 'url'
import {
    remote
} from 'electron'
const db = {}

db.exps = new datastore({
    filename: path.join(remote.app.getPath('userData'), '/exp.db'),
    autoload: true,
    onload: err => {
        if (err) {
            console.error('Error while loading the exp database')
        }
    },
    timestampData: true
})

db.DCs = new datastore({
    filename: path.join(remote.app.getPath('userData'), '/DC.db'),
    autoload: true,
    onload: err => {
        if (err) {
            console.error('Error while loading the exp database')
        }
    },
    timestampData: true
})

db.REXs = new datastore({
    filename: path.join(remote.app.getPath('userData'), '/REX.db'),
    autoload: true,
    onload: err => {
        if (err) {
            console.error('Error while loading the exp database')
        }
    },
    timestampData: true
})

export default db
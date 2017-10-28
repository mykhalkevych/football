import {initializeApp} from 'firebase'
import config from '../configApp'
console.log('console.log(', config, initializeApp)

let firebase = initializeApp(config.firebaseConfig)

let instance = null
class FirebaseStore {
  constructor () {
    if (!instance) {
      instance = this
    }
    this.db = firebase.database()
    console.log('forebase', this.db)
    return instance
  }

  getRef (refName) {
    return this.db.ref(refName)
  }

  getChild (key, ref) {
    return ref.child(key)
  }

  getData (query, callback) {
    return query.on('value', snap => {
      callback(snap.val())
    })
  }

  getValue (ref) {
    return ref.once('value')
    .then(data => {
      return data.val()
    })
  }

  updateValue (ref, valueKey, value) {
    console.log('valueKey', valueKey)
    ref.update({
      [valueKey]: value
    })
  }
}

export default new FirebaseStore()

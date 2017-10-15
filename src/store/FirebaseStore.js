/* global firebase */
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

  getData (keyName) {
    return this.db.ref().child(keyName)
  }
}

export default new FirebaseStore()

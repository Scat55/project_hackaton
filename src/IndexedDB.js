const DB_NAME = 'chatdb'
const DB_VERSION = '1'
const STORAGE_DIALOGS = 'dialogs'
//const STORAGE_MESSAGES = 'msg'
let DB

export default {
    async getDb () {
      return new Promise((resolve, reject) => {
        if (DB) {
          return resolve(DB)
        }
        const request = window.indexedDB.open(DB_NAME, DB_VERSION)
        request.onerror = e => {
          console.log('Error opening db', e)
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('Error')
        }
        request.onsuccess = e => {
          DB = e.target.result
          resolve(DB)
        }
        request.onupgradeneeded = e => {
          let db = e.target.result
          db.createObjectStore(STORAGE_DIALOGS, { autoIncrement: true, keyPath: 'id' })
          //db.createObjectStore(STORAGE_MESSAGES, {autoIncrement: true,keyPath: 'id' })
        }
      })
    },
    async deleteDialog (dialog) {
      const db = await this.getDb()
      return new Promise(resolve => {
        const trans = db.transaction([STORAGE_DIALOGS], 'readwrite')
        trans.oncomplete = () => {
          resolve()
        }
        const chat = trans.objectStore(STORAGE_DIALOGS)
        chat.delete(dialog.id)
      })
    },
    async getDialogs () {
      let db = await this.getDb()
      return new Promise(resolve => {
        let trans = db.transaction([STORAGE_DIALOGS], 'readonly')
        trans.oncomplete = () => {
          resolve(dialogs)
        }
        const chat = trans.objectStore(STORAGE_DIALOGS)
        const dialogs = []
        chat.openCursor().onsuccess = e => {
          const cursor = e.target.result
          if (cursor) {
            dialogs.push(cursor.value)
            cursor.continue()
          }
        }
      })
    },
    async saveDialog (dialog) {
      let db = await this.getDb()
      return new Promise(resolve => {
        let trans = db.transaction([STORAGE_DIALOGS], 'readwrite')
        trans.oncomplete = () => {
          resolve()
        }
        let chat = trans.objectStore(STORAGE_DIALOGS)
        chat.put(dialog)
      })
    },
    

  }

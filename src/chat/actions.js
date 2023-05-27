import IndexedDB from "@/IndexedDB"

export default {
  addDialogToDb ({ commit }, { dialog }) {
    return IndexedDB.saveDialog(dialog)
  },
  async getDialogs ({ commit }) {
    let dialogs = await IndexedDB.getDialogs()
    commit('SET_DIALOGS', dialogs)
  },
  deleteDialogFromDb ({ commit }, { dialog }) {
    return IndexedDB.deleteDialog(dialog)
  }
}
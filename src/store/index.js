import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
    ],
    historiques: [
    ],
  },
  getters: {
  },
  mutations: {
    ajoutPerso(state, personnage){
      state.contacts.push(personnage)
    },
    ajoutJournal(state, journal) {
      state.journals.push(journal)
    },
  },
  actions: {
  },
  modules: {
  }
})

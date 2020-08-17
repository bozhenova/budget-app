const dataStore = {
  namespaced: true,
  state: {
    items: [
      {
        type: 'INCOME',
        value: 100,
        comment: 'Sold my picture',
        id: 1
      },
      {
        type: 'OUTCOME',
        value: 50,
        comment: 'Shopping',
        id: 2
      }
    ],
    currentId: 0,
    sortType: 'all',
    dialogVisible: false
  },
  getters: {
    itemsList: state => state.items,
    sortType: state => state.sortType,
    dialogVisible: state => state.dialogVisible,
    currentId: state => state.currentId
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
    },
    DELETE_ITEM(state, id) {
      const index = state.items.findIndex(item => item.id === id);
      state.items.splice(index, 1);
    },
    CHANGE_SORT_TYPE(state, type) {
      state.sortType = type;
    },
    TOGGLE_DIALOG(state, status) {
      state.dialogVisible = status;
    },
    SET_CURRENT_ID(state, id) {
      state.currentId = id;
    }
  },
  actions: {
    addNewItem({ commit }, item) {
      const newItem = { ...item, id: Math.random() };
      commit('ADD_ITEM', newItem);
    },
    deleteItem({ commit }, id) {
      commit('DELETE_ITEM', id);
    },
    changeSortType({ commit }, type) {
      commit('CHANGE_SORT_TYPE', type);
    },
    toggleDialog({ commit }, status) {
      commit('TOGGLE_DIALOG', status);
    },
    setCurrentId({ commit }, id) {
      commit('SET_CURRENT_ID', id);
    }
  }
};

export default dataStore;

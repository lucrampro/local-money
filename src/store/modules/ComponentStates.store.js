const initialState = () => ({
  confirmPageMessage: '',
});

export default {

  state: initialState(),

  // Getter functions
  getters: {
    confirmPageMessage: (state) => state.confirmPageMessage,
  },

  actions: {
    setConfirmPageMessage(context, confirmPageMessage) {
      context.commit('SET_CONFIRM_PAGE_MESSAGE', confirmPageMessage);
    },
  },

  mutations: {
    SET_CONFIRM_PAGE_MESSAGE(state, confirmPageMessage) {
      state.confirmPageMessage = confirmPageMessage;
    },
  },

};

const initialState = () => ({
  confirmPageMessage: '',
  gouvernanceList: [],
  appDownload: false,
});

export default {

  state: initialState(),

  // Getter functions
  getters: {
    confirmPageMessage: (state) => state.confirmPageMessage,
    gouvernanceList: (state) => state.gouvernanceList,
    appDownload: (state) => state.appDownload,
  },

  actions: {
    setConfirmPageMessage(context, confirmPageMessage) {
      context.commit('SET_CONFIRM_PAGE_MESSAGE', confirmPageMessage);
    },
    setGouvernanceList(context, gouvernanceList) {
      context.commit('SET_GOUVERNANCE_LIST', gouvernanceList);
    },
    setAppDownload(context, appDownload) {
      context.commit('SET_APP_DOWNLOAD', appDownload);
    },
    reset({ commit }) {
      commit('RESET');
    },
  },

  mutations: {
    SET_CONFIRM_PAGE_MESSAGE(state, confirmPageMessage) {
      state.confirmPageMessage = confirmPageMessage;
    },
    SET_GOUVERNANCE_LIST(state, gouvernanceList) {
      state.gouvernanceList = gouvernanceList;
    },
    SET_APP_DOWNLOAD(state, appDownload) {
      state.appDownload = appDownload;
    },
    RESET(state) {
      const newState = initialState();
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
  },
};

const initialState = () => ({
  userToken: '',
  userId: null,
  compteType: '',
  userFirstName: '',
  solde: null,
  transferId: null,
  transaction: [],
});

export default {

  state: initialState(),

  // Getter functions
  getters: {
    userToken: (state) => state.userToken,
    userId: (state) => state.userId,
    userFirstName: (state) => state.userFirstName,
    compteType: (state) => state.compteType,
    solde: (state) => state.solde,
    transferId: (state) => state.transferId,
    transactions: (state) => state.transferId,
  },

  actions: {
    setUserFirstName(context, userFirstName) {
      context.commit('SET_USER_FIRSTNAME', userFirstName);
    },
    setToken(context, token) {
      context.commit('SET_TOKEN', token);
    },
    setUserId(context, userId) {
      context.commit('SET_USER_ID', Number(userId));
    },
    setCompteType(context, userId) {
      context.commit('SET_COMPTE_TYPE', userId);
    },
    setSolde(context, solde) {
      context.commit('SET_SOLDE', solde);
    },
    setTransferId(context, transferId) {
      context.commit('SET_TRANSFERID', transferId);
    },
    setTransactions(context, transaction) {
      context.commit('SET_TRANSACTIONS', transaction);
    },
    reset({ commit }) {
      commit('RESET');
    },
  },

  mutations: {
    SET_USER_FIRSTNAME(state, userFirstName) {
      state.userFirstName = userFirstName;
    },
    SET_TOKEN(state, token) {
      state.userToken = token;
    },
    SET_COMPTE_TYPE(state, compteType) {
      state.compteType = compteType;
    },

    SET_USER_ID(state, userId) {
      state.userId = userId;
    },

    SET_SOLDE(state, solde) {
      state.solde = solde;
    },
    SET_TRANSFERID(state, transferId) {
      state.transferId = transferId;
    },
    SET_TRANSACTIONS(state, transaction) {
      state.transaction = transaction;
    },
    RESET(state) {
      const newState = initialState();
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
  },

};

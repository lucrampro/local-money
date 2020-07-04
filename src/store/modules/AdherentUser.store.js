const initialState = () => ({
  userToken: '',
  userId: null,
  compteType: '',
  userFirstName: '',
  solde: null,
  transferId: null,
  transactions: [],
  companiesList: [],
  companyPosts: [],
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
    transactions: (state) => state.transactions,
    companiesList: (state) => state.companiesList,
    companyPosts: (state) => state.companyPosts,
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
    setTransactions(context, transactions) {
      context.commit('SET_TRANSACTIONS', transactions);
    },
    setCompaniesList(context, companiesList) {
      context.commit('SET_COMPANIESLIST', companiesList);
    },
    setCompanyPosts(context, companyPosts) {
      context.commit('SET_COMPANIESPOST', companyPosts);
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
    SET_TRANSACTIONS(state, transactions) {
      state.transactions = transactions;
    },
    SET_COMPANIESLIST(state, companiesList) {
      state.companiesList = companiesList;
    },
    SET_COMPANIESPOST(state, companyPosts) {
      state.companyPosts = companyPosts;
    },
    RESET(state) {
      const newState = initialState();
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
  },

};

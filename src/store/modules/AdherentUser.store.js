const initialState = () => ({
  userInfomations: {},
  userToken: '',
  userId: null,
  compteType: '',
  solde: null,
  accountNumber: null,
  transactions: [],
  companiesList: [],
  companyPosts: [],
  contacts: [],
});

export default {

  state: initialState(),

  // Getter functions
  getters: {
    userInfomations: (state) => state.userInfomations,
    userToken: (state) => state.userToken,
    userId: (state) => state.userId,
    compteType: (state) => state.compteType,
    solde: (state) => state.solde,
    accountNumber: (state) => state.accountNumber,
    transactions: (state) => state.transactions,
    companiesList: (state) => state.companiesList,
    companyPosts: (state) => state.companyPosts,
    contacts: (state) => state.contacts,
  },

  actions: {
    setUserFirstName(context, userFirstName) {
      context.commit('SET_USER_FIRSTNAME', userFirstName);
    },
    setToken(context, token) {
      context.commit('SET_TOKEN', token);
    },
    setUserInformations(context, informations) {
      const informationAutorised = ['id', 'type', 'first_name', 'account_number', 'last_name', 'address', 'number_phone', 'description', 'name'];
      const informationsValid = {};
      Object.entries(informations).forEach(([key, val]) => {
        if (informationAutorised.indexOf(key) !== -1) {
          informationsValid[key] = val;
        }
      });
      context.commit('SET_INFORMATIONS', informationsValid);
    },
    setCompteType(context, compteType) {
      context.commit('SET_COMPTE_TYPE', compteType);
    },
    setSolde(context, solde) {
      context.commit('SET_SOLDE', solde);
    },
    setAccountNumber(context, accountNumber) {
      context.commit('SET_AccountNumber', accountNumber);
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
    setContacts(context, contacts) {
      context.commit('SET_CONTACTS', contacts);
    },
    removeContact(context, contactId) {
      const newContacts = this.getters.contacts.filter((contacts) => contacts.account_id !== Number(contactId));
      context.commit('SET_CONTACTS', newContacts);
    },
    reset({ commit }) {
      commit('RESET');
    },
  },

  mutations: {
    SET_INFORMATIONS(state, informations) {
      state.userInfomations = { ...state.userInfomations, ...informations };
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
    SET_AccountNumber(state, accountNumber) {
      state.accountNumber = accountNumber;
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
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts;
    },
    RESET(state) {
      const newState = initialState();
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
  },

};

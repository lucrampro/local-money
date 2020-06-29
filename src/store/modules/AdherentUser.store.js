const initialState = () => ({
  userToken: '',
  userId: null,
  userFirstName: '',
});

export default {

  state: initialState(),

  // Getter functions
  getters: {
    userToken: (state) => state.userToken,
    userId: (state) => state.userId,
    userFirstName: (state) => state.userFirstName,
  },

  actions: {
    setToken(context, token) {
      context.commit('SET_TOKEN', token);
    },
    setUserId(context, userId) {
      context.commit('SET_USER_ID', Number(userId));
    },
    reset({ commit }) {
      commit('RESET');
    },
    setUserFirstName(context, userFirstName) {
      context.commit('SET_USER_FIRSTNAME', userFirstName);
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.userToken = token;
    },
    RESET(state) {
      const newState = initialState();
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
    SET_USER_ID(state, UserId) {
      state.userId = UserId;
    },
    SET_USER_FIRSTNAME(state, userFirstName) {
      state.userFirstName = userFirstName;
    },
  },

};

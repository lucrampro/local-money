const initialState = () => ({
  userToken: '',
  userId: null,
});

export default {

  state: initialState(),

  // Getter functions
  getters: {
    userToken: (state) => state.userToken,
  },

  actions: {
    setToken(context, token) {
      context.commit('SET_TOKEN', token);
    },
    setUserId(context, userId) {
      context.commit('SET_USER_ID', Number(userId));
    },
    setUserFirstName(context, UserFirstName) {
      context.commit('SET_USER_FIRSTNAME', UserFirstName);
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.userToken = token;
    },
    SET_USER_ID(state, UserId) {
      state.userId = UserId;
    },
    SET_USER_FIRSTNAME(state, UserFirstName) {
      state.UserFirstName = UserFirstName;
    },
  },

};

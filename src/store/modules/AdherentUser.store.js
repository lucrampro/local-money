const initialState = () => ({
  userToken: '',
});

export default {

  state: initialState(),

  // Getter functions
  getters: {
    userToken: (state) => state.userToken,
  },

  actions: {
    addToken(context, token) {
      context.commit('ADD_TOKEN', token);
    },
  },

  mutations: {
    ADD_TOKEN(state, token) {
      state.userToken = token;
    },
  },

};

/**
 * allow to use the varible color in globaly appliction
 */
const handlerColorPlugin = () => ({
  '$primary-color': '#189B73',
  '$primary-color-100': '#31A481',
  '$secondary-color': '#DE6B48',
  find(color) {
    return this[color] ? this[color] : color;
  },
});

export default {
  install(Vue) {
    const styleGuild = handlerColorPlugin(Vue);
    Vue.prototype.$styleGuild = styleGuild;
  },
};

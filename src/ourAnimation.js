import gsap from 'gsap'; // eslint-disable-line

export default {
  install(Vue) {
    const anime = gsap;
    Vue.prototype.$anime = anime;
  },
};

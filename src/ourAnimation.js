/* eslint-disable */

import gsap from 'gsap';


class Anime {
  constructor() {
    this.gsap = gsap
  };
  openMenu() {
    this.gsap.to('.navBar', 1.0, { transform: 'translateY( -441px )' });
  };
  closeMenu() {
    this.gsap.to('.navBar', 1.0, { transform: 'translateY( 0px )' });
  };
  animeElementOnMounted(target) {
    console.log($anime)

    this.gsap.timeline().set(target, { y: '10px', opacity: 0.5 })
      .staggerTo(target, 0.5, { y: '0px', opacity: 1 }, 0.1);
  };
}


export default {
  install(Vue) {
    const anime = new Anime();
    Vue.prototype.$anime = anime;
  },
};

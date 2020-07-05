/* eslint-disable */

import gsap from 'gsap';


class Anime {

 openMenu() {
   gsap.to('.navBar', 1.0, { transform: 'translateY( -441px )' });
 }

  closeMenu() {
    gsap.to('.navBar', 1.0, { transform: 'translateY( 0px )' });
  }
}


export default {
  install(Vue) {
    const anime = new Anime();
    anime.prototype = gsap;
    Vue.prototype.$anime = anime;
  },
};

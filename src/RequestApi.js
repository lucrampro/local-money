class ApiRequest extends EventTarget {
  constructor() {
    super();
    this.uri = process.env.VUE_APP_BACK_END_URI;
    this.request = this._Api();
  }

  _Api() {
    const init = {
      mode: 'cors',
      cache: 'default',
      'Content-Type': 'application/json',
    };
    return {
      /**
       * done a call api with methode get
       * @param  {string} path path of request api
       * @return {Promise}
       */
      get: (path) => new Promise((resolve, reject) => {
        fetch(path, {
          ...init,
          method: 'GET',
        }).then((res) => {
          if (res.ok) {
            return resolve(res.json());
          }
          return res.json().then((res2) => {
            reject(res2);
          });
        }).catch((res) => reject(res.json()));
      }),

      /**
       * done a call api with methode post
       * @param  {string} path path of request api
       * @return {Promise}
       */
      post: (path, playload) => new Promise((resolve, reject) => {
        fetch(path, {
          headers: new Headers({ 'Content-Type': 'application/json' }),
          ...init,
          body: JSON.stringify(playload),
          method: 'post',
        }).then((res) => {
          if (res.ok) {
            return resolve(res.json());
          }
          return res.json().then((res2) => {
            reject(res2);
          });
        }).catch((res) => reject(res.json()));
      }),
      ///
    };
  }

  login(playload) {
    return this.post('/login_check', playload)
      .then((res) => {
        this.dispatchEvent(new CustomEvent('session-user-login', { detail: res }));
        return res;
      });
  }

  get(path, playload) {
    return this.request.get(this.uri + (path || ''), playload || {});
  }

  post(path, playload) {
    return this.request.post(this.uri + (path || ''), playload || {});
  }

  put(path, playload) {
    return this.request.put(this.uri + (path || ''), playload || {});
  }

  del(path, playload) {
    return this.request.delete(this.uri + (path || ''), playload || {});
  }
}

export default {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    const apiRequest = new ApiRequest(Vue);
    Vue.prototype.$Api = apiRequest;
  },
};

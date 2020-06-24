class ApiRequest extends EventTarget {
  constructor() {
    super();
    this.uri = process.env.VUE_APP_BACK_END_URI;
    this.request = this._Api();
  }

  _Api() {
    const init = {
      // headers: new Headers(),
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
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return reject(res.data);
          })
          .then((res) => {
            if (res.status === 200) {
              resolve(res);
            }
            return reject(res);
          })
          .catch((res) => reject(res));
      }),
    };
  }

  get(path, data) {
    return this.request.get(this.uri + (path || ''), data || {}, this.conf);
  }

  put(path, data) {
    return this.request.put(this.uri + (path || ''), data || {}, this.conf);
  }

  del(path, data) {
    return this.request.delete(this.uri + (path || ''), data || {}, this.conf);
  }

  register
}

export default {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    const apiRequest = new ApiRequest(Vue);
    Vue.prototype.$Api = apiRequest;
  },
};

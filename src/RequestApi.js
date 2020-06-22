class ApiRequest extends EventTarget {
  constructor() {
    super();
    // this.uri = process.env.VUE_APP_BACK_END_URI;
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
      get: (path) => new Promise((resolve, reject) => {
        fetch(path, {
          ...init,
          method: 'GET',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data._meta.code === 200) {
              resolve(data);
            } else {
              reject(data);
            }
          })
          .catch((res) => reject(res));
      }),
      post: (path) => new Promise((resolve, reject) => {
        fetch(path, {
          ...init,
          method: 'POST',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data._meta.code === 200) {
              resolve(data);
            } else {
              reject(data);
            }
          })
          .catch((res) => reject(res));
      }),
      put: (path) => new Promise((resolve, reject) => {
        fetch(path, {
          ...init,
          method: 'PUT',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data._meta.code === 200) {
              resolve(data);
            } else {
              reject(data);
            }
          })
          .catch((res) => reject(res));
      }),
      del: (path) => new Promise((resolve, reject) => {
        fetch(path, {
          ...init,
          method: 'DELET',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data._meta.code === 200) {
              resolve(data);
            } else {
              reject(data);
            }
          })
          .catch((res) => reject(res));
      }),
    };
  }

  get(path, data) {
    return this.request.get(this.uri + (path || ''), data || {}, this.conf);
  }

  post(path, data) {
    return this.request.post(this.uri + (path || ''), data || {}, this.conf);
  }

  put(path, data) {
    return this.request.put(this.uri + (path || ''), data || {}, this.conf);
  }

  del(path, data) {
    return this.request.delete(this.uri + (path || ''), data || {}, this.conf);
  }
}

export default {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    const apiRequest = new ApiRequest();
    Vue.prototype.$Api = apiRequest;
  },
};

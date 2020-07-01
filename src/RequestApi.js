/**
 * the plugin with all généric api call,
 * this is also same than axios, for do a call to the api
 */
/* eslint-disable */

class EventDispatcher {

  constructor() {
      this._listeners = [];
  }

  hasEventListener(type, listener) {
      return this._listeners.some(item => item.type === type && item.listener === listener);
  }

  addEventListener(type, listener) {
      if (!this.hasEventListener(type, listener)) {
          this._listeners.push({type, listener, options: {once: false}});
      }
      // console.log(`${this}-listeners:`,this._listeners);
      return this
  }

  removeEventListener(type, listener) {
      let index = this._listeners.findIndex(item => item.type === type && item.listener === listener);
      if (index >= 0) this._listeners.splice(index, 1);
//        console.log(`${this}-listeners:`, this._listeners);
      return this;
  }

  removeEventListeners() {
      this._listeners = [];
      return this;
  }

  dispatchEvent(evt) {
      this._listeners
          .filter(item => item.type === evt.type)
          .forEach(item => {
              const {type, listener, options: {once}} = item;
              listener.call(this, evt);
              if (once === true) this.removeEventListener(type, listener)
          });
      // console.log(`${this}-listeners:`,this._listeners);
      return this
  }
}

class ApiRequest extends EventDispatcher {
  constructor() {
    super();
    this.uri = process.env.VUE_APP_BACK_END_URI;
    this.request = this._Api();
    this.token = '';
  }

  /**
   * methods for call endpoints
   */
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
       * @param  { Object } playload data send to the api header, ...ect
       * @return {Promise}
       */
      get: (path, playload) => new Promise((resolve, reject) => {
        fetch(path, {
          ...init,
          ...playload.body,
          headers: new Headers({ ...playload.Headers }),
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
       * @param  { Object } playload data send to the api header, ...ect
       * @return {Promise}
       */
      post: (path, playload) => new Promise((resolve, reject) => {
        fetch(path, {
          ...init,
          ...playload.body,
          headers: new Headers({ 'Content-Type': 'application/json', ...playload.Headers }),
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

  /**
   * allow to set the token in the requestApi
   * @param  {String} token new token
   */
  setToken(token) {
    if (typeof token === 'string' && token.length) {
      this.token = token;
    } else {
      console.error('the token is not be to good format');
    }
  }

  /**
   * allow to get a token of user and set on the store
   * @param  {Object} loginInformaion information waiting , mail and passworld
   */
  login(loginInformaion) {
    return this.post('/login_check', loginInformaion)
      .then((res) => {
        this.dispatchEvent(new CustomEvent('session-user-login', { detail: res }));
        return res;
      });
  }

  /**
   * allow to get a token of user and set on the store
   * @param  {Object} loginInformaion information waiting , mail and passworld
   */
  register(registerPlayload) {
    return this.post('/register', registerPlayload)
      .then((res) => {
        this.dispatchEvent(new CustomEvent('user-registred', { detail: registerPlayload }));
        return res;
      }).catch((res) => res);
  }

  /**
   * allow to call the endpoint for get information of custumer and set to the store
   * @param  {String} token token of custumer
   */
  getUserInfo(token) {
    return this.get('/me', { Headers: { Authorization: `Bearer ${token || this.token}` } })
      .then((res) => {
        this.dispatchEvent(new CustomEvent('session-user-information', { detail: res }));
        return res;
      })
      .catch((res) => res);
  }

  /**
   * allow to get the solde of adhérent
   * @param  {String} type type is particular or company
   */
  details(type) {
    return this.get(`/${type}/account`, { Headers: { Authorization: `Bearer ${this.token}` } })
      .then((res) => {
        this.dispatchEvent(new CustomEvent('session-user-details', { detail: res }));
        return res;
      })
      .catch((res) => res);
  }

  /**
   * get the last transaction
   * @param {string} 
   */
  getMyTransaction() {
    return this.get('/transactions', {
      Headers: { Authorization: `Bearer ${this.token}` },
    }).then((response) => {
      this.dispatchEvent(new CustomEvent('session-user-transaction', { detail: response }));
      return response;
    })
      .catch(((response) => response));
  }

  getCompanyPost() {
    return this.get('/posts', {
      Headers: { Authorization:`Bearer ${this.token}` },
    }).then((response) => {
      this.dispatchEvent(new CustomEvent('session-user-companypost', { detail: response}));
      return response
    })
      .catch((response) => response);
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

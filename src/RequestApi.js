import axios from 'axios';

class ApiRequest extends EventTarget {
  constructor() {
    super();
    this.uri = process.env.VUE_APP_BACK_END_URI;
    this.conf = { 'Content-Type': 'application/json' };
  }

  _get(path, data) {
    return axios.get(`${path || ''}`, data || {}, this.conf);
  }

  _post(path, data) {
    return axios.post(this.uri + (path || ''), data || {}, this.conf);
  }

  _put(path, data) {
    return axios.put(this.uri + (path || ''), data || {}, this.conf);
  }

  _del(path, data) {
    return axios.delete(this.uri + (path || ''), data || {}, this.conf);
  }
}

export default {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    const apiRequest = new ApiRequest();
    Vue.prototype.$ApiRequest = apiRequest;
  },
};

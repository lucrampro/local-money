import axios from 'axios';

class ApiRequest extends EventTarget {
  constructor() {
    super();
    this.conf = { 'Content-Type': 'application/json' };
  }

  _get(path, data) {
    return axios.get(`/api${path || ''}`, data || {}, this.conf);
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

export default new ApiRequest();

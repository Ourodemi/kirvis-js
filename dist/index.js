function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const axios = require('axios').default;

class KirvisAPI {
  constructor(uri, options = {}) {
    _defineProperty(this, "accessToken", null);

    let {
      protocol = 'https',
      endpoint = 'api'
    } = options;
    this.uri = uri;
    this.protocol = protocol;
    this.endpoint = endpoint;
  }

  async request(method, endpoint, {
    data,
    query,
    accessToken
  }) {
    return new Promise(async (resolve, reject) => {
      if (!this.accessToken && !accessToken) {
        resolve(false);
      }

      axios({
        method,
        url: `${this.protocol}://${this.uri}/${this.endpoint}/${endpoint}`,
        data,
        params: query,
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization-Token': accessToken || this.accessToken
        }
      }).then(({
        data
      }) => resolve(data)).catch(({
        response
      }) => resolve(this.expandResponse(response.data)));
    });
  }

  expandResponse(res) {
    res = res || {};
    return {
      status: res.status || 500,
      code: res.code || 'connection_failure',
      ...(res.data || {})
    };
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

}

module.exports = KirvisAPI;
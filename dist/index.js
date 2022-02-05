function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const axios = require('axios').default;

class KirvisAPI {
  constructor(uri) {
    _defineProperty(this, "accessToken", null);

    this.uri = uri;
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

      await axios.post(`https://${this.uri}/api/${endpoint}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization-Token': `${accessToken || this.accessToken}`
        },
        query
      }).then(({
        data,
        status
      }) => {
        resolve(data.data);
      }).catch(e => {
        resolve(false);
      });
    });
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

}

module.exports = KirvisAPI;
const axios = require('axios').default;

class KirvisAPI{
    accessToken = null;

    constructor(uri){
        this.uri = uri;
    }

    async request(method, endpoint, { data, query, accessToken }){
        return new Promise(async (resolve, reject) => {
            if ( !this.accessToken && !accessToken ){
                resolve(false);
            }

            await axios.post(
                `https://${this.uri}/api/${endpoint}`, 
                data, 
                {
                    headers: {
                        'Content-Type':'application/json',
                        'X-Authorization-Token':`${accessToken || this.accessToken}`
                    },
                    query
                }
            ).then(({data, status}) => {
                resolve(data.data);
            }).catch((e) => {
                resolve(false);
            });
        });
    }

    setAccessToken(accessToken){
        this.accessToken = accessToken;
    }
}

module.exports = OurodemiWebEngineAPI;
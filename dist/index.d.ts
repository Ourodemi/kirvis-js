export default class KirvisAPI{

    constructor(uri: string);

    public async request(
        method: string,
        endpoint: string,
        { data, query, accessToken } : { 
            data: object,
            query: object,
            accessToken: string
        }
    ): Promise;

}
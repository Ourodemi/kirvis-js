export default class KirvisAPI{

    constructor(uri: string, options: {
        protocol: string = 'https',
        endpoint: string = 'api',
    });

    public async request(
        method: string = 'GET',
        endpoint: string,
        { data, query, accessToken } : { 
            data: object,
            query: object,
            accessToken: string
        }
    ): Promise;

}
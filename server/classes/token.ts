import * as randToken from 'rand-token';

export default class TokenId {
    public newToken:any;
    constructor(){
        this.newToken = randToken.suid(2);
        
    }
    get(){
        return this.newToken;
    }
}
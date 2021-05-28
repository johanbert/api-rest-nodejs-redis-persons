import DBRedis from './redisdb';
import TokenId from './token';
import { PersonModel,PersonsModel } from '../models/person.model';

export default class Person {
    private redis:any;
    private keyName:string = 'persons:'
    constructor(){
        this.redis = new DBRedis();
    }

    createPerson(person:PersonModel){
        const newTokenId = new TokenId().get();
        return this.redis.hmset(`${this.keyName}${newTokenId}`, new PersonModel(person))
    }
    readPersons(){
        let listPersonIds:any[] = [];
        return this.redis.keys(`${this.keyName}*`)
            .then((keys:any) => {
                return Promise.all( keys.map( ( personId:any,index:number ) => {
                    listPersonIds.push(keys[index])
                    return this.redis.hgetall(personId)
                }) )
            })
            .then((persons:any)=>{
                return persons.map( ( person:any,index:number ) => {
                    person.id = listPersonIds[index].replace(this.keyName, '')
                    person.processed = eval(person.processed)
                    return person;
                } )
            })
    }
    updatedPersons(person:PersonsModel[]){
        console.log('person', person );
        
        return new Promise((resolve, reject) => {
            const processed = { processed: true };
            try{
                person.map( (id:any) => this.redis.hmset(`${this.keyName}${id}`, processed ) );
                resolve(true)
            } catch (error) {
                reject(`Error updating,${error}`) 
            }
        })
    }
    readPerson(){
    }
    deletePerson(){
    }
}
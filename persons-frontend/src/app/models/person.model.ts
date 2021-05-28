export class PersonModel {
    id?:string;
    first_name!: string;
    last_name!: string;
    processed!: boolean;
    created_at!: Date;
    updated_at!: Date;
    constructor( init:PersonModel ) { // & Partial<PersonModel> hace todas las propiedades opcionales, tuvo que retirarse pero se  sigue teniendo presente
        Object.assign(this, init);
    }
}
export class PersonsModel{
    ids!: any[];
    constructor( init:PersonsModel) {
        // init.ids = eval(init.ids)
        Object.assign( this, init );
    }
}
export class PersonModel {
    id?:string;
    first_name!: string;
    last_name!: string;
    processed: boolean = false;
    created_at: Date   = new Date(Date.now());
    updated_at: Date   = new Date(Date.now());
    constructor( init:PersonModel ) { // & Partial<PersonModel> hace todas las propiedades opcionales, tuvo que retirarse pero sigue teniendose presente
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
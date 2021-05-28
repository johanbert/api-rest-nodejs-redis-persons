import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, } from '@angular/forms';
import { PersonsService } from 'src/app/services/persons.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  formTable!: FormGroup;
  subscription!: Subscription;
  listCheckeds: any;
  checkboxControl: any;
  jsonPersons:any = [] ;
  constructor( private personsService:PersonsService,
               private fb:FormBuilder ) {
				this.createFormTable([]);
				this.getPersons();
               }
  ngOnInit(): void {
	
  }
  getPersons(){
    this.jsonPersons = [] ;
  
    this.personsService.getPersons()
      .subscribe( (res:any)=>{
		  res.map((result:any[])=> this.jsonPersons.push(result))
		  this.createFormTable(res)
      })
  }
  createFormTable(json?:any){
	this.formTable = this.fb.group({
		js: this.fb.array( json.map((x:any) => false) )
	});
	this.checkboxControl = (this.formTable.controls.js as FormArray);
	this.subscription = this.checkboxControl.valueChanges.subscribe(() => {
		this.checkboxControl.setValue(
			this.checkboxControl.value.map((value:any, i:number) => value ? json[i].id : false),
			{ emitEvent: false }
		);
	});
  }
  swalNotifications(json:any){
    Swal.fire(json)
  }
  updatePerson() {
	this.listCheckeds = this.checkboxControl.value.filter((value:any) => !! value);
	// console.log('this.listCheckeds',this.listCheckeds);
	this.personsService.updatePerson(this.listCheckeds).subscribe( (res:any)=>{
		// console.log('res',res);
        if (res.error || !this.listCheckeds.length ) return this.swalNotifications({
          title: 'Error!',
          text: `Error al intentar actualizar: ${res.err || 'lista vacia'}, ${res.description || 'no seleccionó ninguno'}`,
          icon: 'error',
          confirmButtonText: 'Entendido'
        })
        this.swalNotifications({
          title: 'Bien!',
          text: `Registros actualizar correctamente`,
          icon: 'success',
          confirmButtonText: 'Entendido'
        })
        this.getPersons();
      })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

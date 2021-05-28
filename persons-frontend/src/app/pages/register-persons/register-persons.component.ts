import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonsService } from 'src/app/services/persons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-persons',
  templateUrl: './register-persons.component.html',
  styleUrls: ['./register-persons.component.css']
})
export class RegisterPersonsComponent implements OnInit {
  form!: FormGroup;
  person:any = {
    first_name:'',
    last_name:''
  }
  constructor( private personsService:PersonsService,
               private fb:FormBuilder ) {
                this.createForm()
  }
  ngOnInit(): void {
    
  }
  getInvalidInput(fieldName:string){
    return this.form.get(fieldName)?.invalid && this.form.get(fieldName)?.touched
  }
  createForm(){
    this.form = this.fb.group({
      first_name : ['', [ Validators.required, Validators.minLength(2) ] ],
      last_name  : ['', [ Validators.required, Validators.minLength(2) ] ],
    });
  }
  validateForm( ){
    if (this.form.invalid){
      return Object.values( this.form.controls).forEach((ctrl)=>{
        ctrl.markAllAsTouched();
      })
    }
    return true;
  }
  swalNotifications(json:any){
    Swal.fire(json)
  }
  createPerson(){
    if (!this.validateForm() ) return this.swalNotifications({
      title: 'Error!',
      text: 'Corrija los campos del formulario',
      icon: 'error',
      confirmButtonText: 'Entendido'
    }) ;

    console.log('this.form.value',this.form.value);
    this.personsService.createPerson(this.form.value)
      .subscribe( (res:any)=>{
        if (!res.ok) return this.swalNotifications({
          title: 'Error!',
          text: `Error al intentar crear: ${res.err}, ${res.description}`,
          icon: 'error',
          confirmButtonText: 'Entendido'
        })
        this.swalNotifications({
          title: 'Bien!',
          text: `Registro creado correctamente`,
          icon: 'success',
          confirmButtonText: 'Entendido'
        })
        this.form.reset();
      })
  }
}

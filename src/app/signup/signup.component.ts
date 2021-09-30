import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  reactiveForm:FormGroup;
  submitted:boolean=false;


  constructor(private formBuilder:FormBuilder) {
this.reactiveForm=this.formBuilder.group({
  firstname:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]),
  lastname:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]),
  dateofbirth:new FormControl(null,[Validators.required]),
  age:new FormControl(null,[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
  email:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  gender:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required,Validators.pattern('(0|91)?[7-9][0-9]{9}')]),
  Confirm_password:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //confirmPassword: [null, Validators.compose([Validators.required])]
},
// ^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$

{
  validators:this.MustMatch('password','Confirm_password')
})

this.reactiveForm.reset();
   }
  
get f (){return this.reactiveForm.controls}

MustMatch(controlName:string,matchingControlName:string){
return(formGroup:FormGroup)=>{
  const control = formGroup.controls[controlName];
  const matchingControl = formGroup.controls[matchingControlName];
  if(matchingControl.errors && !matchingControl.errors.MustMatch){
    return
  }
  if(control.value!==matchingControl.value){
    matchingControl.setErrors({MustMatch:true});
  }
  else{
    matchingControl.setErrors(null);
  }
}
}

onSubmit(){
  
   this.submitted=true;
   console.log(this.reactiveForm.value);
   //alert('form submitted');
  //  if(this.reactiveForm.invalid)
  //  {
    
    
  //   return;
  
  //  }



}


  ngOnInit(): void {
    
  }
  
  

}



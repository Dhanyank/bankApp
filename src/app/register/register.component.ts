import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:[''],
    pswd:['']
  })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
  //if(this.registerForm.get(`uname`)?.errors)
 // {
   // alert("Invalid Username......")
  //}
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    if(this.registerForm.valid){
    //check validation
    const result=this.db.register(uname,acno,pswd)
    if(result)
    {
      alert("Successfully Registered.........")
      this.router.navigateByUrl("")
    }
    else{
      alert("Acount already Exist.........Please logIn..")
    }
  }
   // else{
//alert("invalid form")
  //  }
  }

}

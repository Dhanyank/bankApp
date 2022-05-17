import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //string interpolation example
  aim = "Your Perfect Banking Partner..."

  //property binding
  accnum = "Account number Please"
  acno = ""
  pswd = ""
  loginForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })

  //database
  //database: any = {
  //1000: { acno: 1000, uname: "Meera", pwd: 1000, balance: 5000 },
  //1001: { acno: 1001, uname: "Seema", pwd: 1001, balance: 3000 },
  //1002: { acno: 1002, uname: "Raju", pwd: 1002, balance: 8000 }

  //}
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno)

  }

  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);

  }

  //event binding 
  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    if (this.loginForm.valid) {


      this.ds.login(acno, pswd)
      .subscribe((result:any)=>{

        if (result) {
          localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
          localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
          localStorage.setItem("token",JSON.stringify(result.token))
          alert(result.message)
          this.router.navigateByUrl("dashboard")
  
        }
      },(result)=>{
        alert(result.error.message)
      }
      )}
      else{
        alert("Invalid form....")
      }
      


    }
  
}
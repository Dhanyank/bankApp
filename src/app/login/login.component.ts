import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  //database
  database: any = {
    1000: { acno: 1000, uname: "Meera", pwd: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "Seema", pwd: 1001, balance: 3000 },
    1002: { acno: 1002, uname: "Raju", pwd: 1002, balance: 8000 }

  }
  constructor(private router :Router) { }

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
   login()
   {
     
     
    var acno = this.acno
    

    
    var pswd = this.pswd
    
    
    let database = this.database
    if (acno in database)
    {
      if(pswd == database[acno]["pwd"]) 
            {
                alert("Login successfully")
                 this.router.navigateByUrl("dashboard")

           }


           else{
             alert("Incorrect password..........")
           }
    }





   
    else{
     alert("User does not exist...........")
    }
     
            
  
  }}

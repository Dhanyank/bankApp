import { Injectable } from '@angular/core';

@Injectable({
  providedIn:`root`
})
export class DataService {
  currentUser:any;
  currentAcno: any;
 



  database: any = {
    1000: { acno: 1000, uname: "Meera", pwd: 1000, balance: 5000 ,transaction:[]},
    1001: { acno: 1001, uname: "Seema", pwd: 1001, balance: 3000 ,transaction:[]},
    1002: { acno: 1002, uname: "Raju", pwd: 1002, balance: 8000 ,transaction:[]}

  }


  constructor() { }


register(uname:any,acno:any,pwd:any)
{
  let database=this.database
  if(acno in database)
    {
      return false
    }//add details to db
    else{
      database[acno]={
        acno,
        uname,
        pwd,
        balance:0,
        transaction:[]
      }
      //console.log(database);
      
      return true
    }
  }

  //login
  login(acno:any,pswd:any)
  {
    let database=this.database
    if(acno in database)
    {
      if(pswd==database[acno]["pwd"])
      {
      this.currentUser=database[acno]["uname"]
      this.currentAcno=acno
      
        return true
      }
      else{
        alert("Incorrect password......")
      
      return false
    }
  }


  
  else
  {
    alert("User does not exist...")
    return false
  }
}


//deposit

deposit(acno:any,pswd:any,amt:any)
{
let database=this.database
var amount=parseInt(amt)
if(acno in database)
{

  if(pswd==database[acno]["pwd"])
  {
    
database[acno]["balance"] +=amount
database[acno]["transaction"].push({
  type:"credit",
  amount:amount
})
return database[acno]["balance"]+=amount
  }
  else{
    alert("Incorrect password")
    return false
  }
}
else{
  alert("User does not exist")
  return false
}
}

//withdrawal
withdraw(acno:any,pswd:any,amt:any)
{
let database=this.database
var amount=parseInt(amt)
if(acno in database)
{

  if(pswd==database[acno]["pwd"])
  {
    if(database[acno]["balance"]>amount)
{


database[acno]["balance"]-=amount
database[acno]["transaction"].push({type:"Debit",amount:amount})
return database[acno]["balance"]-=amount
  }
  else{
    alert("Insufficient balance.....")
    return false
  }
  }
else{
  alert("Incorrect password")
  return false
}
}
else{
  alert("User does not exist")
  return false
}
}
//transaction
transaction(acno:any): any
{
  return this.database[acno].transaction
}
}


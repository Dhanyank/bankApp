import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  database: any = {
    1000: { acno: 1000, uname: "Meera", pwd: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "Seema", pwd: 1001, balance: 3000 },
    1002: { acno: 1002, uname: "Raju", pwd: 1002, balance: 8000 }

  }

  constructor() { }


register(uname:any,acno:any,pwd:any)
{
  let database=this.database
  if(acno in database)
    {
      return false
    }
    else{
      database[acno]={
        acno,uname,pwd,balance:0
      }
      //console.log(database);
      
      return true
    }
}


}

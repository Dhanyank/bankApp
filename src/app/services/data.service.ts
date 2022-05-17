import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options = {
  headers: new HttpHeaders()
}
@Injectable({
  providedIn: `root`
})
export class DataService {
  currentUser: any;
  currentAcno: any;




  database: any = {
    1000: { acno: 1000, uname: "Meera", pwd: 1000, balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "Seema", pwd: 1001, balance: 3000, transaction: [] },
    1002: { acno: 1002, uname: "Raju", pwd: 1002, balance: 8000, transaction: [] }

  }


  constructor(private http: HttpClient) {
    this.getDetails()
  }
  //save data in to a local storage
  saveDetails() {
    localStorage.setItem("database", JSON.stringify(this.database))
    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }

  //to get data from local storage
  getDetails() {
    if (localStorage.getItem("database")) {
      this.database = JSON.parse(localStorage.getItem("database") || ``)


      if (localStorage.getItem("currentAcno")) {
        this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || ``)
      }

      if (localStorage.getItem("currentUser")) {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser") || ``)
      }
    }
  }
  //register

  register(uname: any, acno: any, pwd: any) {

    const data = {
      uname,
      acno,
      pwd
    }
    //register API
    return this.http.post('http://localhost:3000/register', data)
  }


  //login
  login(acno: any, pswd: any) {
    //req body
    const data = {
      acno,
      pswd
    }
    //login api call
    return this.http.post('http://localhost:3000/login', data)
  }


  //deposit
  deposit(acno: any, pswd: any, amt: any) {

    const data = {
      acno,
      pswd,
      amt
    }

    //deposit API
    return this.http.post('http://localhost:3000/deposit', data, this.getOptions())
  }

  //to fetch token
  getOptions() {
    const token = JSON.parse(localStorage.getItem("token") || '')

    //create http header
    let headers = new HttpHeaders()
    //add token to req header
    if (token) {
      headers = headers.append('x-access-token', token)
      options.headers = headers

    }
    return options
  }

  //withdrawal
  withdraw(acno: any, pswd: any, amt: any) {

    const data = {
      acno,
      pswd,
      amt
    }

    //withdraw API
    return this.http.post('http://localhost:3000/withdraw', data, this.getOptions())
  }



  //transaction
  transaction(acno: any) {

    const data = {
      acno
    }

    //deposit API
    return this.http.post('http://localhost:3000/transaction', data, this.getOptions())
  }
  onDelete(acno:any)
    {
return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getOptions())

    }
  


}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-use-serv-account',
  templateUrl: './use-serv-account.component.html',
  styleUrls: ['./use-serv-account.component.css']
})
export class UseServAccountComponent {

  NameOfServiceAc: string="Page" ;
  ProjectId :string="page";
  NameOfServiceAcCreate: string;
  RoleOfAccount: string;
  ProjectIdCreate: string;
  response :any;
  login: boolean=true;
  create: boolean= false;
  
constructor(private http: HttpClient) { }

   CreateServiceAccount(){

    const fd = new FormData();
    console.log(this.NameOfServiceAcCreate, this.ProjectId)
    fd.append("name", this.NameOfServiceAcCreate);
    fd.append("id", this.ProjectIdCreate);
    fd.append("role", this.RoleOfAccount)   
 
    console.log("CreateServiceAccount clicked")
    this.http.post<any>('http://localhost:8000/addservice/',
         fd
        //  ,
        //  {
        //       headers: new HttpHeaders().set('Content-Type','application/json')
        //   }
          ).subscribe(response => {
            this.response=response;
          });
  }

  LoginServiceAccount(){
   
    const fd = new FormData();
    console.log(this.NameOfServiceAc, this.ProjectId)
    fd.append("name", this.NameOfServiceAc);
    fd.append("id", this.ProjectId);
    
 
    console.log("Upload clicked")
    
    this.http.post<any>('http://localhost:8000/addservice/',
         fd
        //  ,
        //  {
        //       headers: new HttpHeaders().set('Content-Type','application/json')
        //   }
          ).subscribe(response => {
            this.response=response;
          });
  }

  LoginForm(){
    this.login=true;
    this.create=false;
  }
  CreateForm(){
    this.login=false;
    this.create=true;
  }
}

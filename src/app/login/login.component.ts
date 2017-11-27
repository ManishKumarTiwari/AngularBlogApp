import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Data, Router} from "@angular/router";
import {BlogServiceService} from "../blog-service.service";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string='';
  pass:string='';
  flag:boolean=false;

  constructor(private service: BlogServiceService, private router: Router) { }

  ngOnInit() {
    this.flag=false;
  }

  submitForm(){
    this.service.verifyUser()
      .subscribe(
        data=>{
              console.log(data);
              for(let i of data){
                console.log("in dataaa");
                console.log(i);
                  if (this.name == i['name'] && this.pass == i['pass']) {
                    this.flag=true;
                    data=JSON.stringify(data);
                    sessionStorage.setItem('user',this.name);
                    this.router.navigate(['home']);
                  }
              }
              if(this.flag==false)
              alert("invalid credentials")
        }
      );
  }
}

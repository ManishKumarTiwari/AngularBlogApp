import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../blog-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  loggedin:boolean=true;
  register:boolean=true;
  add:boolean=false;
  logout:boolean=false;
  username:string='';
  allblog:Object=[];

  constructor(private service: BlogServiceService, private router: Router) { }

  ngOnInit() {
    var user=sessionStorage.getItem('user');
    if(user!=null){
      this.loggedin=false;
      this.register=false;
      this.add=true;
      this.logout=true;
      this.username=user;
    }

    this.service.getBlogs()
      .subscribe(
        data=>{
          console.log(data);
          this.allblog=data;
        },
        err=>{
          console.log(err)
        }
      );

  }



  exit(){
    sessionStorage.clear();
    this.router.navigate(['dummy']);
  }

  gotologin(){
    this.router.navigate(['login']);
  }
  gotoregister(){
    this.router.navigate(['register']);
  }
  gotoadd(){
    this.router.navigate(['addblog']);
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BlogServiceService} from "../blog-service.service";
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  category:string='';
  title:string='';
  desc:string='';
  constructor(private service: BlogServiceService, private router: Router) { }

  ngOnInit() {
  }

  submitblog(){
    let blogdata = {
      title:this.title,
      categort:this.category,
      desc:this.desc

    };
    this.service.postblog(blogdata)
      .subscribe(
        data=>{
          this.router.navigate(['home']);
        }
      );


  }

}

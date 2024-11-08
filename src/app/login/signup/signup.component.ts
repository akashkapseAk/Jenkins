import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AllapiService } from 'src/app/service/allapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent   implements OnInit {

  constructor(private api:AllapiService,private Mat:MatSnackBar,private Ro:Router){}

  admin={

    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  }
  ngOnInit(): void {
    
  }

  SIGNUP(){


    if(this.admin.password==''||this.admin.password==null)
    {
      Swal.fire('Password requried','','question')
      return;
    }
    this.api.createLogin(this.admin).subscribe(
      (data:any)=>{

        this.admin=data;
        console.log(data);
        Swal.fire('Signup succeedully','','success').then(e=>this.Ro.navigate(['']))
      },
      (error)=>{

        console.log(error);

        Swal.fire('error in singup','','error');
      }
    )
  }


}

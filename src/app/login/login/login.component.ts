import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AllapiService } from 'src/app/service/allapi.service';
import { Admin } from '../admin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  constructor(private api:AllapiService,private Mat:MatSnackBar,private Ro:Router){}

  admin:Admin=new Admin();
  ngOnInit(): void {
    
  }
  LOGIN(){

    this.api.login(this.admin).subscribe(
      (data:any)=>{

        this.admin=data;

        console.log(data);

        Swal.fire('successfully login','','success').then(e=>this.Ro.navigate(['/view']));
      },
      (error)=>{

        Swal.fire('error in login','','error');
      }
    )
  }


}

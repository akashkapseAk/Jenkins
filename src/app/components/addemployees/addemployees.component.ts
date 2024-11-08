import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AllapiService } from 'src/app/service/allapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {

  constructor(private api:AllapiService,private Mat:MatSnackBar,private Ro:Router){}

  employees={

    fullName:'',
    email:'',
    contact:'',
    gender:'',
    department:'',
    designation:'',
    salary:'',
    joiningDate:''
  }
  ngOnInit(): void {
    
  }
  ADDEmp()
  {


    if(this.employees.email==''||this.employees.email==null)
    {
     
      Swal.fire('email field require','','question');
      return;
    }
    this.api.createEmp(this.employees).subscribe(
      (data:any)=>{

        this.employees=data;
        console.log(data);
        Swal.fire("employees Succeefully add","","success").then(e=>this.Ro.navigate(['/view']));
      },
      (error)=>{

        console.log(error);
        Swal.fire("error in adding","",'error');
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AllapiService } from 'src/app/service/allapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent   implements OnInit {

  constructor(private api:AllapiService,private Mat:MatSnackBar,private Ro:Router,private Act:ActivatedRoute){}

  employees:any=null;

  ngOnInit(): void {
    

    this.api.getAllEmp().subscribe(
      (data:any)=>{

        this.employees=data;
        console.log(data);
        this.Mat.open('success','',{
          duration:3000
        })
      },
      (error)=>{

        console.log(error);
        this.Mat.open('error in lodaing','',{
          duration:3000
        })
      }
    )
  }

  DELETE(empId:any)
  {


    this.api.deleteEmp(empId).subscribe(
      (data:any)=>{

        this.employees=this.employees.filter((employees:any)=>employees.empId!=empId)
        Swal.fire('succefully delete','','success')

      },
      (error)=>{

        console.log(error);

        Swal.fire('delete succeefully','','success');
      }
    )
  }


}

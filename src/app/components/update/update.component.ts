import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AllapiService } from 'src/app/service/allapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent      implements OnInit {

  constructor(private api:AllapiService,private Mat:MatSnackBar,private Ro:Router,private ACt:ActivatedRoute){}

  employees:any;
  empId=0;
  ngOnInit(): void {
    

    this.empId=this.ACt.snapshot.params['empId'];

    this.api.getSingleEmp(this.empId).subscribe(
      (data:any)=>{

        this.employees=data;
        console.log(data);
       this.Mat.open('loading success','',{
        duration:3000
       })
      },
      (error)=>{
        console.log(error);

        this.Mat.open('error loading','',{
          duration:3000
         })
       
      }
    )
  }


  UPDATE()
  {
        this.api.updateEmp(this.employees,this.empId).subscribe(
          (data:any)=>{

            this.employees=data;
            console.log(data);
            Swal.fire('update Succeefully','','success').then(e=>this.Ro.navigate(['/view']));
          },
          (error)=>{

            console.log(error);

            Swal.fire('Error in update','','error');
            
          }
        )
  }

}

import { Component, OnInit } from '@angular/core';
import { AllapiService } from '../service/allapi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


  constructor(private HTTp:AllapiService,private RO:Router){}

  contact={

    to:'',
    subject:'',
    message:''
  }
  ngOnInit(): void {
    
  }





  SEND()
  {
        this.HTTp.contactUs(this.contact).subscribe(
          (data:any)=>{

            this.contact=data;
            console.log(data);
            Swal.fire("Send Mail Successfully","","success");
          },
          (error)=>{

            Swal.fire('Error in sending ',"",'error');
          }
        )
  }

}

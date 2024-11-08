import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AllapiService {

  constructor(private Htt:HttpClient) { }


  public createEmp(employees:any)
  {

    return this.Htt.post(`${baseUrl}/employees/`,employees);
  }


  public getAllEmp()
  {

    return this.Htt.get(`${baseUrl}/employees/all`);
  }


  public getSingleEmp(empId:any)
  {
    return this.Htt.get(`${baseUrl}/employees/s/${empId}`);
  }


  public updateEmp(employees:any,empId:any)
  {
    return this.Htt.put(`${baseUrl}/employees/up/${empId}`,employees);
  }

  public deleteEmp(empId:any)
  {
    return this.Htt.delete(`${baseUrl}/employees/d/${empId}`)
  }

  //login

  public createLogin(admin:any)
  {
    return this.Htt.post(`${baseUrl}/admin/`,admin);
  }


  public login(admin:any)
  {
    return this.Htt.post(`${baseUrl}/admin/login`,admin)
  }

  //contact

  public contactUs(contact:any)
  {
    
    return this.Htt.post(`${baseUrl}/mail/sent/`,contact)
  }
}

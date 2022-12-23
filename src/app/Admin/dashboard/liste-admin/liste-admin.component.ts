import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/Admin/admin.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.scss']
})
export class ListeAdminComponent implements OnInit {

  a!:any;
  responsive = true;
  lesAdmins:any
  constructor(private adminService:AdminService){}

  ngOnInit(): void {

    //recuperer la liste des admins
    this.adminService.listeAdmin().subscribe(data=>{
      console.log(data)
      this.lesAdmins=data.data
    })
    throw new Error('Method not implemented.');
  }



}

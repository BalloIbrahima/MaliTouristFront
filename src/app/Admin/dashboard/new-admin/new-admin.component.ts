import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Service/Admin/admin.service';
import Swal from 'sweetalert2';
import { ListeAdminComponent } from '../liste-admin/liste-admin.component';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit{

  nom:any
  prenom:any
  username:any
  password:any
  Confirmpassword:any
  Iserror!: Boolean;
  erreur!: String;


  constructor(private adminService:AdminService){}
  ngOnInit(): void {

  }


  newAdmin(f:NgForm){
    this.Iserror=false

    if(this.password.length<8){
      this.Iserror=true;
      this.erreur="Le mot de passe doit avoir au moins 8 caracteres !"
    }else if(this.password!=this.Confirmpassword){
      this.Iserror=true;
      this.erreur="Les deux mots de passe ne correpondent pas !"
    }else{
      var admin={
        "nom":this.nom,
        "prenom":this.prenom,
        "username":this.username,
        "password":this.password,
        "role":["admin"]
      }
      this.adminService.create(admin).subscribe(data=>{
        console.log(data)
        if(data.message='ok'){
          this.SuccesModal('Admin'),
          this.ngOnInit()

        }else{
          this.Iserror=true;
           this.erreur="Username ou mots de passe incorrect !"
        }
      },error=>{
        this.Iserror=true;
        this.erreur="Erreur lie au serneur !"
      })

    }

  }

  ///success swal
  async SuccesModal(text:any) {
    Swal.fire({
      title:text+' Creer',
      icon:'success',
      heightAuto: false,
      confirmButtonColor:'#FF7900',
      allowOutsideClick:false
    }).then(()=>{
      // this.router.navigateByUrl('/detailactivite', {skipLocationChange: true}).then(() => {
      //   this.router.navigate(["/detailactivite",this.data.activite.id]);
      //   });
    })
  }
}

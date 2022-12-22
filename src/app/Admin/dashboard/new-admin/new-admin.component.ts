import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent {

  nom:any
  prenom:any
  username:any
  password:any
  Confirmpassword:any
  Iserror!: Boolean;
  erreur!: String;


  newAdmin(f:NgForm){
    this.SuccesModal('Admin')
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

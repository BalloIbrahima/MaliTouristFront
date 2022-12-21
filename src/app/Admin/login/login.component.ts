import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/Admin/admin.service';
import { TokenService } from 'src/app/Service/Token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  username:any
  password:any


  Iserror!: Boolean;
  erreur!: String;

  log:any;
  constructor(private router:Router, private adminService:AdminService,private tokenStorage: TokenService){}

  ngOnInit(): void {
    //if
    //throw new Error('Method not implemented.');
    console.log(this.tokenStorage.getUser())
  }


  login(f:NgForm){
    this.Iserror=false;

      this.log= this.adminService.login(this.username,this.password).subscribe(
        data=>{
          console.log(data)
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.router.navigate(['/dashboard'])
      }, error => {
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
        if(error.status==403){
          this.Iserror=true;
         //console.log(error.status)
          this.erreur="Username ou mots de passe incorrect !"

        }
      })

  }


  ngOnDestroy(){
    this.log.unsubscribe();
 }
}

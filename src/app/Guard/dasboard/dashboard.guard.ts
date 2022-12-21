import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/Service/Admin/admin.service';
import { TokenService } from 'src/app/Service/Token/token.service';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router:Router,private adminService:AdminService,private tokenService:TokenService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.adminService.listeAdmin().subscribe(res=>{
        //console.log(res)
      },error => {
        if(error.status==403){
          this.tokenService.signOut();
          this.router.navigate(['/login'])
        }
      });
      return true;

      //console.log(returnValue)
      // if(localStorage.getItem('adminmt')!=null){
      //   return true;
      // }else{
      //   this.router.navigate(['/login'])
      // return false;
      // }
    }

}

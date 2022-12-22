import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TokenService } from 'src/app/Service/Token/token.service';
import { AdminService } from 'src/app/Service/Admin/admin.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent  implements OnInit{


  admin:any
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private tokenStorage: TokenService,private observer: BreakpointObserver, private router: Router, private tokenService:TokenService, private adminService:AdminService) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.admin=this.tokenStorage.getUser().data
    //console.log(this.admin)
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }


  logout() {
    this.tokenService.signOut()
    this.adminService.Deconnecter().subscribe(res=>{},error => {});
    this.router.navigate(['/login'])

  }
}





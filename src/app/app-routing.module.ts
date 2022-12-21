import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Admin/dashboard/acceuil/acceuil.component';
import { DasboardComponent } from './Admin/dashboard/dasboard.component';
import { ListeAdminComponent } from './Admin/dashboard/liste-admin/liste-admin.component';
import { RegionsComponent } from './Admin/dashboard/regions/regions.component';
import { LoginComponent } from './Admin/login/login.component';
import { DashboardGuard } from './Guard/dasboard/dashboard.guard';
import { DetailRegionComponent } from './visiteur/detail-region/detail-region.component';
import { HomeComponent } from './visiteur/home/home.component';
import { VisiteurComponent } from './visiteur/visiteur.component';

const routes: Routes = [
  {path:"home",component:VisiteurComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"region/:id",component:DetailRegionComponent},
      {path: "**", redirectTo:"home",pathMatch:'full'  },
    ]
  },

  {path: "dashboard",component:DasboardComponent,canActivate:[DashboardGuard],
    children:[
      {path:"home",component:AcceuilComponent},
      {path:"admins",component:ListeAdminComponent},

      {path:"regions",component:RegionsComponent},

      {path: "", redirectTo:"home",pathMatch:'full'  },
      {path: "**", redirectTo:"home",pathMatch:'full'  },
    ]
  },
  {path:"login",component:LoginComponent},
  {path: "", redirectTo:"home",pathMatch:'full'  },
  {path: "**", redirectTo:"home",pathMatch:'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

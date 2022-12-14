import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Admin/dasboard/acceuil/acceuil.component';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { LoginComponent } from './Admin/login/login.component';
import { DashboardGuard } from './Guard/dasboard/dashboard.guard';
import { HomeComponent } from './visiteur/home/home.component';
import { VisiteurComponent } from './visiteur/visiteur.component';

const routes: Routes = [
  {path:"home",component:VisiteurComponent,
    children:[
      {path:"",component:HomeComponent},

      {path: "**", redirectTo:"home",pathMatch:'full'  },
    ]
  },

  {path: "dashboard",component:DasboardComponent,canActivate:[DashboardGuard],
    children:[
      {path:"home",component:AcceuilComponent},

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

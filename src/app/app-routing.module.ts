import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadGuard } from './load.guard';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { LoginchildGuard } from './loginchild.guard';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {path:'baba',canLoad:[LoadGuard],loadChildren:() => import('./baba/baba.module').then(m => m.BabaModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivateChild:[LoginchildGuard],
  children:[
    {path:'page',component:LoginpageComponent}
  ]
  ,canDeactivate:[LoginGuard]},
  {path:'not',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { RouterModule } from '@angular/router';
import { BabaModule } from './baba/baba.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BabaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

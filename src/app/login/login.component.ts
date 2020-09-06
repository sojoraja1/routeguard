import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public gotoHome:Boolean = true;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goHome(){
console.log("ss");

this.router.navigate(['/home']);

  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  username:any
  password:any


  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  login(f:NgForm){
    this.router.navigate(['/dashboard'])
  }
}

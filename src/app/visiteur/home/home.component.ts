import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  username:any
  email:any
  description:any

  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendComment(f2:NgForm){

  }

}

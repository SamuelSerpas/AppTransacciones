import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  user= {}

  constructor(private authService: AuthService, private router: Router) 
  {
   }

   signIn(){
     console.log(this.user)
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home/'])
      },
      err => console.log(err)
    )
  }



}

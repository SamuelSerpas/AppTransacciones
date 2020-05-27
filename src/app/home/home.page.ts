import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService: AuthService) { }

  asociados: [] ;

  ngOnInit() {
  }

  listarAsociado(){
    this.authService.getAllAsociado()
    .subscribe(task => {
      this.asociados = task.data;
      localStorage.setItem('asociados', JSON.stringify(this.asociados));
    })}

}

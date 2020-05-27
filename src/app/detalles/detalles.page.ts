import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  detalles: [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   }

  ngOnInit() {
    var array = localStorage.getItem('detalleSocio');
    this.detalles = JSON.parse(array);
    console.log(this.detalles);
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.page.html',
  styleUrls: ['./asociado.page.scss'],
})
export class AsociadoPage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  asociados: [ ];
  items: any;

  ngOnInit() {
    var array = localStorage.getItem('asociados');
    this.asociados = JSON.parse(array);
    this.InitializeItems();
  }

  mostrarAsociado(id:string, index: number) {
    this.authService.getAsociados(id)
    .subscribe((data) => {
      this.navCtrl.navigateRoot('/detalles', data.data);
      localStorage.setItem('detalleSocio', JSON.stringify(data.data));
    })
  }
  doRefresh(event) {
    
    setTimeout(() => {
      var array = localStorage.getItem('asociados');
      this.asociados = JSON.parse(array);
      this.InitializeItems();
      event.target.complete();
    }, 2000);
  }

  InitializeItems(){
    this.items = this.asociados;
  }

  getItems(ev: any){
  this.InitializeItems();
   
  let val = ev.target.value;

  if (val && val.trim() != ''){
  this.items = this.items.filter((item) =>{
  return (item.nombreCliente.toLowerCase().indexOf(val.toLowerCase())> -1);
})
  }
}

}

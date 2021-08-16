import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
      public navController: NavController,
      public menuController: MenuController
    ) { }

  public autenticarUsuario(): void {
    this.navController.setRoot("CategoriaPage");
  }

  // Ao acessar a pagina
  ionViewWillEnter() {
    this.menuController.swipeEnable(false);
  }

  // Ao sair da pagina
  ionViewDidLeave() {
    this.menuController.swipeEnable(true);
  }

}

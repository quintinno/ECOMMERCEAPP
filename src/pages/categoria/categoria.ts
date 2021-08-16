import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaProdutoModel } from '../../model/CategoriaProdutoModel';
import { CategoriaService } from '../../service/CategoriaService';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  public categoriaProdutoList: CategoriaProdutoModel[];

  constructor(
      public navController: NavController, 
      public navParams: NavParams,
      public categoriaService: CategoriaService) {}

  public recuperarCategoriaProduto() {
    this.categoriaService.recuperarCategoriaProdutoList().subscribe( response => {
      this.categoriaProdutoList = response;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
    this.recuperarCategoriaProduto();
  }

}

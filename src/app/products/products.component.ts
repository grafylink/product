import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

   products! : Array<any>;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {

    this.products = this.productService.getAllProducts();

  }
  handleDeleteProduit(produit:any){
    let index = this.products.indexOf(produit);
    this.products.splice(index, 1)};
    
  
}

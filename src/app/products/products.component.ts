import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

   products! : Array<Product>;
   errorMessage!: string;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.handleGetAllProducts();
    } 
    
    handleGetAllProducts(){
      this.productService.getAllProducts().subscribe({
        next : (data)=>{
          this.products = data;
        },
        error: (err) =>{
          this.errorMessage = err;
        }
    });
    
    }

    handleDeleteProduit(produit:Product){
      let conf = confirm("Are you sure ?");
      if(conf==false) return;
      this.productService.DeleteProduit(produit.id).subscribe({
        next: (data)=>{
          //this.handleGetAllProducts();
          let index = this.products.indexOf(produit);
          this.products.splice(index, 1)
        }
      })
    };
  }
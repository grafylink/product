import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products! : Array<Product>;
  constructor() { 
    this.products = 
    [
      {id:1, name: "IPhone 7 plus", price:700},
      {id:2, name: "Samsung XM", price:1200},
      {id:3, name: "IPhone 14 plus", price:2400},
      {id:4, name: "Hp envy", price:920},
    ];
    }

    public getAllProducts() : Observable<Array<Product>>{
      let rnd = Math.random();
      if(rnd<0.1) return throwError(()=>new Error('Internet connexion erreur'));
      else return of(this.products);
    }

    public DeleteProduit(id:number) : Observable<boolean>{
      this.products = this.products.filter(produit=>produit.id != id);
      return of(true);
    }

  }



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products! : Array<any>;
  constructor() { 
    this.products = 
    [
      {id:1, name: "IPhone 7 plus", price:700},
      {id:2, name: "Samsung XM", price:1200},
      {id:3, name: "IPhone 14 plus", price:2400},
      {id:4, name: "Hp envy", price:920},
    ];
    }

    public getAllProducts(){
      return this.products;
    }
  }



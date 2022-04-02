
import { Injectable } from "@angular/core"
import { ProductItemModel } from "./product-item.model"
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { reduce } from "rxjs";

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService {
   

    constructor(private db:AngularFireDatabase){

    }
    
    getProducts(){
        return this.db.list<ProductItemModel>("products").valueChanges();
    }

    getProduct(index: number) {
       return this.db.list("products", ref => ref.orderByChild("price").startAt(10)).valueChanges();
    }

  addProduct(product:ProductItemModel) {
      this.db.list<ProductItemModel>("products").push(product);
  }
}
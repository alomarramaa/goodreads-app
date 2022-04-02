import { HttpClient } from "@angular/common/http"
import { Inject, Injectable } from "@angular/core"
import { ProductItemModel } from "./product-item.model"
import {AngularFireDatabase} from '@angular/fire/compat/database'

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService {
    private baseUrl: string = "https://goodreads-9170c-default-rtdb.firebaseio.com/"
    private productsEndPoint:string = "products.json"

    constructor(private db:AngularFireDatabase){

    }
    
    getProducts(){
        return this.db.list<ProductItemModel>("products").valueChanges();
    }

    getProduct(index: number) {
       
    }

  addProduct(product:ProductItemModel) {
      this.db.list<ProductItemModel>("products").push(product);
  }
}
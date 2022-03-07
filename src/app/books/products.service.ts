import { HttpClient } from "@angular/common/http"
import { Inject, Injectable } from "@angular/core"
import { ProductItemModel } from "./product-item.model"

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService {
    private baseUrl: string = "https://goodreads-9170c-default-rtdb.firebaseio.com/"
    private productsEndPoint:string = "products.json"

    constructor(private http:HttpClient){

    }
    
    getProducts(){
        return this.http.get<ProductItemModel[]>(this.baseUrl + this.productsEndPoint)
    }

    getProduct(index: number) {
        return this.http.get<ProductItemModel[]>(this.baseUrl + this.productsEndPoint)
    }
}
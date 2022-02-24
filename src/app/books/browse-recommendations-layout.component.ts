import { Component, Input } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'app-browse-recommendations',
    templateUrl:'browse-recommendations-layout.component.html',
    styleUrls:['browse-recommendations-layout.component.css']
})
export class BrowseRecommendationsLayoutComponent {
    products: ProductItemModel[] = [];
    constructor() {
        for (var product of mock_product_list) {
          console.log(product);
          this.products.push(product);
        }
    
      }
     
 }
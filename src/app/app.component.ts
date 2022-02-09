import { Component } from '@angular/core';
import { mock_product_list } from './books/mock_product_list';
import { ProductItemModel } from './books/product-item.model';
import { category_list } from './categories/category_list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goodreads-app';
  products: ProductItemModel[] = [];
  category_list: any = category_list;

  constructor() {
    for (var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    }
  }
   
}

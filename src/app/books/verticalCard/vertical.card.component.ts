import { Component, Input, OnInit } from "@angular/core";
import { ProductItemModel } from "../product-item.model";
import { ProductsService } from "../products.service";

@Component({
    selector: 'app-vertical-card',
    templateUrl: 'vertical.card.component.html',
    styleUrls: ['vertical.card.component.css']
})
export class VerticalCardComponent implements OnInit {
    products: ProductItemModel[] = [];
    @Input() img: string;
    @Input() link: string;

    constructor(private productsService: ProductsService) {
        this.img = "";
        this.link = "Missing link";
    }
    ngOnInit(): void {
        this.productsService.getProducts().subscribe((data: ProductItemModel[]) => {
            console.log("Fetching products");
            for (var product of data) {
                this.products.push(product);
            }
        });

    }

}
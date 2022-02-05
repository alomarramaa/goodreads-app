import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-category-card',
    templateUrl: 'category.card.component.html',
    styleUrls:['category.card.component.css']
})
export class CategoryCardComponent{
    @Input()
    img: string;
    title: string;
    author: string;

    constructor(){
        this.img = "";
        this.title = "Missing title";
        this.author = "Missing author";
    }
}
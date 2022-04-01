import { Component } from "@angular/core";
import { category_list } from "../../categories/category_list";


@Component({
    selector: 'app-home-layout',
    templateUrl:'home-layout.component.html',
    styleUrls:['home-layout.component.css']
})
export class HomeLayoutComponent{
    
    category_list: any = category_list;

}
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-browse-choice-awards',
    templateUrl:'browse-choice-awards.component.html',
    styleUrls:['browse-choice-awards.component.css']
})
export class BrowseChoiceAwardsComponent{
    @Input()
    title!: string;
    @Input()
    author!: string;
  

}

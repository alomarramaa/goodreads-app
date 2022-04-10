import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl:'auth.component.html',
    styleUrls:['auth.component.css']
})
export class AuthComponent{
    public onSubmit(data:NgForm){
        console.log("button clicked");
        console.log(data);

    }
  

}

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl:'auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private auth:AuthService){}
    ngOnInit(): void {
    }

public onSubmit(data:NgForm){
    console.log("Button clicked");
    console.log(data);
    this.auth.signup(data.value.email, data.value.password).subscribe(
        data => {
            console.log(data);
        }
    );
    data.reset();
}

}

 
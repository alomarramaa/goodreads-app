import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info';

@Component({
  selector: 'gr-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  myInfo: UserInfo | undefined;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending get request");
    this.showUserInfo();
  }
  getUserInfo() {
    return this.http.get<UserInfo>("https://goodreads-9170c-default-rtdb.firebaseio.com/myinfo.json")
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Olive Technology';
  users: Array<object>;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this
      .userService
      .getUsers()
      .then((users) => {
        const data = users.json();
        this.users = data;
        console.log(this.users);
      })
      .catch((err) => {
        console.log(err, 'Error at accessing user data');
      })
  }

}
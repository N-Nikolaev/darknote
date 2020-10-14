import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  loginState = true;

  constructor() {}

  ngOnInit(): void {}

  onLogin() {
    this.loginState = !this.loginState;
  }
}

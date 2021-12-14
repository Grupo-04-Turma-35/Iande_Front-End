import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css'],
})
export class MenuHomeComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/home']);
  }
}

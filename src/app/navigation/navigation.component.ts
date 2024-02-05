import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public routes = routes;
  // public isLoggedIn = (await account.get()) ? true : false;

  constructor() {
    // account.subscribe((user) => {
    //   this.isLoggedIn = user ? true : false;
    // });
  }
}

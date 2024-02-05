import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ID, account } from '../lib/appwrite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  async ngOnInit() {
    this.loggedInUser = await account.get();
  }

  async login(email: string, password: string) {
    await account.createEmailSession(email, password);
    this.loggedInUser = await account.get();
    if (this.loggedInUser) {
      this.router.navigateByUrl('user');
    }
  }

  async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession('current');
    this.loggedInUser = null;
  }
}

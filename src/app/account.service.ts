import { Injectable } from '@angular/core';
import { Client, Models, Account } from 'appwrite';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // currentUser = new BehaviorSubject<Models.User<Models.Preferences>>();

  // account = new BehaviorSubject<Account|undefined>(undefined);

  constructor() {}
}

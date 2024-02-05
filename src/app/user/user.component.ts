import { Component } from '@angular/core';
import { account } from '../lib/appwrite';
import { AsyncPipe, JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, UpperCasePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user$ = account.get();
}

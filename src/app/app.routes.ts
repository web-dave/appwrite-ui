import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { authGuard } from './auth.guard';

interface ApplicationRoute extends Route {
  data?: {
    menuname: string;
    [key: string]: any;
  };
}

export const routes: ApplicationRoute[] = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home is where my wifi is free',
    data: {
      menuname: 'Home',
    },
  },
  {
    path: 'user',
    canActivate: [authGuard],
    component: UserComponent,
    title: 'Hello User',
    data: {
      menuname: 'User',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      menuname: 'About',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { menuname: 'login' },
  },
  {
    path: 'message',
    canActivate: [authGuard],
    component: MessageComponent,
    data: {
      menuname: 'Send Message',
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { catchError, from, map, of, tap } from 'rxjs';
import { account } from './lib/appwrite';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  return from(account.get()).pipe(
    tap((data) => console.log(data)),
    map((loggedInUser) =>
      loggedInUser ? true : router.createUrlTree(['login'])
    ),
    catchError((error) => {
      console.error(error);
      return of(router.createUrlTree(['login']));
    })
  );
};

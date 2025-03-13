import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userUID = localStorage.getItem('currentUserUID');
  const router = inject(Router);
  if (userUID) {
    return true;
  }
  router.navigate(['/signin'])
  return false;
};

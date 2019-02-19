import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivateGuard {
  canDeactivate() {
    if ((window as any).disableNav) {
      return false;
    }

    return true;
  }
}

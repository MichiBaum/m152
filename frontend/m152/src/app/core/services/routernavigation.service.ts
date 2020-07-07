import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouternavigationService {

  constructor(private router: Router) { }

  homeNavigate() {
    this.router.navigate(['/home'], {skipLocationChange: true});
  }

  conceptNavigate() {
    this.router.navigate(['/concept'], {skipLocationChange: true});
  }

  timelineNavigate() {
    this.router.navigate(['/timeline'], { skipLocationChange: true });
  }

  imprintNavigate() {
    this.router.navigate(['/imprint'], { skipLocationChange: true });
  }

  fileformatsNavigate() {
    this.router.navigate(['/fileformats'], { skipLocationChange: true });
  }

  animationsNavigate() {
    this.router.navigate(['/animations'], { skipLocationChange: true });
  }

  pwaNavigate() {
    this.router.navigate(['/pwa'], { skipLocationChange: true });
  }

  mockupNavigate() {
    this.router.navigate(['/mockup'], { skipLocationChange: true });
  }

  styleguideNavigate() {
    this.router.navigate(['/styleguide'], { skipLocationChange: true });
  }

  licensesNavigate() {
    this.router.navigate(['/licenses'], { skipLocationChange: true });
  }

  testingNavigate() {
    this.router.navigate(['/testing'], { skipLocationChange: true });
  }
}

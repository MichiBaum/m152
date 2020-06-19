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

  timelineNavigate() {
    this.router.navigate(['/timeline'], { skipLocationChange: true });
  }

  imprintNavigate() {
    this.router.navigate(['/imprint'], { skipLocationChange: true });
  }

}
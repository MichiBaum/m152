import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-in-place-icon',
  templateUrl: './inPlaceIcon.component.html',
  styleUrls: ['./inPlaceIcon.component.scss']
})
export class InPlaceIconComponent implements OnInit {

  @Input() size: string;

  @Input() showOnMobile = true;

  constructor() { }

  ngOnInit(): void {
  }

}

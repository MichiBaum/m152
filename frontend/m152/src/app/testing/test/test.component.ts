import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() testNumber: string;
  @Input() chromeRating = 0;
  @Input() firefox = 0;
  @Input() edge = 0;
  @Input() ie = 0;
  @Input() mobileChrome = 0;
  isColsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeState() {
    this.isColsed = !this.isColsed;
  }
}

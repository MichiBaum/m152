import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  isColsed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isColsed = true;
  }


  changeState() {
    if (this.isColsed) {
      this.isColsed = false;
    } else {
      this.isColsed = true;
    }
  }
}

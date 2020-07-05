import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  icon: string;
  isColsed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.icon = 'pi pi-sort-down';
    this.isColsed = true;
  }


  changeState() {
    if (this.isColsed) {
      this.isColsed = false;
      this.icon = 'pi pi-sort-up';
    } else {
      this.isColsed = true;
      this.icon = 'pi pi-sort-down';
    }
  }
}

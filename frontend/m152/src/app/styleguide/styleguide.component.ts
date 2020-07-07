import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {

  primaryColor: any = '#e91224';

  constructor() { }

  ngOnInit(): void {
  }

}

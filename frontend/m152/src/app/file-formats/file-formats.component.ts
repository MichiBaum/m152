import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-formats',
  templateUrl: './file-formats.component.html',
  styleUrls: ['./file-formats.component.scss']
})
export class FileFormatsComponent implements OnInit {

  imageNames: string[];

  constructor() { }

  ngOnInit(): void {
    this.imageNames = [
      'frog.JPG',
      'waterdrop.JPG',
      'rothorn_1.jpg',
      'rothorn_2.jpg'
    ];
  }


}

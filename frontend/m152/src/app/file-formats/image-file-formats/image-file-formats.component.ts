import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-file-formats',
  templateUrl: './image-file-formats.component.html',
  styleUrls: ['./image-file-formats.component.scss']
})
export class ImageFileFormatsComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        src: 'assets/images/frog.JPG',
        alt: 'frog.JPG'
      },
      {
        src: 'assets/images/waterdrop.JPG',
        alt: 'waterdrop.JPG'
      },
      {
        src: 'assets/images/rothorn_1.jpg',
        alt: 'rothorn_1.jpg'
      },
      {
        src: 'assets/images/rothorn_2.jpg',
        alt: 'rothorn_2.jpg'
      },
    ];
  }


}

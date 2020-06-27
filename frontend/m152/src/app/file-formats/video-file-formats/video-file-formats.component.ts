import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-file-formats',
  templateUrl: './video-file-formats.component.html',
  styleUrls: ['./video-file-formats.component.scss']
})
export class VideoFileFormatsComponent implements OnInit {

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

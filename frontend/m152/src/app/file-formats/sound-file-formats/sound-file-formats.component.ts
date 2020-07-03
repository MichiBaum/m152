import { Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-sound-file-formats',
  templateUrl: './sound-file-formats.component.html',
  styleUrls: ['./sound-file-formats.component.scss']
})
export class SoundFileFormatsComponent implements OnInit {

  images: any[];
  soundBaseHref = environment.sound_base_href;

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

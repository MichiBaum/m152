import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-formats',
  templateUrl: './file-formats.component.html',
  styleUrls: ['./file-formats.component.scss']
})
export class FileFormatsComponent implements OnInit {

  rating = 3;

  constructor() { }

  ngOnInit(): void {
  }


}

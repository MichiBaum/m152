import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.component.html',
  styleUrls: ['./mockup.component.scss']
})
export class MockupComponent implements OnInit {
  libraries: any[];
  others: any[];

  constructor() { }

  ngOnInit(): void {
    this.libraries = [
      {
        name: 'Angular',
        link: 'https://angular.io/'
      },
      {
        name: 'PrimeNG',
        link: 'https://www.primefaces.org/primeng//'
      }
    ];

    this.others = [
      {
        name: 'Docker',
        link: 'https://www.docker.com/'
      },
      {
        name: 'Docker amd64/node',
        link: 'https://hub.docker.com/r/amd64/node/'
      },
      {
        name: 'Docker arm64v8/nginx',
        link: 'https://hub.docker.com/r/arm64v8/nginx/'
      },
      {
        name: 'Jetbrains idea (Intellij)',
        link: 'https://www.jetbrains.com/de-de/idea/'
      },
      {
        name: 'Desktop Github',
        link: 'https://desktop.github.com/'
      },
      {
        name: 'Visual Studio Code',
        link: 'https://code.visualstudio.com/'
      }
    ];
  }

  openLink($event: any) {
    const link = $event.option.value.link;
    window.open(link);
  }
}

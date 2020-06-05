import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  events: any[];

  options: any;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2020-06-05',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      height: window.innerHeight / 100 * 80
    };

    this.events = [
      {
        title: 'Webseite Grundgerüst',
        start: '2020-06-05',
        end: '2020-06-05'
      },
      {
        title: 'Kalender für Zeitlinie einbauen',
        start: '2020-06-05',
        end: '2020-06-05'
      }
    ];
  }

}

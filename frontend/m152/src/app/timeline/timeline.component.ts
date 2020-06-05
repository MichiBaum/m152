import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

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
      plugins: [dayGridPlugin, timeGridPlugin],
      defaultDate: '2020-06-05',
      agenda: 'h:mm{ - h:mm}',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,timeGridDay'
      },
      height: window.innerHeight / 100 * 80
    };

    this.events = [
      {
        title: 'Input Copyright',
        start: '2020-05-29T13:00:00',
        end: '2020-05-29T14:30:00'
      },
      {
        title: 'Input SVG',
        start: '2020-06-05T13:00:00',
        end: '2020-06-05T14:05:00'
      },
      {
        title: 'Webseite Grundgerüst',
        start: '2020-06-05T14:10:00',
        end: '2020-06-05T15:40:00'
      },
      {
        title: 'Kalender für Zeitlinie einbauen',
        start: '2020-06-05T15:40:00',
        end: '2020-06-05T16:20:00'
      }
    ];
  }

}

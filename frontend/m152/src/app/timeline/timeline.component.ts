import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import {events_data} from "./events.data";

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

    this.events = events_data
  }

}

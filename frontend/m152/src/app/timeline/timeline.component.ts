import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import {eventsData} from './events.data';
import {LanguageConfig} from '../core/language.config';
import {TranslateService, TranslateStore} from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(
    private languageConfig: LanguageConfig,
    private translate: TranslateService
  ) {
    this.languageConfig.languageChanged.subscribe(() => {
      this.initOptions();
    });
  }

  events: any[];
  @ViewChild('calendar') calendar;
  options: any;

  ngOnInit(): void {
    this.initOptions();
    this.events = eventsData;
  }

  initOptions() {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin],
      defaultDate: '2020-06-05',
      agenda: 'h:mm{ - h:mm}',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,timeGridDay'
      },
      height: window.innerHeight / 100 * 80,
      locales: this.languageConfig.languages.map(value => value.isoCode) as string[],
      locale: this.languageConfig.current.isoCode,
      buttonText: {
        today: this.translate.instant('calendar.settings.today'),
        month: this.translate.instant('calendar.settings.month'),
        week: this.translate.instant('calendar.settings.week'),
        day: this.translate.instant('calendar.settings.day'),
        list: this.translate.instant('calendar.settings.list')
      }
    };
  }

}

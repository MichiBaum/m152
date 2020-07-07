import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {eventsData} from './events.data';
import {LanguageConfig} from '../core/language.config';
import {TranslateService} from '@ngx-translate/core';
import {FullCalendar} from 'primeng';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  events: any[];
  @ViewChild('calendar') calendar: FullCalendar;
  options: any;

  constructor(
    private languageConfig: LanguageConfig,
    private translate: TranslateService
  ) {
    this.languageConfig.languageChanged.subscribe(() => {
      this.initOptions();
      this.initCalendarEntries();
    });

  }

  ngOnInit(): void {
    this.initOptions();
    this.initCalendarEntries();
  }

  initOptions() {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
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
      allDaySlot: false,
      firstDay: 1,
      buttonText: {
        today: this.translate.instant('calendar.settings.today'),
        month: this.translate.instant('calendar.settings.month'),
        week: this.translate.instant('calendar.settings.week'),
        day: this.translate.instant('calendar.settings.day'),
        list: this.translate.instant('calendar.settings.list')
      },
      dateClick: (e) =>  {
        this.gotoDate(e.date as Date);
      }
    };
  }

  initCalendarEntries(){
    this.events = eventsData.map(
      value => {
        return {
          title: this.translate.instant('calendar.entries.' + value.id + '.title'),
          start: value.start,
          end: value.end
        }
      }
    );
  }

  gotoDate(date: Date) {
    this.calendar.getCalendar().gotoDate(date);
    this.calendar.getCalendar().changeView('timeGridDay');
  }

}

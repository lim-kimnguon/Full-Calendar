import { Component } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as moment from 'moment';

defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latest-calendar';
  events: any[] = [];
  users: any[] = [
    { id: '1', name: 'test1', date: '2022-08-24' },
    { id: '2', name: 'test2', date: '2022-08-30'}
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin],
    timeZone: 'Asia/Phnom_Penh',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'timeGridWeek',
    weekends: true,
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
    },
    events: [{

    }]
  };

  onClick() {
    var date = prompt('Enter your date format(YYYY-MM-DD):');
    var time = prompt('Enter your time format(HH:MM:SS):');
    var startTime = new Date(Date.parse(date + ' ' + time));
    var endTime = new Date(new Date(startTime).getTime() + 7200000);
    console.log(this.changeFormat(startTime));
    this.users.map((item, index) => {
      this.events.push({ id: `${index + 1}`, title: `Quiz: ${item.name}`, start: this.changeFormat(startTime), end: this.changeFormat(endTime), allDay: false });
    })

    this.calendarOptions = {
      ...this.calendarOptions,
      events: this.events
    }
  }

  changeFormat(date: any): string {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
}

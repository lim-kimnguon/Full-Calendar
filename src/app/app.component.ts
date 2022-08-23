import { Component } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import listPlugin from '@fullcalendar/list';

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
    { id: '1', name: 'test1', date: '2022-08-24'},
    { id: '2', name: 'test2', date: '2022-08-28'}
  ];

  calendarOptions: CalendarOptions = {
    plugins: [listPlugin],
    timeZone: 'Asia/Phnom_Penh',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'listMonth,listWeek,listDay'
    },
    initialView: 'listWeek',
    weekends: true,
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
    },
  };

  onClick() {
    var date = prompt('Enter your date format(YYYY-MM-DD):');
    var time = prompt('Enter your time format(HH:MM:SS):');
    if(!isNaN(Date.parse(date!))) {
      console.log(new Date(date! + 'T' + time));
    }
    this.users.map((item, index) => {
      this.events.push({ id: `${index + 1}`, title: `Quiz: ${item.name}`, start: date, allDay: false });
    })

    this.calendarOptions = {
      ...this.calendarOptions,
      events: this.events
    }
  }
}

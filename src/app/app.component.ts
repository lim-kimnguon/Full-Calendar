import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as moment from 'moment';
import { FullCalendar, FullCalendarService } from './service/full-calendar.service';

defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    initialView: 'dayGridMonth',
    weekends: true,
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
    }
  };

  constructor(private service: FullCalendarService) { }

  ngOnInit() {
    this.getQuizDate();
  }

  getQuizDate() {
    this.service.getData().subscribe({
      next: (data) => {
        console.log(data);
        data.map((item, index) => {
          this.events.push({ id: `${index + 1}`, title: `${ item.title }`, start: `${ this.changeFormat(item.startDate) }`, end: `${ this.changeFormat(item.endDate) }`});
        });
        this.calendarOptions = {
          ...this.calendarOptions,
          events: this.events
        }
      }
    });
  }

  onClick() {
    var title = prompt('Enter a title: ');
    var date = prompt('Enter your date format(YYYY-MM-DD):');
    var time = prompt('Enter your time format(HH:MM:SS):');
    var startTime = new Date(Date.parse(date + ' ' + time));
    console.log(startTime);
    var endTime = new Date(new Date(startTime).getTime() + 7200000);
    if(Object.prototype.toString.call(startTime) === "[object Date]") {
      if(!isNaN(Date.parse(date + ' ' + time))) {
        var formData = new FormData();
        formData.append('title', title!);
        formData.append('startDate', this.changeFormat(startTime));
        formData.append('endDate', this.changeFormat(endTime));
        this.service.setData(formData).subscribe({
          next: () => {
            alert('Success');
            window.location.reload();
          }
        });
      } else {
        alert('error');
      }
    }
  }

  changeFormat(date: any): string {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
}

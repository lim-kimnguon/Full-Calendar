import { Component, ElementRef, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarElement, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latest-calendar';

  // references the #calendar in the template
  @ViewChild('calendar') calendarRef: ElementRef<FullCalendarElement> | undefined;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
  };

  someMethod() {
    let calendarApi = this.calendarRef!.nativeElement.getApi();
    calendarApi!.next();
  }
}

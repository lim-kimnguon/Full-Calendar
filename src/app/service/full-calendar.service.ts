import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface FullCalendar {
  id: number,
  startDate: Date,
  endDate: Date,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class FullCalendarService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getData(): Observable<FullCalendar[]> {
    return this.http.get<FullCalendar[]>(`${this.baseUrl}`);
  }

  setData(formData: FormData) {
    return this.http.post(`${this.baseUrl}`, formData);
  }
}

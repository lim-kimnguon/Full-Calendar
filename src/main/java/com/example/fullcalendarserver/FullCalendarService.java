package com.example.fullcalendarserver;

import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class FullCalendarService {
    private final FullCalendarRepo repo;

    public FullCalendarService(FullCalendarRepo repo) {
        this.repo = repo;
    }

    public void setData(Date startDate, Date endDate, String title) {
        FullCalendar fullCalendar = new FullCalendar();
        fullCalendar.setTitle(title);
        fullCalendar.setStartDate(startDate);
        fullCalendar.setEndDate(endDate);
        this.repo.save(fullCalendar);
    }

    public List<FullCalendar> getData() {
        return this.repo.findAll();
    }
}

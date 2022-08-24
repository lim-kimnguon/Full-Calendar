package com.example.fullcalendarserver;

import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(originPatterns = "*")
public class FullCalendarController {
    private final FullCalendarService service;

    public FullCalendarController(FullCalendarService service) {
        this.service = service;
    }

    @GetMapping
    public List<FullCalendar> getDate() {
        return this.service.getData();
    }

    @PostMapping
    public void setData(@RequestParam("startDate") String inputStartDate,
                        @RequestParam("endDate") String inputEndDate,
                        @RequestParam("title") String title) throws ParseException {
        Date startDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(inputStartDate);
        Date endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(inputEndDate);
        this.service.setData(startDate, endDate, title);
    }
}

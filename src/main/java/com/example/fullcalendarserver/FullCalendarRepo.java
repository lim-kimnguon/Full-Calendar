package com.example.fullcalendarserver;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FullCalendarRepo extends JpaRepository<FullCalendar, Integer> {
}

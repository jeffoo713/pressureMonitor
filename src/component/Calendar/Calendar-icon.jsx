import React from 'react';

const CalendarIcon = ({toggleCalendar}) => (
  <div>
    <ion-icon 
      name="calendar-outline" 
      size="large"
      onClick={toggleCalendar}
    />
  </div>
)

export default CalendarIcon;
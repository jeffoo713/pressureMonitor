import React from 'react';

const CalendarIcon = ({toggleCalendar}) => (
  <div>
    <ion-icon 
      name="calendar-outline" 
      size="large"
      onClick={toggleCalendar}
      style={{ cursor: 'pointer'}}
    />
  </div>
)

export default CalendarIcon;
import React from 'react';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const CalendarForm =({dateChange}) => (
    <Calendar
      className="col-12"
      onChange={dateChange}
    />
)

export default CalendarForm;
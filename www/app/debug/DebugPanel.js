'use client'

import { useState, useEffect } from 'react';
import KeyValueDebugger from './KeyValueDebugger'
import moment from 'moment';

function DebugPanel({ listener, event }) {
  const [events, setEvents] = useState([]);

  // Update the events list whenever the `event` prop changes
  useEffect(() => {
    if (event && event.target && event.value) {
      setEvents(prevEvents => [
        {
          target: event.target,
          value: event.value,
          timestamp: moment().format('HH:mm:ss')
        },
        ...prevEvents
      ]);
    }
  }, [event]);

  return (
    <>
      <KeyValueDebugger listener={listener} />
      <h2>Event List</h2>
      {events.map((event, index) => (
        <div key={index} className="flex justify-start border-b border-gray-200 py-2">
          <p className="text-gray-600">{event.timestamp}</p>
          <p className="text-gray-800">{event.target}: {event.value}</p>
        </div>
      ))}
    </>
  );
}

export default DebugPanel;

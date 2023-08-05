'use client'

import { useState } from 'react';


export default function Home() {

  // declare key and value state variables
  const [event, setEvent] = useState({});

  const listen = (key, value) => {
    setEvent({target: key, value: value})
  }

  return (


      <ul>
        <li><a href="/sensors/proximity">Proximity Sensor</a></li>
        <li><a href="/sensors/pir">PIR Light Sensor</a></li>
        <li><a href="/sensors/moisture">Soil Moisture Sensor</a></li>
        <li><a href="/sensors/fire">Fire Sensor</a></li>
      </ul>
    </main>
  )
}

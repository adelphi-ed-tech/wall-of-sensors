'use client'

import { useState } from 'react';


import Image from 'next/image'
import KeyValueDebugger from './debug/KeyValueDebugger'

export default function Home() {

  // declare key and value state variables
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const listen = (key, value) => {
    setKey(key);
    setValue(value);
  }

  return (
    <main className="flex min-h-screen flex-col justify-start p-24">
      <h1 className="text-4xl font-bold text-center">Wall of Sensors</h1>
      <KeyValueDebugger listener={listen} />
      <ul>
        <li><a href="/debug">Debug WebSocket</a></li>
        <li><a href="/sensors/pir">PIR Light Sensor</a></li>
      </ul>
    </main>
  )
}

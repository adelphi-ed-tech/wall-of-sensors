
'use client'

import { useState } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import DebugPanel from './debug/DebugPanel';

export const metadata = {
  title: 'Wall of Sensors',
  description: 'MIXI Labs: WOS',
}

export default function RootLayout({ children }) {
  // declare key and value state variables
  const [event, setEvent] = useState({});

  const listen = (key, value) => {
    setEvent({ target: key, value: value })
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-800 mx-auto">
          <h1>Wall of Sensors</h1>
        </header>
        <main className="flex min-h-screen justify-start border rounded-md">

          <div className="MainPanel w-4/5">
            {children}
          </div>
          <div className="SidePanel w-1/5 px-4">
            <DebugPanel listener={listen} event={event} />
          </div>
        </main>  
        
        
      </body>
    </html>
  )
}

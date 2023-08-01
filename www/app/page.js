import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start p-24">
      <h1 className="text-4xl font-bold text-center">Wall of Sensors</h1>
      <ul>
        <li><a href="/debug">Debug WebSocket</a></li>
        <li><a href="/sensors/pir">PIR Light Sensor</a></li> 
        <li><a href="/sensors/fire">Fire Sensor</a></li>
      </ul>
    </main>
  )
}

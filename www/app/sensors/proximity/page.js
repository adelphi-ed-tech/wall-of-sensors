'use client'

function Proximity({event}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold text-center">Proximity Sensor</h1>
            <p>The proximity sensor uses ultrasonic saves to measure proximity.</p>
        </main>
    )
}

function Distance({event}) {
    if (!event || event.target != 'distance') {
        return null;
    }
    return (
        <p>distance: {event.value}mm</p>
    )

}

export default Proximity;
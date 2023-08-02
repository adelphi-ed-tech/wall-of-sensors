



function Fire() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold text-center">Fire Sensor</h1>
            <div className= "h-96 relative">
               <img src="https://images.unsplash.com/photo-1546182208-1e70985e2bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60" className="w-full h-full"></img>
            </div>
            <h2 className="text-xl font bold text-center">KY-026 FLAME SENSOR MODULE</h2>
            <div className="d-flex">
              <button
                type="button"
                className="inline-block rounded-full bg-green-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">
                    <li><a href="../fireinfo/digital">Digital Output</a></li>
                </button>
                  <button type="button" className="inline-block rounded-full bg-cyan-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">
                    <li><a href="../fireinfo/analog">Analog Output </a></li>
              </button>
              <button
                type="button"
                className="inline-block rounded-full bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">
                Adjust Sensor
            </button>
            </div>
            
            <p > The KY-026 Flame Sensor module detects infrared light emitted by fire. This module has both digital and analog outputs and a potentiometer to adjust the sensitivity. Commonly used in fire detection systems</p>

        </main>
    )
}

export default Fire;
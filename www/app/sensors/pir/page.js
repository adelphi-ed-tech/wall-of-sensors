
function Pir() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold text-center">PIR Light Sensor</h1>
        </main>
    )
}

export default Pir;

// pir_light.js
import React, { useState } from 'react';

const Light = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>PIR Light Sensor</h2>
      <div className={`light ${isOn ? 'on' : 'off'}`} onClick={toggleLamp}>
        <div className={`bulb ${isOn ? 'lit' : 'unlit'}`} />
      </div>
    </div>
  );
};

export default light;

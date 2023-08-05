'use client'

import { useState, useEffect } from 'react';

function KeyValueData({listener}) {

    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Key:', key);
        console.log('Value:', value);
        listener(key, value);
        setKey('');
        setValue('');
      }
    
      return (
        <div className="bg-gray-300 p-3 flex">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="key">Key:</label>
              <input name="key" type="text" value={key} onChange={event => setKey(event.target.value)} />
            </div>
            <div>
              <label htmlFor="value">Value:</label>
              <input name="value" type="text" value={value} onChange={event => setValue(event.target.value)} />
            </div>
            <button className='btn' type="button" onClick={handleSubmit}>submit</button>
          </form>
        </div>
      );
}

export default KeyValueData;

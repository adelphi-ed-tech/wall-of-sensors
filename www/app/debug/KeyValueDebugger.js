'use client'

import { useState, useEffect } from 'react';

function KeyValueData({listener}) {

    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Key:', key);
        console.log('Value:', value);
        setKey('');
        setValue('');
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Key:
            <input type="text" value={key} onChange={event => setKey(event.target.value)} />
          </label>
          <label>
            Value:
            <input type="text" value={value} onChange={event => setValue(event.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
}

export default KeyValueData;

'use client'

import { useState, useEffect } from 'react';

function WsDebug() {
    // Here, we're using the `useState` hook to create some state for the component
    // This state will be updated whenever a message is received from the websocket
    const [data, setData] = useState(null);

    useEffect(() => {
        // The `useEffect` hook runs when the component mounts
        // Here, we're creating a new websocket connection
        const ws = new WebSocket('ws://192.168.1.14:8080');

        ws.onopen = () => {
            console.log('connected');
        };

        ws.onmessage = evt => {
            // update state when a message is received from the server
            const message = JSON.parse(evt.data);
            setData(message);
        };

        ws.onerror = error => {
            console.log('WebSocket error: ', error);
        };

        ws.onclose = () => {
            console.log('disconnected');
            // automatically try to reconnect on connection loss
        };

        // The return function will be called when the component unmounts
        // This is used for cleanup (like closing the websocket connection)
        return () => {
            ws.close();
        };
    }, []); // Empty array indicates that this effect should only be run on mount and unmount

    // Now that we have our state, we can render it
    return (
        <div>
            <h1>Data from websocket:</h1>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default WsDebug;

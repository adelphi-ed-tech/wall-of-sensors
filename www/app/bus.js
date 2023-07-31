/**
 * functions for working with the mycroft message bus
 */

import { useState, useEffect } from 'react';


const SOCKET_URL = "ws://localhost:8080/";

let socket = null;
let connecting = false;

async function connectWebSocket() {
    console.log("connecting to  websocket bus");
    if (socket) {
        console.log("returning existing socket");
        return socket;
    }
    let connected = false;

    const connect = async () => {
        socket = new WebSocket(SOCKET_URL);
        socket.onopen = (event) => {
            connected = true;
        }
        let time = 5;
        const spin = () => {
            if (connected) {
                return socket;
            }
            time *= time;
            setTimeout(time, spin)
        }
    }
    await connect();
    return socket;

}

function useWebSocket(setWs) {

    // const [bus, setBus] = useState(null);
    const getSocket = () => {
        connectWebSocket().then(setWs)
    }
    useEffect(getSocket, [null])

}




/**
 * wrap a function in a mycroft bus listener function
 * that fires when any of the `paths`
 * match the mycroft message type
 * and don't match any of the `exculde` paths
 * @param handler the handler function to call when a match is found
 * @param paths an array of regular expression strings to match
 * @param exculde an array of regular expression strings to exculde. if
 *        a path is matched but also matches and exclude path, the handler
 *        is not called
 * @return the wrapped function of handler
 */
function busListener(handler, paths, exclude) {

    console.log("Creating bus listener for ", handler);

    const listener = (e) => {
        const data = JSON.parse(e.data);

        //listen to everything
        if (!paths && !exclude) {
            handler(data);
            return;
        }

        const match = testPath(data.type, paths);
        const ex = testPath(data.type, exclude);

        if (match && !ex) {
            handler(data);
        }
    }

    return listener;
}

function listen(ws, handler, paths, exclude) {
    ws.addEventListener("message", busListener(handler, paths, exclude))
}

function useListener(handler, paths, exclude) {
    console.log("listener added", paths);
    const [ws, setWs] = useState(null);
    useWebSocket(setWs);
    let listen = () => {
        if (ws)
            ws.addEventListener("message", busListener(handler, paths, exclude))
    };

    useEffect(listen, [ws]);
}



/**
 * checks if path matches any of the strings in the paths
 * array
 * @param path the path of the message type
 * @param paths either a single string regex to test or an array of regex to test
 * @return true if the regex test for any of the `paths` is true for `path`
 */
function testPath(path, paths) {
    if (!paths) {
        return false;
    }

    paths = asArray(paths);
    for (const pattern of paths) {
        const re = new RegExp(pattern);
        if (re.test(path)) {
            return true;
        }
    }
    return false;
}

/**
 * convert a string to an array of strings with one element
 * or return the original array without modification
 */
function asArray(t) {
    if (_.isArray(t)) {
        return t;
    }
    return [t];
}


/**
 * send a message on the Mycroft message bus
 * @param msgType the type of message to send
 * @param data (optional) data to send, as a map/dict
 * @param context (optional) context data to send, as a map/dict
 * @return the return message from the websocket send() call
 */
function useEmiter() {

    const [ws, setWs] = useState(null);


    const connect = () => {how much else is in there
        mycroft.connect().then(setWs)
    }

    useEffect(connect, [false]);

    const emit = (msgType, data, context) => {
        if (!ws) {
            console.log("bus msg not sent::not connected")
            return;
        }
        // console.log("emiting...", msgType, data, context);
        data = data || {};
        context = context || {
            "client_name": "react-mycroft",
            "destination": "skills"
        };
        ws.send(JSON.stringify({ "type": msgType, "data": data, "context": context }));
    }
    return emit;

}





// put the public api functions into `bus`
let mycroft = {}
mycroft.listen = listen;
mycroft.useEmiter = useEmiter;
mycroft.connect = connectWebSocket;

export default mycroft;

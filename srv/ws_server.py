import asyncio
import websockets
import json
import threading

# This queue will contain the messages to send
queue = asyncio.Queue()


def get_input():
    while True:
        data = input("Enter key,value pair: ")
        key, value = data.split(",")
        # Put the input message in the queue
        queue.put_nowait({key: value})


# Run get_input in another thread
threading.Thread(target=get_input, daemon=True).start()


async def server(websocket, path):
    while True:
        # Wait for a message in the queue
        message = await queue.get()
        await websocket.send(message)


asyncio.run(server("192.168.1.14", 8080))

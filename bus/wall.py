from bluezero import microbit

print("starting wall of sensors server...")

host_address = 'F4:8C:50:B9:6C:97'
client_address = 'E6:D0:33:9C:C0:E9'

def data_handler(value):
    print(value)

ubit = microbit.Microbit(adapter_addr=host_address,
                         device_addr=client_address,
                         accelerometer_service=True,
                         button_service=True,
                         led_service=True,
                         magnetometer_service=True,
                         pin_service=True,
                         temperature_service=True)

ubit.connect()

ubit.uart.on()
ubit.subscribe_uart(data_handler)

while True:
    pass

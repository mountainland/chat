import socketio

sio = socketio.Client()

@sio.on('connect')
def on_connect():
    print('Client Connected')

@sio.on('chat message')
def on_message(data):
    print('\nReceived Message: ', data)

@sio.on('disconnect')
def on_disconnect():
    print('Client Disconnected')

sio.connect('http://127.0.0.1:5000')



while True:
    sio.start_background_task(sio.emit('chat message', input('Input Message: ')))

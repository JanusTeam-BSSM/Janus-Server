import socketio

sio = socketio.Client()
sio.connect('http://localhost:3000')

sio.wait()
sio.emit('my message', {'foo': 'bar'})

@sio.event
def message(data):
    print('I received a message!')

@sio.on('my message')
def on_message(data):
    print('I received a message!')
    
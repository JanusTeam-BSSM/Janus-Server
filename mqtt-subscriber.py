import paho.mqtt.client as mqtt

command = ""

# subscriber callback
def on_message(client, userdata, message):
    print("message received ", str(message.payload.decode("utf-8")))
    command = str(message.payload.decode("utf-8"))
    print("message topic=", message.topic)
    print("message qos=", message.qos)
    print("message retain flag=", message.retain)
    print(command)
    if command == '1':
        print("do")
    elif command == "2":
        print("stop")

try :
    broker_address = "localhost"
    client1 = mqtt.Client("client1") 
    client1.connect(broker_address)
    client1.subscribe("hello") 
    client1.on_message = on_message
    client1.loop_forever()

except KeyboardInterrupt:
    pass
except Exception:
    print("Error!")
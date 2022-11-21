import paho.mqtt.client as mqtt

try :
    mqttc = mqtt.Client("client2")
    mqttc.connect("127.0.0.1", 1883)
    while(1):
        message = input("보낼 메시지를 입력해주쇼 ㅡㅡ : ")
        mqttc.publish("hello", message)
        print("보냈슈")
except KeyboardInterrupt:
    pass

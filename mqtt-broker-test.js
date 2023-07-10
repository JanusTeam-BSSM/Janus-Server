const aedes = require("aedes")();
const mqttBroker = require("net").createServer(aedes.handle);
const mqttPort = 2500; // 📌 127.0.0.1

function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

// arr[5][2]
var arr = create2DArray(10, 3);
var count = 0;

mqttBroker.on("connection", (_) => console.log(`CONNECT`));
aedes.on("subscribe", (topic, client) => {
  console.log(`- topic : ${topic[0].topic} / QoS : ${topic[0].qos}`);
  console.log(`- client.id : ${client.id}`);
});
aedes.on("publish", (packet, client) => {
  if (!client) return;
  var publishMessage = packet.payload.toString().split('"')[3];
  var publishMessageSplit = publishMessage.split('-');
  console.log(
    `🔗 publish : ${publishMessage} - ${new Date().toISOString()}`
  );

  arr[count] = [publishMessageSplit[0], publishMessageSplit[1], publishMessageSplit[2]];
  console.log(arr[count], count);
  count++;
});
mqttBroker.listen(mqttPort, (_) =>
  console.log("MQTT broker listening", mqttPort)
);

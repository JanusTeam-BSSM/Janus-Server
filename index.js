const e = require('express')
var mqtt = require('mqtt')
var client  = mqtt.connect('http://127.0.0.1:1883')
let location = ""
let currentLoc = ""
let status = "" 

client.on('connect', function () {
  while(status != 'receive') {
    client.subscribe('app/loc', function (err) {
      if(!err) {
      }
    })
  }
  client.publish('robot/loc',location);
  while(status != 'done!') {
    client.subscribe('robot/currentLoc', function(err) {
      if(!err) {
        console.log("location change");
      }
    });
  }
  client.publish('app/loc', "done!")
  client.end()
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  if(topic.endsWith(":")) {
    location = message.toString()
    status = "receive"
  } else if(topic.endsWith("^")) {
    currentLoc = message.toString()
  } else if(topic.endsWith("!")) {
    status = message.toString()
  }
})
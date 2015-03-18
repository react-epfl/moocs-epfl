//modules
var WebSocketServer = require('ws').Server;
var jf = require('jsonfile');
var moment = require('moment');
var util = require('util');


//javascript files
//var bbbPWM = require("./bbb-pwm");

//metadata files
//var json_getClients = "../metadata/getClients.json";
//var json_getSensorMetadata = "../metadata/getSensorMetadata.json";
//var json_getSensorData = "../metadata/getSensorData.json";
//var json_getActuatorMetadata = "../metadata/getActuatorMetadata.json";
//var json_sendActuatorData = "../metadata/sendActuatorData.json";

// Instantiate WebSocket server for Lab
var wss = new WebSocketServer({
    port: 8081
});

// Instantiate bbbPWM object to control PWM device.  Pass in device path
// and the period to the constructor.
//var pwm = new bbbPWM('/sys/devices/ocp.2/pwm_test_P8_13.10/', 5000000);

// Handle connections
wss.on('connection', function(ws) {

    // Send message to client that connection has been made
    ws.send('Lab Connected!!!');

    // Handle incoming messages
    ws.on('message', function(message) {

        if (message == 'loadData') {
            setInterval(function () {
                var x = (new Date()).getTime();
                var y_1 = Math.random();
                var y_2 = Math.random();
                var data_array = [x, y_1, y_2];
                var json_data = '{\"data\":[' + data_array + ']}';
                console.log(json_data);
                ws.send(json_data);
            }, 1000);
        }
    });

     // When connection closes.
    ws.on('close', function() {
        console.log('stopping client interval');
    });

});
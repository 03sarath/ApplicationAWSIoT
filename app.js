var awsIot = require('aws-iot-device-sdk');

/*
var device=awsIot.device({
    keyPath:'5a26619c73-private.pem.key',
    certPath:'5a26619c73-certificate.pem.crt',
    caPath:'rootCA.pem',
    clientId:'MyBus',
    region:'ap-southeast-1'



});
*/
var device = awsIot.device({
    keyPath:'25b87cded1-private.pem.key' ,
    certPath: '25b87cded1-certificate.pem.crt',
    caPath: 'rootCA.pem',
    clientId:'AI-IoT',
    host:'adaexyrkpjo5d.iot.ap-southeast-1.amazonaws.com'
});

var contents ="Started.....!!!!";

device
    .on('connect',function () {

        console.log('connect');
        //device.subscribe(busPolicy);
        device.publish('$aws/things/AI-IoT/shadow/update',JSON.stringify({"state":{"reported":{"test_value1":299, "test_value2":299,"test_value3":96}}}));
        console.log('Message Sent...');

    });

device
    .on('message',function (topic,payload) {
        console.log('message',topic,payload.toString());

    });
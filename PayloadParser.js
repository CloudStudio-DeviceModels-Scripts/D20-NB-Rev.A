// Main function to parse the payload
function parseUplink(device, payload) {
    var jsonString = payload.asString();

    // Extract the substring containing the JSON object
    var startIndex = jsonString.indexOf('{');
    var endIndex = jsonString.lastIndexOf('}');
    var extractedJsonString = jsonString.substring(startIndex, endIndex + 1);

    // Log the extracted JSON substring
    env.log("Extracted JSON substring:", extractedJsonString);

    // Replace the numeric values without quotes
    var modifiedJsonString = extractedJsonString.replace(/:\s*(-?\d+(\.\d+)?)(?=[,}])/g, ':"$1"');

    // Parse the modified JSON string
    var Dragino = JSON.parse(modifiedJsonString);

    // Log the parsed JSON object
    env.log(Dragino);

    // Store battery
    if (Dragino.battery != null) {
        var sensor1 = device.endpoints.byAddress("2");

        if (sensor1 != null)
            sensor1.updateVoltageSensorStatus(Dragino.battery);
             device.updateDeviceBattery({ voltage: Dragino.battery });
    };

    // Store CO2
    if (Dragino.temperature1 != null) {
        var sensor2 = device.endpoints.byAddress("1");

        if (sensor2 != null)
            sensor2.updateTemperatureSensorStatus(Dragino.temperature1);
    };
}


/*    // Store Temperature
    if (decoded.temperature != null) {
        var sensor1 = device.endpoints.byAddress("1");

        if (sensor1 != null)
            sensor1.updateTemperatureSensorStatus(decoded.temperature);
    };

    // Store Humidity
    if (decoded.humidity != null) {
        var sensor2 = device.endpoints.byAddress("2");

        if (sensor2 != null)
            sensor2.updateHumiditySensorStatus(decoded.humidity);
    };
}*/


function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}
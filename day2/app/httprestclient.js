var Client = require('node-rest-client').Client;
 
var client = new Client();
client.get("https://www.uber.com/en-NG", function (data, response) { 
    console.log(data);
    console.log(response);
});

client.registerMethod("jsonMethod", "https://www.uber.com/en-NG", "GET");
 
client.methods.jsonMethod(function (data, response) { 
    console.log(data);
    console.log(response);
});
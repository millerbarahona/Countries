const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const crypto = require("crypto");
const generarId = () => crypto.randomBytes(16).toString("hex");

exports.handler = async (event) => {

  try {
    let form = event.body;
    let params = {
      TableName: 'countries',
      Item: {
        countries_id: generarId(),
        name: form.name,
        country: form.country
      }
    };

    const data = await documentClient.put(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        text: 'Hecho!!'
      })
    };
    return response;
  } catch (e) {
    console.log(e)
    const response = {
      statusCode: 400,
      body: JSON.stringify('Ha ocurrido un erorr!!'),
    };
    return response;
  }

};
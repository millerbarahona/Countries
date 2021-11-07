export const sendData = async (data) => {
  const dataToSend = {
    "body": {
      "name": data.name,
      "country": data.country
    }
  }

  const send = {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(dataToSend)
  }

  const url = 'https://p0gc83ant5.execute-api.us-east-2.amazonaws.com/PDN/country';
  return fetch(url, send)
    
}
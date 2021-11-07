export const sendData = async (data) => {
  const dataToSend = {
    "body": {
      "name": `${data.name}`,
      "country": `${data.country}`
    }
  }

  const url = 'https://p0gc83ant5.execute-api.us-east-2.amazonaws.com/PDN/country';
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(dataToSend)
  })

  console.log(response)
}
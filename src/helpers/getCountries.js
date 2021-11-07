const fromApiResponseToCountries = apiResponse => {
  const data = apiResponse;
  if (Array.isArray(data)) {
    const countries = data.map(country => {
      const {name} = country;
      return {name}
    })
    return countries
  }
}

export const getCountries = () => {
  const apiUrl = "https://restcountries.com/v2/all";

  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToCountries)
}
import React, { useState, useEffect } from 'react';
import { getCountries } from "../helpers/getCountries"

export const Select = ({ name, register }, ref) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getCountries().then((resp) => {
      setCountries(resp);
      setLoading(false)
    });
  }, []);

  return (
    <select {...register(name)} defaultValue="" >
      <option hidden value="">Selecciona un pais</option>
      {
        !loading &&

        countries.map((country, index) => (
          <option key={index}>{country.name}</option>
        ))
      }
    </select>
  )
}

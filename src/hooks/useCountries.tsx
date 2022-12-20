import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => response.json())
      .then((actualData) => {
        actualData.map((country) => {
          console.log(country);
          //return setCountryList([...countryList, country.name.common]);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return countryList;
};

import React from "react";
import { useCountries } from "../../hooks/useCountries";

const CountryList: React.FC<Props> = () => {
  const countriesData = useCountries();
  console.log(countriesData);
  if (countriesData) {
    return <div className="CountryList"></div>;
  }

  return (
    <div className="CountryList">
      <h1>No List</h1>
    </div>
  );
};

export default CountryList;

/*
import { useState, useEffect } from "react";

export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
   .then((response) => console.log(response));
 }, []);

 return <div className="App">App</div>;
}

*/

import { useEffect, useState } from "react";

const Clase0301 = () => {
  const [countries, setCountries] = useState([]);
  const getData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };
  useEffect(() => {
    getData();
  }, []);

  window.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;
    if (x>1638&&y===0) {
        alert("no me mates")
    }
    console.log("Element Coordinates: X=" + x + ", Y=" + y);
  });

  return (
    <div>
      {countries.map((country, index) => {
        let dinamicKey = country?.currencies
          ? Object.keys(country?.currencies)[0]
          : null;
        let dinamicCurrency = dinamicKey
          ? country.currencies[dinamicKey].name
          : "";
        let dinamicLanguageKey = country?.languages
          ? Object.keys(country?.languages)[0]
          : null;
        let dinamicLanguage = dinamicLanguageKey
          ? country.languages[dinamicLanguageKey]
          : "";
        return (
          <div key={index} className="">
            <li>{country.name.common}</li>
            <li>{dinamicCurrency}</li>
            <li>Language:{dinamicLanguage}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Clase0301;

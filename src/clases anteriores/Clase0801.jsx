import React, { useEffect, useState } from "react";

const Clase0801 = () => {
  const [failedLetters, setFailedLetters] = useState([]);
  const [nameConGuiones, setNameConGuiones] = useState(null);
  const name = "HOVHANESS";
  const abecedario_mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const checkLetter = (inputedLetter) => {
    let originalIndex = name.split("").findIndex((letter) => letter === inputedLetter);
    console.log(inputedLetter, "esto esinputed letter");
    if (originalIndex < 0) {
      setFailedLetters([...failedLetters, inputedLetter]);
    } else {
      setNameConGuiones(
        nameConGuiones
          .split("")
          .map((letter, index) => {
            if (index === originalIndex) {
              letter = inputedLetter;
              return letter;
            }
            return letter;
          })
          .join(""),
      );
    }
  };

  const disableButton = (letter) => {
    failedLetters.includes(letter)
  }

  useEffect(() => {
    setNameConGuiones(
      name
        .split("")
        .map((letter) => "-")
        .join(""),
    );
  }, []);

  //PARA COMPLETAR AHORCADO DE TAREA
  /* const name = "HOVHANNES"

let dot = name.split('').fill('-').join('')
console.log(dot)

const letraBuscar = "E"

const result = name.split('').reduce((acc,curr,index)=>{
  if(letraBuscar===curr) {
    acc.push(index)
    return acc
  }
  return acc
},[])

result.forEach((indice)=>{
  const otroResultado = dot.split('').map((letter,index)=>{
    if(indice===index){
      return letraBuscar
    }
    return letter
  })
  dot = otroResultado.join('')
})

console.log(dot,"esto es dot")
 */
  return (
    <div>
      <h1>Ahorcado</h1>
      <h4
        style={{
          letterSpacing: 20,
        }}
        className=""
      >
        {nameConGuiones}
      </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "800px",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {abecedario_mayusculas.map((letra) => (
          <button
            key={letra}
            style={{
              border: "1px solid",
            }}
            onClick={() => checkLetter(letra)}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Clase0801;

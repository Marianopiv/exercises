//Esto me pasa Jova
//
let dataTarea = [
  "Banana",
  "Manzana",
  "Frutilla",
  "Banana",
  "Arandanos",
  "Frutilla",
  "Manzana",
  "Limon",
];

// eslint-disable-next-line no-unused-vars
let data3 = [
  {
    ba: "ananab",
    length: 6,
    withoutVowels: 3,
    wordWithoutVowels: "nnb",
  },
];

//Tengo que sacar el length de toda la palabra OK
//Tengo que mostrar la palabra sin vocales. OK
//Tengo que sacar el length de la palabra sin vocales.Ok
//Tengo que sacar las primeras dos letras de la palabra.Ok
//Tengo qeu revertir palabra Ok
//Problema grande: hacer el array data 3.

const vowels = ["a", "e", "i", "o", "u"];

const giveMeLength = (str) => str.length;
const giveMeArray = (str) => [...str];
const wordWithoutVowels = (arr) => arr.filter((letter) => !vowels.includes(letter.toLowerCase())).join("");
const giveMeFirstTwoLetters = (str) => str[0].toLowerCase() + str[1].toLowerCase();
const revertWord = (str) => [...str].reverse().join("").toLowerCase();
const giveMeWithoutVowels = (str) => {
  const lettersArray = giveMeArray(str);
  const resultWithoutVowels = wordWithoutVowels(lettersArray).toLowerCase();
  return revertWord(resultWithoutVowels);
};

const giveTransformedObject = (arr) => {
  return arr.map((item) => {
    return {
      [giveMeFirstTwoLetters(item)]: revertWord(item),
      length:giveMeLength(item),
      withoutVowels:giveMeWithoutVowels(item).length,
      wordWithoutVowels:giveMeWithoutVowels(item)
    };
  });
};

const prueba = giveTransformedObject(dataTarea);

console.log(prueba);

const mezclados = [
  { id: 1, parentId: 3 },
  { id: 2, parentId: 3 },
  { id: 2, parentId: 2 },
  { id: 2, parentId: 2 },
  { id: 2, parentId: 2 },
  { id: 2, parentId: 5 },
  { id: 3, parentId: 1 },
];

const findParentIds = (mezclados) => {
  let recolectados = [];
  mezclados.map((item) => {
    if (!recolectados.includes(item.parentId)) {
      recolectados.push(item.parentId);
    }
    return item;
  });

  const final = recolectados
    .map((item) => {
      let cantidad = mezclados.filter(
        (campo) => campo.parentId === item
      ).length;
      item = { parentId: item, cantidad };
      return item;
    })
    .sort((a, b) => b.cantidad - a.cantidad)[0];
  console.log(final);
  return final;
};

findParentIds(mezclados);
const players = [
  {
    id: 1,
    nombre: "Juan Pérez",
    club: "FC Barcelona",
    edad: 28,
  },
  {
    id: 2,
    nombre: "Luis Rodríguez",
    club: "Real Madrid",
    edad: 25,
  },
  {
    id: 3,
    nombre: "Martina González",
    club: "Paris Saint-Germain",
    edad: 23,
  },
  {
    id: 4,
    nombre: "Diego Silva",
    club: "Manchester United",
    edad: 30,
  },
  {
    id: 5,
    nombre: "Ana Torres",
    club: "Bayern Munich",
    edad: 27,
  },
];

const devolverNombres = (players, campo) => {
  return players.map((item) => {
    let newItem = {};
    // eslint-disable-next-line array-callback-return
    campo.map((key) => {
      if (item[key]) {
        newItem = { ...newItem, [key]: item[key] };
        return newItem;
      }
    });
    console.log(newItem);
    item = newItem;
    return item;
  });
};
console.log(devolverNombres(players, ["club", "nombre", "jova", "id"]));
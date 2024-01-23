import "./App.css";

function Clase1411() {
  //Ejemplo currying, para explicar closure
  const printDisplayName = (name) => {
    console.log(name);
  };
  const printName = (fn) => {
    const name = "jova";
    fn(name);
  };
  printName(printDisplayName);

  /*  let a = 2;
  const sumaTotal = (fx,num) => {
    fx(num)
  };
  const sumParcial = (a) => {
    a = a + 1;
    console.log(a);
  };

  sumaTotal(sumParcial,a); */

  const curriedSuma = (a) => {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  };

  const curriedSuma2 = (a) => (b) => (c) => a + b + c;

  const result = curriedSuma(1)(2)(3);

  console.log(result);

  const result2 = curriedSuma2(1)(2)(3);
  console.log(result2);

  //Tengo un array de animales ["perro","gato","loro"], desarrollar una funcion qeu sea currying o closure, y por un lado pase el array, por otro pase el parametro, y por otro me de un resultado sin ese animal-------------------

  const curriedAnimales = (arr) => (animal) =>
    arr.filter((anim) => anim !== animal);

  const resultCurriedAnim = curriedAnimales(["perro", "gato", "loro"])("loro");

  console.log(resultCurriedAnim);

  //EN vez de quitarlo, tiene que dejar solamente ese animal y adicionalmente que deje la letra segun la posicion que pase por parametro

  /*  const removeAnimals = (arr) => (animal) => (pos) => {
     const result = arr.find((anim)=>anim===animal)
     if (result) {
      return animal[pos]
     }
     return "no existe este animal"
  }

  const removeAnimals2 = (arr,animal,pos) {

  } */

  /*   console.log(removeAnimals(["perro","gato","loro"])("loro")(2))
   */

  const filterArray = (arr) => printFirst => {
    const slicedArr = arr.slice(0,1)
    return printFirst(slicedArr)
  };

  const printFirst = (name) => {
    return name[0]
  } 

  const res = filterArray(["a","b","c"])(printFirst)

  console.log(res)

  //bubbling,como detenerlo con stop propagation:
  return (
    <>
      <div onClick={() => console.log("soy abuelo")}>
        <div onClick={() => console.log("este es el papa")} className="">
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("soy hijo");
            }}
          >
            clickeame para ver bubbling
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Clase1411;

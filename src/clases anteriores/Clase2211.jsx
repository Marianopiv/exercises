import { useState } from "react";
import "../index.css";

function Clase2211() {
  const [filteredValue, setFilteredValue] = useState({});
  const [filteredArray, setFilteredArray] = useState([]);

  const handleFiltered = (e) => {
    const { name, value } = e.target;
    setFilteredValue({ ...filteredValue, [name]: value });
    console.log(filteredValue);
  };

  const data = [
    {
      nombre: "Elena",
      apellido: "García",
      edad: 32,
      telefono: [5544332211],
      email: "elena.garcia@example.com",
    },
    {
      nombre: "Elena",
      apellido: "García",
      edad: 32,
      telefono: [1122334455],
      email: "elena.garcia@example.com",
    },
    {
      nombre: "Elena",
      apellido: "García",
      edad: 32,
      telefono: [1144556677],
      email: "elena.garcia@example.com",
    },
    {
      nombre: "Alejandro",
      apellido: "Martínez",
      edad: 25,
      telefono: 6677889900,
      email: "alejandro.martinez@example.com",
    },
    {
      nombre: "Isabel",
      apellido: "López",
      edad: 40,
      telefono: 1122334455,
      email: "isabel.lopez@example.com",
    },
    {
      nombre: "Diego",
      apellido: "Fernández",
      edad: 28,
      telefono: 9988776655,
      email: "diego.fernandez@example.com",
    },
    {
      nombre: "Marina",
      apellido: "González",
      edad: 36,
      telefono: 3344556677,
      email: "marina.gonzalez@example.com",
    },
    {
      nombre: "Javier",
      apellido: "Ramírez",
      edad: 45,
      telefono: 7788990011,
      email: "javier.ramirez@example.com",
    },
    {
      nombre: "Laura",
      apellido: "Hernández",
      edad: 29,
      telefono: 1122334455,
      email: "laura.hernandez@example.com",
    },
    {
      nombre: "Carlos",
      apellido: "Sánchez",
      edad: 33,
      telefono: 5566778899,
      email: "carlos.sanchez@example.com",
    },
    {
      nombre: "Sofía",
      apellido: "Pérez",
      edad: 27,
      telefono: 9900112233,
      email: "sofia.perez@example.com",
    },
    {
      nombre: "Andrés",
      apellido: "Díaz",
      edad: 38,
      telefono: 1122334455,
      email: "andres.diaz@example.com",
    },
  ].map((item, index) => ({ id: `#${index}1`, ...item }));
  const search = () => {
    setFilteredArray(
      data.filter((obj) => {
        const { header, searched } = filteredValue;
        //Yo estaba haciendolo asi, el problema es que esta buscanod literalmente obj.header javascript, 
        //no esta entendiendo que es un valor dinamico al acceder al punto, por lo uqe accediendo con corchetes, ahi funciona
        /* console.log(obj.header, "esto da el obj.filteredValue.header");
        return obj.filteredValue.header === filteredValue.searched; */
        return obj[header].toString() === searched;
      })
    );
  };
  const headContent = ["id", "nombre", "apellido", "edad", "telefono", "email"];
  return (
    <div className="App">
      <table style={{ width: "700px" }}>
        <thead>
          <tr>
            <td colSpan={6}>Test Practice</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <select name="header" onChange={handleFiltered}>
                {headContent.map((title, index) => (
                  <option key={index}>{title}</option>
                ))}
              </select>
            </td>
            <td colSpan={2}>
              <input name="searched" onChange={handleFiltered} />
            </td>
            <td colSpan={2}>
              <button onClick={search}>Buscar</button>
            </td>
          </tr>
          <tr>
            {headContent.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {(filteredArray.length > 0 ? filteredArray : data).map(
            (col, index) => (
              <tr key={index}>
                {Object.values(col).map((text, index) => (
                  <td key={index}>{text}</td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Clase2211;

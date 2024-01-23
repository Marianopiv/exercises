import { useState } from "react";
import "./App.css";
import Clase1312 from "./clases anteriores/Clase1312";
import Clase0801 from "./clases anteriores/Clase0801";

function App() {
  const evils = [
    { name: "Orcs", life: 1 },
    { name: "Men", life: 2 },
    { name: "UrukHai", life: 3 },
    { name: "Trolls", life: 5 },
    { name: "Wizards", life: 10 },
  ];
  const heroes = [
    { name: "Men", life: 2 },
    { name: "Elves", life: 3 },
    { name: "Dwarves", life: 3 },
    { name: "Eagles", life: 4 },
    { name: "Wizards", life: 10 },
  ];
  const [selected, setSelected] = useState([]);
  const [pc, setPc] = useState([]);

  return (
    <>
      <Clase0801/>
    </>
  );
}

export default App;

import { useEffect } from "react";

const Clase1312 = ({ pc, selected, setPc, setSelected, heroes, evils }) => {
  const handleSelect = (side) => {
    setSelected(side);
  };

  useEffect(() => {
    if (selected[0]?.name === "Orcs") {
      setPc(heroes);
    } else {
      setPc(evils)
    }
  }, [selected]);

  return (
    <div>
      <h1>Elegi tu lado</h1>
      <button onClick={() => handleSelect(heroes)}>Heroes</button>
      <button onClick={() => handleSelect(evils)}>Villanos</button>
      <h3>Usuario:</h3>
      {selected.length > 0 &&
        selected.map((item, index) => (
          <button>{`${item.name} ${item.life}`}</button>
        ))}
      <h3>Rival:</h3>
      {pc.length > 0 &&
        pc.map((item) => <button>{`${item.name} ${item.life}`}</button>)}
    </div>
  );
};

export default Clase1312;

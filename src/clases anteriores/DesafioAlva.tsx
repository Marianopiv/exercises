import { useState } from "react";
import Select from "./Select.jsx";
import { SelectFieldType } from "../interface.js";

const DesafioAlva = () => {
  const [option, setOption] = useState<string>("");

  const options:SelectFieldType[] = [
    { label: "qWe", value: "value1", disabled: false },
    { label: "Option 2", value: "value2" },
    { label: "Option 3", value: "value3", disabled: true },
    { label: "we", value: "value4" },
    { label: "zxc", value: "value5" },
    { label: "qwe zxc", value: "value6" },
    { label: "Option 7", value: "value7", disabled: true },
  ];
  return (
    <Select
      label="Label"
      helpMessage="help message"
      value={option}
      onChange={setOption}
      options={options}
    />
  );
};

export default DesafioAlva;

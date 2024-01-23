import React from 'react'
import { SelectFieldType } from '../interface';

type Props = {
  onChange:()=>"",
  label:string,
  value:string,
  options:SelectFieldType[]
}

const Select = ({ label, helpMessage, value, onChange, options }) => {

  const handleChange = (e) => {
    onChange(e.target.value)
    console.log(value)
  }
  return (
    <>
      <p>{label}</p>
      <select onChange={handleChange} >
        <option value="">PlaceHolder</option>
        {options.map((option:SelectFieldType, index:Number) => (
          <>
            <option disabled={option.disabled} value={option.value} key={index}>
              {option.label}
            </option>
          </>
        ))}
        {helpMessage}
      </select>
    </>
  );
};

export default Select;
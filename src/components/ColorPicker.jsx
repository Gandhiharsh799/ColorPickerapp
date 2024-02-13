import React from 'react'

export default function ColorPicker({onColorChange}) {

    const COLORS = [
      "red",
      "green",
      "blue",
      "yellow",
      "pink",
      "purple",
      "black",
    ];
    const handleColorChange = (event)=>{
        const selectedColor = event.target.value;
        onColorChange(selectedColor)

    }
  return (
    

    <div>
        <label htmlFor='colorPicker'>Pick a colour you want to see: </label>
        <select id="colorPicker" onChange={handleColorChange}>
            {COLORS.map((color,index)=>(
                <option value={color} key={index}>{color}</option>)
            )}
        </select>
    </div>
  )
}

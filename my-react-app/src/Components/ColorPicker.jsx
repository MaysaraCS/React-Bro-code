import React,{useState} from 'react'

const ColorPicker = () => {
    const [color, setColor] =  useState("#FFFFFF");
    function handleColorChange(event){
        setColor(event.target.value);
    }
  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-disply' style={{backgroundColor: color}}>
            <p>Select Color: {color}</p>
        </div>
        <label>Select A Color:</label>
        <input type="color" value={color} name="" id="" onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker
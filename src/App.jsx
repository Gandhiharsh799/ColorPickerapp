import { useState } from 'react';
import './App.css'
import ColorPicker from './components/ColorPicker'
import DisplayColor from './components/DisplayColor'

function App() {

  const [selectColor, setSelectedColor] = useState('')

  const handleColorChange = (color) =>{
    setSelectedColor(color)
  }
  
  return (
    <div>
      <h1>Color Picker App</h1>
      <ColorPicker onColorChange={handleColorChange}/>
      <DisplayColor selectColor={selectColor}/>
    </div>
  )
}

export default App

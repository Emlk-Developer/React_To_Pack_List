import { useState } from "react";

export default function Form({ onAddItems}) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    function handleSubmit(e) {
      e.preventDefault();

      if (!description) return;
      const pluralDescription = checkPlural(description, quantity)
      const newItem = {id: Date.now(), pluralDescription, quantity, packed: false}
      
      onAddItems(newItem)
      setDescription('')
      setQuantity(1)
    }

    function checkPlural(description, quantity) {
      if (description.slice(-1) === 's') return description;
      const newDescription = quantity > 1 ? description.concat('s') : description;
      return newDescription;
    }

    return (
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What Do You Need For Your Trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({length:20}, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
        <input 
          type='text'  
          placeholder='Item...' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    )
  }
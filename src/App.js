
import { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Form from './Form'; 
import PackingList from './PackingList';


function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
      setItems((items) => items.includes(item) === true ?  alert("already in list") : [...items, item])
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter(item => item.id !== id ))
  }

  function handleCheckedItems(id) {
    setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed } : item ))
  }

  function handleClearList() {
    //setItems((items) => items = [])
    setItems([])
  }

  function Stats({ items }) {
    const numItems = items.length
    const numPacked = items.filter(item => item.packed === true).length
    const percentage = Math.round(numPacked / numItems * 100)

    return (
      <footer className='stats'>
        {percentage === 100 ?  
          <em> you have everything</em>
          :
          <em> you have {numItems} items on your list, and you have already packed {numPacked} ({percentage}%)</em>  
      }
        
      </footer>
    )
  }
  return (
    <div className="App app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItems} 
        onCheckedItem={handleCheckedItems}
        onClearList = {handleClearList} 
      />
      <Stats items={items}/>
    </div>
  );
}

export default App;

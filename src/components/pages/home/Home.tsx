import React, { useState } from 'react';
import Items from './models/Items';
import ListOfElement from '../../common/ListOfElement';

const Home = () => {
  const [inputText, setInputText] = useState<string>('');
  const [items, setItems] = useState<Items[]>([]);

  const handleAddItem = () => {
    if (inputText.trim() === '') return;

    const newItem: Items = {
      id: new Date().getTime(),
      text: inputText,
    };

    setItems([...items, newItem]);
    setInputText('');
  };

  const handleRemoveItem = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="content">
      <div>
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Escribe un nuevo elemento"
        />
        <button onClick={handleAddItem}>Añadir</button>
      </div>
      <div className='content-list'>
       <ListOfElement items={items} onRemoveItem={handleRemoveItem}></ListOfElement>
      </div>
    </div>
  );
};

export default Home;
import React from 'react'
import Items from '../pages/home/models/Items'
import EmptyState from './EmptySate';

interface ItemListProps {
    items: Items[];
    onRemoveItem: (id: number) => void;
  }


const ListOfElement:React.FC<ItemListProps> = ({ items, onRemoveItem })=> {

  return (
    <ul>
    {items.length > 0 ?
    items.map(item => (
      <li key={item.id} onClick={() => onRemoveItem(item.id)} title='Eliminar'>
        {item.text}
      </li>
    ))
    : 
      <EmptyState message={"La lista no contiene elementos"} ></EmptyState>
   
     }
  </ul>
  )
}

export default ListOfElement
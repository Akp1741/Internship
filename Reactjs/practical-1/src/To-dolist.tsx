import React, { useState } from 'react';
interface Item {
  id: number;
  name: string;
}

let nextId = 0;

export default function List(): JSX.Element {
  const [name, setName] = useState<string>('')
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (): void => {
    setItems((currentItems: Item[]) => [...currentItems, { id: nextId++, name }]);
    setName('');
  };

  const deleteItem = (id: number): void => {
    setItems((currentItems: Item[]) => currentItems.filter((item: Item) => item.id !== id));
  };

  return (
    <>
      <h1>Items:</h1>
      <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <button onClick={addItem}>Insert</button>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>
            {item.name} <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
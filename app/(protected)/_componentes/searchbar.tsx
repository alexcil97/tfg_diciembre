import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState<string[]>([]); // Define el tipo de list como string[]

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      {filteredList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

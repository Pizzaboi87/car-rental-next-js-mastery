'use client';

import { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
  const handleSearch = () => {};
  const [manufacturer, setManufacturer] = useState('');

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;

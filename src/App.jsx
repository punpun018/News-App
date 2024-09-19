import Navbar from './Components/Navbar';
import React, { useState, useEffect } from 'react';
import Newsboard from './Components/Newsboard';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchTerm = (e) => {
    setSearchTerm(e);
  }
  return (
    <div>
      <Navbar handleSearchTerm={handleSearchTerm} />
      <Newsboard searchTerm={searchTerm} />
    </div>
  );
};

export default App;
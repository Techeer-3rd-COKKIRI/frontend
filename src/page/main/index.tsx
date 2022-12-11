import Nav from '@/components/nav';
import React, { useEffect } from 'react';
import axios from 'axios';
const MainPage = () => {
  useEffect(() => {
    (async () => {
      const result = await axios.get('/todos');
      console.log(result.data);
    })();
  }, []);
  return (
    <div>
      <Nav />
    </div>
  );
};

export default MainPage;

import Nav from '@/components/nav';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import axios from 'axios';
const MainPage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get('/todos');
  //     console.log(result.data);
  //   })();
  // }, []);
  return (
    <div>
      <Nav />
      <Banner>
        //임시배너
        <img src="src\assets\image\메인배너.png"></img>
      </Banner>
    </div>
  );
};

const Banner = styled.div`
  display: flex;
  margin-left: 230px;
  & img {
    width: 95%;
    height: 36rem;
    margin: 20px;
  }
`;

export default MainPage;

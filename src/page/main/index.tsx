import Nav from '@/components/nav';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import axios from 'axios';
import StudyComponents from '@/components/mystudy';
const MainPage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get('/todos');
  //     console.log(result.data);
  //   })();
  // }, []);
  return (
    <StudyMain>
      <Nav />
      <Banner>
        {/* 임시배너 */}
        <img src="src\assets\image\메인배너.png"></img>
      </Banner>
      <MyStudy>진행중인 스터디</MyStudy>
      <StudyComponents />
    </StudyMain>
  );
};

const StudyMain = styled.div`
  margin-left: 200px;
  font-family: 'InriaSans';
`;

const Banner = styled.div`
  display: flex;
  margin-left: 30px;
  & img {
    width: 95%;
    height: 36rem;
    margin: 20px;
  }
`;

const MyStudy = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
  margin-left: 80px;
  margin-top: 50px;
`;

export default MainPage;

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
      <Studies>
        <StudyComponents />
        <StudyComponents />
        <StudyComponents />
        <StudyComponents />
      </Studies>
    </StudyMain>
  );
};

const StudyMain = styled.div`
  margin-left: 200px;
  font-family: 'InriaSans';
  @media screen and (max-width: 1440px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;

const Banner = styled.div`
  display: flex;
  & img {
    width: 135rem;
    height: 34rem;
    margin: 0 auto;
    margin-top: 15px;
  }
`;

const MyStudy = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
  margin: 100px 0px 60px 120px;
`;

const Studies = styled.div`
  margin: 0 auto;
  width: 60%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 5px;
`;

export default MainPage;

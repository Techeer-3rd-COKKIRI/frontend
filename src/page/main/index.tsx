import Nav from '@/components/nav';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import axios from 'axios';
import StudyComponents from '@/components/mystudy';
import StudyListComponent from '@/components/studyList';
import UserStudy from '@/components/userStudy';

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
      <MainView>
        <UserStudying>
          <h1>진행중인 스터디</h1>
          <UserStudyList>
            {/* 4개씩 계속 짤라서 화살표를 누르면 다음  */}
            {/* userpage를 선언후 userpage에 맞게 splice */}
            <UserStudy />
            <UserStudy />
            <UserStudy />
          </UserStudyList>
        </UserStudying>
        <AllStudyList>
          {/* 커스텀 훅 써보기  */}
          <StudySearch></StudySearch>
          <GridStudyList>
            <StudyListComponent></StudyListComponent>
            <StudyListComponent></StudyListComponent>
          </GridStudyList>
        </AllStudyList>
      </MainView>
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

const MainView = styled.div``;
const UserStudying = styled.div``;
const UserStudyList = styled.div``;
const AllStudyList = styled.div``;
const StudySearch = styled.input.attrs({
  tpye: 'text',
  placeholder: '스터디를 검색해보세요',
})``;
const GridStudyList = styled.div``;
export default MainPage;

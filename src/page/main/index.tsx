import Nav from '@/components/nav';
import styled from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';
import StudyListComponent from '@/components/studyList';
import UserStudy from '@/components/userStudy';
import search from '../../assets/image/search.png';
const MainPage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get('/todos');
  //     console.log(result.data);
  //   })();
  // }, []);
  const [inputValue, setInputValue] = useState<string>('');
  const changeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      console.log(inputValue);
    }
  };

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
            <UserStudy />
          </UserStudyList>
        </UserStudying>
        <AllStudyList>
          {/* 커스텀 훅 써보기  */}
          <SearchBox>
            <img src={search} />
            <StudySearch
              onKeyDown={onKeyDown}
              onChange={changeInput}
            ></StudySearch>
          </SearchBox>

          <GridStudyList>
            <StudyListComponent></StudyListComponent>
            <StudyListComponent></StudyListComponent>
            <StudyListComponent></StudyListComponent>
            <StudyListComponent></StudyListComponent>
            <StudyListComponent></StudyListComponent>
            <StudyListComponent></StudyListComponent>
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
const UserStudying = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  & > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.4rem;

    color: #000000;
  }
`;
const UserStudyList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const AllStudyList = styled.div``;
const SearchBox = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    position: relative;
    left: 4rem;
    top: 5.5rem;
    width: 3rem;
    height: 3rem;
    z-index: 9;
  }
`;
const StudySearch = styled.input.attrs({
  tpye: 'text',
  placeholder: '스터디를 검색해보세요',
})`
  display: inline-block;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  padding: 1rem 0rem;
  padding-left: 5.5rem;
  width: 40%;
  max-width: 500px;
  margin: 5rem 0;
  color: rgba(198, 198, 198, 1);
`;
const GridStudyList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
`;
export default MainPage;

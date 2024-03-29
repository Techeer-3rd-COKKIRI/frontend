import Nav from '@/components/nav';
import styled from 'styled-components';
import React, { useCallback, useState } from 'react';
import StudyListComponent from '@/components/studyList';
import UserStudy from '@/components/userStudy';
import search from '../../assets/image/search.png';
import { studyListType } from '@/type/studyList';
import NonStudy from '@/components/nonStudy';
import { useGetStudyList } from '@/hook/main/useGETStudyList';
import { useGetMyStudyList } from '@/hook/main/useGETMyStudyList';

const MainPage = () => {
  const [page, setPage] = useState<number>(0);
  const [myStudyPage, setMyStudyPage] = useState<number>(0);
  const [pageLength, setPageLenth] = useState<number[]>([0, 0, 0]);

  //localstorage가 있다면 그값을 전해줌 // 애는 객체이기때문에 parse가공을 해줘야한다. 현재는 Json형태이다.
  const checkUser = localStorage.getItem('user');

  let user;
  if (typeof checkUser === 'string') {
    user = JSON.parse(checkUser); // ok
  }

  const { data } = useGetStudyList(page);

  const { data: userData } = useGetMyStudyList(myStudyPage);

  const [inputValue, setInputValue] = useState<string>('');
  const changeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
    }
  };

  const pageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement; // 해결 방법 (1)
    // const target = e.currentTarget; // 해결방법 (2)

    setPage(Number(target.innerText) - 1); //3 ,4
  };

  return (
    <StudyMain>
      <Nav />
      <MainView>
        {user ? (
          <>
            <UserStudying>
              <h1>내 스터디</h1>
              <UserStudyList>
                {/* 4개씩 계속 짤라서 화살표를 누르면 다음  */}
                {userData?.length ? (
                  <>
                    {userData?.map((item: studyListType) => {
                      return <UserStudy key={item.id} {...item}></UserStudy>;
                    })}
                  </>
                ) : (
                  <NonStudy></NonStudy>
                )}
              </UserStudyList>
            </UserStudying>
          </>
        ) : null}
        <AllStudyList>
          {/* 검색창 */}
          <SearchBox>
            <img alt="검색" src={search} />
            <StudySearch
              onKeyDown={onKeyDown}
              onChange={changeInput}
            ></StudySearch>
          </SearchBox>

          {/* 스터디리스트  */}
          <GridStudyList>
            {data?.map((item: studyListType) => {
              return (
                <StudyListComponent
                  key={item.id}
                  {...item}
                ></StudyListComponent>
              );
            })}
          </GridStudyList>
          {/* 페이지  */}
          <Paging>
            {pageLength.map((_, index) => {
              return (
                <div
                  style={{
                    backgroundColor: page == index ? 'gray' : '',
                    color: page == index ? 'white' : '',
                  }}
                  key={index}
                  onClick={pageHandler}
                >
                  {index + 1}
                </div>
              );
            })}
          </Paging>
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
    margin-top: 5rem;
  }
`;

const MainView = styled.div``;
const UserStudying = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
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
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  gap: 1rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 1084px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Paging = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  opacity: 0.5;
  margin-bottom: 5rem;
  cursor: pointer;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 10px;
    font-weight: 700;
    font-size: 1.5rem;
    color: black;
  }
`;
export default MainPage;

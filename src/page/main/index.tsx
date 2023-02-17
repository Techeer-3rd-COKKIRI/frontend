import Nav from '@/components/nav';
import styled from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';
import StudyListComponent from '@/components/studyList';
import UserStudy from '@/components/userStudy';
import search from '../../assets/image/search.png';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
const MainPage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get('/todos');
  //     console.log(result.data);
  //   })();
  // }, []);
  const [page, setPage] = useState<number>(0);
  const [pageLength, setPageLenth] = useState<number[]>([0]);

  const { isLoading, isError, error, data } = useQuery(
    ['page', page],
    async () =>
      await restFetcher({
        method: 'GET',
        path: `/api/v1/studies/page/${page}`,
        params: { size: 20 },
      }),
    {
      select(data) {
        return data.data;
      },
      staleTime: 0, // staleTime을 2초로 설정하여 fetch된 데이터는 2초간 fresh 상태
      cacheTime: 0,
    },
  );

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

  const pageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement; // 해결 방법 (1)
    // const target = e.currentTarget; // 해결방법 (2)
    // let page = [];

    setPage(Number(target.innerText) - 1); //3 ,4
  };

  useEffect(() => {
    console.log(data);
    // let pageNumber = data.length / 20;
    // if (!Number.isInteger(pageNumber)) {
    //   pageNumber += 1;
    // }
    // let arr = [];
    // for (let i = 0; i <= pageNumber; i++) {
    //   arr.push(0);
    // }
    // setPageLenth(arr);
  }, [page]);

  return (
    <StudyMain>
      <Nav />
      <MainView>
        <UserStudying>
          <h1>내 스터디</h1>
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
            {data?.map((item: any) => {
              return (
                <StudyListComponent
                  key={item.id}
                  {...item}
                ></StudyListComponent>
              );
            })}
          </GridStudyList>
          <Paging>
            {pageLength.map((_, index) => {
              return (
                <div
                  style={{ backgroundColor: page == index ? 'gray' : '' }}
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
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  gap: 1rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 1084px) {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    gap: 0.5rem;
    transform: translateX(15px);
  }
  @media screen and (max-width: 400px) {
    transform: translateX(0px);
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
  }
`;
export default MainPage;

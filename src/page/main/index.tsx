import Nav from '@/components/nav';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudyComponents from '@/components/mystudy';
import StudyListComponent from '@/components/studyList';
import { useNavigate } from 'react-router-dom';

interface roomType {
  studyId: number;
  studyName: string;
}
const MainPage = () => {
  const navigator = useNavigate();
  const [studyRoomList, setStudyRoomList] = useState<roomType[]>([]);
  useEffect(() => {
    (async () => {
      const result = await axios('/api/v1/studies/page/0?size=2');
      setStudyRoomList(result.data.data);
    })();
  }, []);

  const inToRoom = (id: number) => {
    navigator(`/studyMain/${id}`);
  };
  return (
    <StudyMain>
      <Nav />
      <Banner>
        {/* 임시배너 */}
        <img src="src\assets\image\메인배너.png"></img>
      </Banner>
      <MyStudy>진행중인 스터디</MyStudy>
      <Studies>
        {/* 참여중인 컴포넌트 */}
        <StudyComponents />
      </Studies>
      <StudyList>
        {/* 스터디 리스트 */}
        {studyRoomList?.map((room) => {
          return (
            <div onClick={() => inToRoom(room.studyId)}>
              <StudyListComponent
                studyName={room.studyName}
              ></StudyListComponent>
            </div>
          );
        })}
      </StudyList>
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

const StudyList = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1000px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  margin-top: 120px;
`;
export default MainPage;

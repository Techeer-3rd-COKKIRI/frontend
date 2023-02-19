import CommentManagement from '@/components/commentManagement';
import Nav from '@/components/nav';
import ProfilePicture from '@/components/profilePicture';
import RecruitingBox from '@/components/recruitingBox';
import StudyIntroduce from '@/components/studyIntroduce';
import WeekButton from '@/components/weekButton';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StudyMain = () => {
  const { state } = useLocation();
  console.log(state);
  console.log(useLocation());

  const [weekNumber, setWeekNumber] = useState<number>(1);

  const changeWeekNumber = (week: number) => {
    setWeekNumber(week);
  };

  //profiles 스크롤 변수 저장
  const profilesRef = React.createRef<HTMLDivElement>();
  const [profileScroll, setProfileScroll] = useState(0);
  const [profileMaxWidth, setProfileMaxWidth] = useState(0);

  //weekButtons 스크롤변수 저장
  const weekButtonRef = React.createRef<HTMLDivElement>();
  const [weekButtonScroll, setWeekButtonScroll] = useState(0);
  const [weekButtonMaxWidth, setWeekButtonMaxWidth] = useState(0);

  useEffect(() => {
    if (profilesRef.current) {
      setProfileMaxWidth(
        //안보이는 스크롤 너비
        profilesRef.current.scrollWidth - profilesRef.current.clientWidth,
      );
    }

    if (weekButtonRef.current) {
      setWeekButtonMaxWidth(
        //안보이는 스크롤 너비
        weekButtonRef.current.scrollWidth - weekButtonRef.current.clientWidth,
      );
    }
  }, []);

  const profileScrollLeft = () => {
    //누를떄마다 114px씩 이동
    profilesRef.current?.scrollBy({
      left: -75,
      behavior: 'smooth',
    });

    //현재 스크롤위치가 75 미만이라면 처음으로 이동
    if (profileScroll < 75) {
      setProfileScroll(() => 0);
      profilesRef.current?.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      //아니라면 114px이동
      setProfileScroll((pre) => pre - 75);
    }
  };
  const profileScrollRight = () => {
    profilesRef.current?.scrollBy({
      left: 75,
      behavior: 'smooth',
    });

    //눌렀을때 보이지않는 스크롤너비를 초과했다면 맨오른쪽으로 이동
    if (profileScroll + 75 > profileMaxWidth) {
      setProfileScroll(() => profileMaxWidth);
      profilesRef.current?.scrollTo({
        left: profilesRef.current?.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      setProfileScroll((pre) => pre + 75);
    }
  };

  const weekScrollLeft = () => {
    //누를떄마다 114px씩 이동
    weekButtonRef.current?.scrollBy({
      left: -75,
      behavior: 'smooth',
    });

    //현재 스크롤위치가 75 미만이라면 처음으로 이동
    if (weekButtonScroll < 75) {
      setWeekButtonScroll(() => 0);
      weekButtonRef.current?.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      //아니라면 114px이동
      setWeekButtonScroll((pre) => pre - 75);
    }
  };
  const weekScrollRight = () => {
    weekButtonRef.current?.scrollBy({
      left: 75,
      behavior: 'smooth',
    });

    //눌렀을때 보이지않는 스크롤너비를 초과했다면 맨오른쪽으로 이동
    if (weekButtonScroll + 75 > weekButtonMaxWidth) {
      setWeekButtonScroll(() => weekButtonMaxWidth);
      weekButtonRef.current?.scrollTo({
        left: weekButtonRef.current?.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      setWeekButtonScroll((pre) => pre + 75);
    }
  };

  return (
    <StudyMainPage>
      <Nav />

      <StudyRoom>
        <Title>Study Main</Title>
        {/* 유저별 프로필*/}
        <ProfileBox>
          {profileScroll != 0 ? (
            <ProfileDirection onClick={profileScrollLeft}>
              <img src="src\assets\image\leftProfile.png" />
            </ProfileDirection>
          ) : null}
          <Profiles ref={profilesRef}>
            {[1, 2, 3].map((user, i) => {
              return <ProfilePicture key={i} people={i + 1} />;
            })}
          </Profiles>
          {profileScroll < profileMaxWidth ? (
            <ProfileDirection onClick={profileScrollRight}>
              <img src="src\assets\image\rightProfile.png" />
            </ProfileDirection>
          ) : null}
        </ProfileBox>
        {/* 스터디 소개하는 컴포넌트*/}
        <StudyIntroduce {...state} />
        <RecruitingBox />
        {/* 주차별 버튼*/}
        {/* <WeekBox>
          {weekButtonScroll != 0 ? (
            <WeekDirection onClick={weekScrollLeft}>
              <img src="src\assets\image\leftProfile.png" />
            </WeekDirection>
          ) : null}
          <WeekButtons ref={weekButtonRef}>
            {[1, 2, 3].map((_, i) => {
              return (
                <div onClick={() => changeWeekNumber(i + 1)}>
                  <WeekButton weekNumber={weekNumber} figure={i + 1} />;
                </div>
              );
            })}
          </WeekButtons>
          {weekButtonScroll < weekButtonMaxWidth ? (
            <WeekDirection onClick={weekScrollRight}>
              <img src="src\assets\image\rightProfile.png" />
            </WeekDirection>
          ) : null}
        </WeekBox> */}
        {/* 댓글 달수있는 컴포넌트*/}
        {/* <CommentManagement {...state} weekNumber={weekNumber} /> */}
      </StudyRoom>
    </StudyMainPage>
  );
};
export default StudyMain;

const StudyMainPage = styled.div`
  margin-left: 200px;
  @media screen and (max-width: 1440px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;

const StudyRoom = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1440px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 5rem;
  margin: 2.5rem 0;
  margin-left: 2.3rem;
  color: #000000;
`;

const ProfileBox = styled.div`
  display: flex;
  background-color: #e9edf7;
  border-radius: 1.7rem;
  justify-content: space-between;
  max-width: 1100px;
`;

const Profiles = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  overflow-x: hidden;
`;

const ProfileDirection = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 3.5rem;

  & img {
    width: 10px;
    height: 20px;
  }
`;

const WeekBox = styled(ProfileBox)``;
const WeekButtons = styled(Profiles)``;
const WeekDirection = styled(ProfileDirection)``;

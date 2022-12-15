import CommentManagement from '@/components/commentManagement';
import Nav from '@/components/nav';
import ProfilePicture from '@/components/profilePicture';
import StudyIntroduce from '@/components/studyIntroduce';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StudyMainPage = styled.div`
  margin-left: 200px;
  @media screen and (max-width: 1440px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;

const StudyRoom = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 6rem;
  margin: 2.7rem 0;
  margin-left: 2.5rem;
  color: #000000;
`;

const ProfileBox = styled.div`
  display: flex;
  background-color: #e9edf7;
  border-radius: 2rem;
  justify-content: space-between;
  max-width: 1000px;
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
const StudyMain = () => {
  const profilesRef = React.createRef<any>();
  const [profileScroll, setProfileScroll] = useState(0);
  const [profileMaxWidth, setProfileMaxWidth] = useState(0);

  useEffect(() => {
    setProfileMaxWidth(
      //안보이는 스크롤 너비
      profilesRef.current.scrollWidth - profilesRef.current.clientWidth,
    );
  }, []);

  const scrollLeft = () => {
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
  const scrollRight = () => {
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

  return (
    <StudyMainPage>
      <Nav />
      <StudyRoom>
        <Title>Study Main</Title>
        <ProfileBox>
          {profileScroll != 0 ? (
            <ProfileDirection onClick={scrollLeft}>
              <img src="src\assets\image\leftProfile.png" />
            </ProfileDirection>
          ) : null}
          <Profiles ref={profilesRef}>
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
            <ProfilePicture />
          </Profiles>
          {profileScroll < profileMaxWidth ? (
            <ProfileDirection onClick={scrollRight}>
              <img src="src\assets\image\rightProfile.png" />
            </ProfileDirection>
          ) : null}
        </ProfileBox>
        <StudyIntroduce />
        <CommentManagement />
      </StudyRoom>
    </StudyMainPage>
  );
};
export default StudyMain;

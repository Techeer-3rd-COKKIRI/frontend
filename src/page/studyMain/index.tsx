import Nav from '@/components/nav';
import ProfilePicture from '@/components/profilePicture';
import StudyIntroduce from '@/components/studyIntroduce';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StudyMainPage = styled.div`
  margin-left: 200px;

  @media screen and (max-width: 639px) {
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
`;
const StudyMain = () => {
  const profilesRef = React.createRef<any>();
  const [profileScroll, setProfileScroll] = useState(0);
  const [profileMaxWidth, setProfileMaxWidth] = useState(0);
  useEffect(() => {
    setProfileMaxWidth(
      profilesRef.current.scrollWidth - profilesRef.current.clientWidth,
    );
  }, []);

  console.log(profileMaxWidth);
  console.log(profileScroll);
  const scrollLeft = () => {
    profilesRef.current?.scrollBy({
      left: -114,
      behavior: 'smooth',
    });

    if (profileScroll < 114) {
      setProfileScroll(() => 0);
      profilesRef.current?.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      setProfileScroll((pre) => pre - 114);
    }
  };
  const scrollRight = () => {
    profilesRef.current?.scrollBy({
      left: 114,
      behavior: 'smooth',
    });

    if (profileScroll + 114 > profileMaxWidth) {
      setProfileScroll(() => profileMaxWidth);
      profilesRef.current?.scrollTo({
        left: profilesRef.current?.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      setProfileScroll((pre) => pre + 114);
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
          </Profiles>
          {profileScroll < profileMaxWidth ? (
            <ProfileDirection onClick={scrollRight}>
              <img src="src\assets\image\rightProfile.png" />
            </ProfileDirection>
          ) : null}
        </ProfileBox>
        <StudyIntroduce />
      </StudyRoom>
    </StudyMainPage>
  );
};
export default StudyMain;

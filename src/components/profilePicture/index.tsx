import React from 'react';
import styled from 'styled-components';

const ProfilePicture = () => {
  return <UserPicture>프로필</UserPicture>;
};

export default ProfilePicture;

const UserPicture = styled.div`
  min-width: 7.5rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #a6a6ff;
  margin: 1rem 0.5rem;

  &:hover {
    background-color: #dedefc;
  }
`;

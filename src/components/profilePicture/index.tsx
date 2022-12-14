import React from 'react';
import styled from 'styled-components';

const UserPicture = styled.div`
  min-width: 100px;
  height: 10rem;
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

const ProfilePicture = () => {
  return (
    <UserPicture>
      프로필 <br />
      사진
    </UserPicture>
  );
};

export default ProfilePicture;

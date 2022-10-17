import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Welcome: React.FC = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userJSON = localStorage.getItem(process.env.LOCALSTORAGE_USER_KEY);
    setUserName(
      JSON.parse(
        userJSON
      ).username
    );
  }, []);
  return (
    <Container>
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a room to start messaging.</h3>
    </Container>
  );
}
export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;

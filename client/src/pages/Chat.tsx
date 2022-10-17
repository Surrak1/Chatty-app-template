import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import Rooms from "../components/Rooms";
import Welcome from "../components/Welcome";
import { iRoom } from "../interfaces/iRoom";

export default function Chat() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState<iRoom | undefined>(undefined);

  useEffect(() => {
    if (!localStorage.getItem(process.env.LOCALSTORAGE_USER_KEY)) {
      navigate("/login");
    }
  }, [navigate]);

  const handleRoomChange = (room: iRoom) => {
    setCurrentRoom(room);
  };
  return (
    <>
      <Container>
        <div className="container">
          <Rooms rooms={rooms} changeRoom={handleRoomChange} />
          {currentRoom === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentRoom={currentRoom}/>
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { iRoom } from "../interfaces/iRoom";

const ChatContainer: React.FC<{currentRoom: iRoom}> = ({ currentRoom }) => {


  const handleSendMsg = (msg: string) => {
    console.log('msg: ', msg);
  };

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentRoom.srcImage}`}
              alt=""
            />
          </div>
          <div className="username">
            <h3>{currentRoom.name}</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        <h3 className="message">Welcome to {currentRoom.name}.</h3>
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}
export default ChatContainer;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    h3{
      color: #ffffff
    }
  }
`;

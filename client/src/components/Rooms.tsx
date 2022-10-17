import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/chat-alt.svg";
import { iRoom } from "../interfaces/iRoom";
import Logout from "./Logout";

const Rooms: React.FC<any> = ({ rooms, changeRoom }) => {
  const [currentUserName, setCurrentUserName] = useState<string | undefined>(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState<number | undefined>(undefined);

  useEffect(() => {
    const user = localStorage.getItem(process.env.LOCALSTORAGE_USER_KEY);
    const data = JSON.parse(user as string);
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);

  const changeCurrentChat = (index: number, room: iRoom) => {
    setCurrentSelected(index);
    changeRoom(room);
  };

  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>Chatty</h3>
          </div>
          <>
            {rooms.length > 0 ?
              <div className="rooms">
                {rooms.map((room: iRoom, index: number) => {
                  return (
                    <div
                      key={room._id}
                      className={`room ${index === currentSelected ? "selected" : ""
                        }`}
                      onClick={() => changeCurrentChat(index, room)}
                    >
                      <div className="avatar">
                        <img
                          src={`data:image/svg+xml;base64,${room.srcImage}`}
                          alt=""
                        />
                      </div>
                      <div className="username">
                        <h3>{room.name}</h3>
                      </div>
                    </div>
                  );
                })}
              </div> :
              <div>
                <h4>No rooms available yet</h4>
              </div>
            }
          </>

          <div className="add-room">
            <button>Create a new room</button>
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
            <div>
              <Logout />
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
export default Rooms;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 65% 10% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3, h2 {
      color: white;
      text-transform: uppercase;
    }
  }

  h4 {
    color: white;
    padding: 2em;
  }

  .add-room {
    width: 100%;
    height: 100%;
    button {
      border-radius: 0.5em;
      background-color: #4e0eff;
      color: white;
      padding: 1em;
      padding-left: 3em;
      padding-right: 3em;
      width: 100%;
      height: 100%; 
      font-size: 1em;
    }
  }

  .rooms {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .room {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
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
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;

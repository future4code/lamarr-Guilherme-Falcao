import styled from "styled-components";

export const Cards = styled.div`
  background-color: black;
  border-radius: 60px;
  opacity: 0.7;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18vh;
  color: white;
  font-size: 17px;
`;
export const HomeStyle = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(https://images3.alphacoders.com/812/812062.png);
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ButtonsHome = styled.button`
  font-size: 14px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  width: 7vw;
  height: 5vh;
  :hover {
    cursor: pointer;
    border-bottom: 2px solid hotpink;
    border-left: 2px solid hotpink;
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    color: whitesmoke;
    transition: 0.2s;
  }
`;
export const NameHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-shadow: 3px 3px black;
  color: whitesmoke;
  font-size: 100px;
`;
export const AllHeaders = styled.h1`
  padding-top: 8vw;
  color: whitesmoke;
  font-size: 32px;
`;
export const HeaderTrips = styled.h1`
  padding: 4px;
  color: whitesmoke;
  font-size: 32px;
`;
export const SelectStyle = styled.select`
  font-size: 16px;
  border-radius: 10px;
  border: none;
  margin: 5px;
  width: 25vw;
  height: 5vh;
`;
export const InputStyle = styled.input`
  font-size: 16px;
  border-radius: 10px;
  border: none;
  margin: 5px;
  width: 25vw;
  height: 5vh;
`;
export const InputLogin = styled.input`
  border: none;
  border-radius: 5px;
  border-top: 2px solid blueviolet;
  border-right: 2px solid blueviolet;
  border-bottom: 2px solid hotpink;
  border-left: 2px solid hotpink;
  margin: 5px;
  width: 20vw;
  height: 5vh;
`;

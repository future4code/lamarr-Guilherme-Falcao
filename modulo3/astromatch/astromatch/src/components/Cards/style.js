import styled from "styled-components";

export const Img = styled.img`
  padding-top: 10px;
  width: 50%;
`;
export const ButtonMatches = styled.button`
  width: 4vw;
  height: 5vh;
  border-radius: 100px;
  border: none;
  background-color: lightsteelblue;
  color: whitesmoke;
  :hover {
    cursor: pointer;
    background-color: lightyellow;
    color: gray;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const AppName = styled.h1`
  display: flex;
  text-align: center;
`;
export const NameAge = styled.h2`
  padding: 3px;
  font-family: Dax;
`;
export const Bio = styled.p`
  border-bottom: 1px solid lightcoral;
  padding: 5px;
  font-family: Arial;
`;
export const Container = styled.div`
  background-image: url(https://img.freepik.com/fotos-gratis/fundo-abstrato-desfocado-cores-suaves_58702-1548.jpg?w=740&t=st=1659478489~exp=1659479089~hmac=ab411f7fed66a91f4401d1cd2e17e67f1d537b6b8045a9f451ad5503efa0d5d7);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5px;
  justify-content: space-between;
  text-align: center;
  border-radius: 15px;
  border: 3px solid whitesmoke;
  box-shadow: 5px 5px 5px lightgray;
  margin: 5% 35% 5%;
`;
export const ButtonRed = styled.button`
  margin-top: 10px;
  width: 8vw;
  height: 6vh;
  border: none;
  border-radius: 25px;
  background-color: whitesmoke;
  :hover {
    cursor: pointer;
    background-color: red;
    color: whitesmoke;
    transition: 0.4s;
  }
`;
export const ButtonGreen = styled.button`
  margin-top: 10px;
  width: 8vw;
  height: 6vh;
  border: none;
  border-radius: 25px;
  background-color: whitesmoke;
  :hover {
    cursor: pointer;
    background-color: green;
    color: whitesmoke;
    transition: 0.4s;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid whitesmoke;
  text-align: center;
  font-size: 20px;
  color: lightgoldenrodyellow;
  text-shadow: 1px 1px hotpink;
`;

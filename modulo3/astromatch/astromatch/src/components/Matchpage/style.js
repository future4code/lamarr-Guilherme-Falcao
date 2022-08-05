import styled from "styled-components";

export const ButtonHome = styled.button`
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
export const Container = styled.div`
width: 30vw;
height: 70vh;
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
export const ImgMatch = styled.img`
  width: 20%;
`
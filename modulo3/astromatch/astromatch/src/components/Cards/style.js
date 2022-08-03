import styled from "styled-components";

export const Img = styled.img`
    width: 250px;
`
export const Container = styled.div`
    justify-content: space-between;
    text-align: center;
    padding: 15px;
    width: 25vw;
    border: 2px solid whitesmoke;
    box-shadow: 5px 5px 5px lightgray;
`
export const ButtonRed = styled.button`
    width: 8vw;
    height: 6vh;
    border: none;
    border-radius: 25px;
    background-color: lightgray;
    :hover{
        cursor: pointer;
        background-color: red;
        color: white;
        transition: 0.3s;
    }
`
export const ButtonGreen = styled.button`
    width: 8vw;
    height: 6vh;
    border: none;
    border-radius: 25px;
    background-color: lightgray;
    :hover{
        cursor: pointer;
        background-color: green;
        color: white;
        transition: 0.3s;
    }
`
import styled from 'styled-components';

export const Input = styled.input`
    border-radius: 5px;
    border: none;
    width: 10vw;
    height: 5vh;
    background-color: whitesmoke;
    :hover{
        background-color: white;
    }
`
export const Container = styled.div`
    
`
export const H1 = styled.h1`
`
export const ButtonAdd = styled.button`
    border-radius: 5px;
    border: none;
    width: 10vw;
    height: 5vh;
    background-color: lightgreen;
    :hover{
        background-color: green;
        color: whitesmoke;
        transition: 0.3s;
        cursor: pointer;
    }
`
export const ButtonRem = styled.button`
    border-radius: 5px;
    border: none;
    width: 10vw;
    height: 5vh;
    background-color: lightcoral;
    :hover{
        background-color: red;
        color: whitesmoke;
        transition: 0.3s;
        cursor: pointer;
    }
`
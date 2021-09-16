
import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e4fefc;
`;

export const GroupInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;

  margin: 10px;
  > label {
    font-size: 15px;
  }
  > input {
    margin-left: 10px;
    height: 30px;
    width: 90%;
  }
`;
export const Area1 = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;

  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Botoes = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  > button {
    width: 25%;
    height: 40px;
    border-color: blue;
    background-color: blue;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      border-color: #174ceb;
      background-color: #174ceb;

      color: #fff;
    }
  }
`;
export const StatusConection = styled.div`
  width: 50%;
  height: 10%;

  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #d9e7ff;

  display: flex;
  align-items: center;
  margin-bottom: 60px;
  padding: 5px;

  > span {
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
    font-style: bold;
  }
`;

export const AreaDados = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;



export const Equipamento = styled.button`
  width: 70%;
  margin-top: 10px; 
  height: 50%;

  border: none;
  border-radius: 8px;
  padding: 3px;
  background: #7ea1ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  color: #fff;
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;

  &:hover {
    background-color: #174ceb;
  };

  .btn_active{
    background-color:black !important;
  }
`;

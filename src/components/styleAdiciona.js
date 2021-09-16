
import styled from "styled-components";

export const ADDContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  width: 35vw;
  height: 80vh;

  position:relative;

  background-color: #D9E7FF;

  border-radius: 10px;
  /* backdrop-filter: blur(4px); */
  top: 60px;

  padding: 5px;
  >label{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  > input {
    width: 50%;
    height: 30px;
    border: none;
    border-radius: 8px;

    padding: 5px;

    font-family: "Times New Roman", Times, serif;
    font-weight: 300;
    font-size: 15px;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);



 
`;
export const AreaEquip = styled.div`
  display: flex;
  width: 100%;
  height:30%;
  justify-content: space-around;
  align-items:center;

  margin-top: 10px;
  margin-bottom: 10px;

  padding-left: 15px;
  padding-right: 15px;

  .area1 {
    display: flex;
    flex-direction: column;
    width: 35%;
  }

  .area2 {
    display: flex;
    flex-direction: column;
    width: 35%;
  }
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

export const BTNS=styled.div`

display: flex;
width: 100%;
/* height: 30%; */
align-items: center;
   > button {
    width: 35%;
    height: 30px;
    border: none;
    background: #61ff90;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    
    cursor: pointer;
    margin: 10px;
     &:hover{
        background: #1CFF69;
     }
  }
`;
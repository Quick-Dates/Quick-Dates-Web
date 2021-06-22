import styled, { keyframes } from "styled-components";

const width = 65;
const breatheAnimation = keyframes`
  to{
    opacity: 1;
  }
  
  from{
    opacity: 0;
  }
`;

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  padding: 4rem 0px 0px 0px;
`;
export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${width}%;
  margin-top: 3rem;
`;
export const OptionStudent = styled.span`
  transition: ${(props) => (props.user !== "student" ? "border 0.5s" : "none")};
  cursor: ${(props) => (props.user !== "student" ? "pointer" : "default")};
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: ${(props) => (props.user == "student" ? "#1dc3c4" : "#247d7e")};
`;
export const OptionTeacher = styled.span`
  transition: ${(props) => (props.user !== "teacher" ? "border 0.5s" : "none")};
  cursor: ${(props) => (props.user !== "teacher" ? "pointer" : "default")};
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: ${(props) => (props.user == "teacher" ? "#1dc3c4" : "#247d7e")};
`;
export const ContainerInpurt = styled.div`
  display: flex;
  align-items: center;
  color: #247d7e;
  border: 2px solid #1dc3c4;
  border-radius: 3px;
  padding: 0px 0px 0px 5px;
  width: ${width}%;
  height: 45px;
  margin-top: 1.5rem;
`;
export const InputModal = styled.input`
  background: transparent;
  width: ${width}%;
  outline-width: 0;
  color: black;
  border: none;
  font-size: 17px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0;
  font-size: 1.8rem;
  color: #247d7e;
`;
export const Button = styled.button`
  width: ${width}%;
  background-color: var(--background-button-primary);
  color: var(--color-text-button);
  font-weight: 700;
  height: 50px;
  border-radius: 3px;
  font-size: 18px;
  margin-top: 5px;
  border: none;
  margin-top: 3rem;
  outline-width: 0;

  &:hover {
    background-color: var(--background-button-primary-hover);
    border: 1px solid #000;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    transition: all 1s;
  }
`;
export const Image = styled.img`
  width: 10rem;
`;
export const Text = styled.p`
  width: 70%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 144.2%;
  margin-top: 0.8rem;
  color: #247d7e;
  text-align: center;
  margin-top: 5rem;
`;

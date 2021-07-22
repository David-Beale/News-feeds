import styled from "styled-components";
import { Field } from "../NewFeedMenusStyle";

const topShadow = "#cbced1";
const bottomShadow = "#ffffff";
const color = "rgb(10, 144, 197)";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled(Field)`
  margin-bottom: 25px;
  padding: 15px 10px 15px 5px;
  box-shadow: inset 8px 8px 8px ${topShadow},
    inset -8px -8px 8px ${bottomShadow};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent !important;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  font-weight: 600;
  color: ${color};
  margin-right: 10px;
`;

export const ErrorBox = styled.div`
  padding: 15px 10px;
  height: 90px;
  margin: 5px 0;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: #d64958;
  align-items: center;
  box-shadow: inset 8px 8px 8px ${topShadow},
    inset -8px -8px 8px hsl(353, 92%, 90%);
`;

export const MessageContainer = styled.div`
  height: ${(props) => props.height}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
`;

export const Warning = styled.div`
  position: relative;
  top: -25px;
  color: red;
  text-align: center;
`;

export const styleIcon = (Component) => {
  return styled(Component)`
    margin: 0 10px;
    color: ${color};
  `;
};

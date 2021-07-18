import styled from "styled-components";

const color = "rgb(10, 144, 197)";
const topShadow = "#cbced1";
const bottomShadow = "#ffffff";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
export const SubContainer = styled.div`
  height: ${(props) => 390 + props.addedHeight}px;
  width: 400px;
  font-family: Arial;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #ecf0f3;
  border-radius: 40px;
  box-shadow: 13px 13px 20px ${topShadow}, -13px -13px 20px ${bottomShadow};
  overflow: hidden;
  position: relative;
  padding: 20px;
  transition: 200ms;
`;
export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Field = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 25px;
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
export const Title = styled.div`
  font-weight: 600;
  color: ${color};
  font-size: 1.7rem;
  margin: 25px 0;
`;
export const Button = styled.button`
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 6px 12px;
  background-color: ${(props) => (props.disabled ? "#536a7e" : color)};
  border: none;
  outline: none;
  height: 50px;
  width: 40%;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: 5px 5px 5px ${topShadow}, -5px -5px 5px ${bottomShadow};
`;
export const ErrorBox = styled.div`
  padding: 15px 10px 15px 20px;
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
  align-items: flex-start;
  box-shadow: inset 8px 8px 8px ${topShadow},
    inset -8px -8px 8px hsl(353, 92%, 90%);
`;
export const styleIcon = (Component) => {
  return styled(Component)`
    margin: 0 10px;
    color: ${color};
  `;
};
export const MessageContainer = styled.div`
  height: ${(props) => props.height}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
`;

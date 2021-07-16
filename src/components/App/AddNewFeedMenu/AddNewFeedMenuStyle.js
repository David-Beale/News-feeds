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
`;
export const SubContainer = styled.div`
  width: 400px;
  font-family: Arial;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ecf0f3;
  border-radius: 40px;
  box-shadow: 13px 13px 20px ${topShadow}, -13px -13px 20px ${bottomShadow};
  overflow: hidden;
  position: relative;
  padding: 20px;
  transition: 7500ms;
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
  height: 105px;
  margin-bottom: 25px;
  box-sizing: border-box;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  width: 100%;
  font-size: 14px;
  padding: 10px 20px;
  color: #d64958;
  align-items: flex-start;
  box-shadow: inset 8px 8px 8px ${topShadow},
    inset -8px -8px 8px
      ${(props) => (props.pass ? "hsl(146, 79%, 87%)" : "hsl(353, 92%, 90%)")};
`;

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
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.9)
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

export const Field = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 25px;
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

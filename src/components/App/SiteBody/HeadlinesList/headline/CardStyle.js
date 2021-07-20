import styled from "styled-components";
const color = "rgb(10, 144, 197)";
const topShadow = "#cbced1";
const bottomShadow = "#ffffff";

export const Container = styled.div`
  height: 300px;
  width: 700px;
  font-family: Arial;
  display: flex;
  background: #ecf0f3;
  border-radius: 40px;
  box-shadow: 13px 13px 20px ${topShadow}, -13px -13px 20px ${bottomShadow};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 20px 0;
  &:hover {
    transform: scale(1.05);
    box-shadow: 13px 13px 40px ${topShadow}, -13px -13px 40px ${bottomShadow};
  }
  transition: 100ms;
`;
export const Image = styled.img`
  object-fit: cover;
  min-width: 300px;
  max-width: 300px;
`;
export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 32px;
  width: 336px;
  height: 236px;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  color: ${color};
`;
export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;
export const Summary = styled.div`
  font-size: 0.9rem;
  margin-top: 1rem;
`;
export const Name = styled.div`
  position: absolute;
  font-size: 0.8rem;
  top: 3px;
  left: 332px;
  font-weight: 600;
`;
export const DateContainer = styled.div`
  position: absolute;
  font-size: 0.8rem;
  bottom: 3px;
  left: 332px;
`;

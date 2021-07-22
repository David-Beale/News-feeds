import styled from "styled-components";
const topShadow = "#cbced1";
const bottomShadow = "#ffffff";

export const MobileContainer = styled.div`
  height: 300px;
  width: calc(100% - 30px);
  font-family: Arial;
  display: flex;
  flex-direction: column;
  background: #ecf0f3;
  border-radius: 20px;
  box-shadow: 7px 7px 10px ${topShadow}, -7px -7px 10px ${bottomShadow};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    transform: scale(1.05);
    box-shadow: 13px 13px 20px ${topShadow}, -13px -13px 20px ${bottomShadow};
  }
  transition: 100ms;
`;
export const MobileImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
`;
export const MobileTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  height: 110px;
  justify-content: flex-start;
  overflow-y: auto;
`;
export const MobileTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;
export const MobileSummary = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
`;
export const MobileName = styled.div`
  color: black;
  position: absolute;
  font-size: 0.7rem;
  bottom: 5px;
  left: 15px;
  font-weight: 500;
`;
export const MobileDateContainer = styled.div`
  color: black;
  position: absolute;
  font-size: 0.7rem;
  font-weight: 500;
  bottom: 5px;
  right: 15px;
`;

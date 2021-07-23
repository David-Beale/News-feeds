import styled from "styled-components";

const topShadow = "#cbced1";
const bottomShadow = "#ffffff";

export const MobileContainer = styled.div`
  height: 125px;
  width: calc(100% - 30px);
  font-family: Arial;
  display: flex;
  flex-direction: column;
  background: #ecf0f3;
  border-radius: 20px;
  box-shadow: 7px 7px 10px ${topShadow}, -7px -7px 10px ${bottomShadow};
  overflow: hidden;
  position: relative;
  margin: 10px 0;
  &:hover {
    transform: scale(1.05);
    box-shadow: 13px 13px 20px ${topShadow}, -13px -13px 20px ${bottomShadow};
  }
  transition: 100ms;
`;
export const MobileTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
`;
export const Row = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 25px;
`;
export const DeleteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

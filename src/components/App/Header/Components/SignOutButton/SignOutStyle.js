import styled from "styled-components";
const bottomShadow = "#ffffff";
const topShadow = "#cbced1";

export const SignOutContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const SignOutButton = styled.div`
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: hsl(197, 90%, 41%);
  padding: 0.5rem 1rem;
  font-family: Arial;
  box-shadow: 4px 4px 5px ${topShadow}, -4px -4px 5px ${bottomShadow};
  &:hover {
    background-color: hsl(197, 90%, 35%);
  }
`;

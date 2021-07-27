import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 700px;
  font-family: Arial;
  display: flex;
  background: #ecf0f3;
  border-radius: 40px;
  box-shadow: 13px 13px 20px ${({ theme }) => theme.topShadow},
    -13px -13px 20px ${({ theme }) => theme.bottomShadow};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 20px 0;
  &:hover {
    transform: scale(1.05);
    box-shadow: 13px 13px 40px ${({ theme }) => theme.topShadow},
      -13px -13px 40px ${({ theme }) => theme.bottomShadow};
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
  height: 186px;
  justify-content: flex-start;
  overflow-y: auto;
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
  top: 7px;
  left: 332px;
  font-weight: 600;
`;
export const DateContainer = styled.div`
  position: absolute;
  font-size: 0.8rem;
  bottom: 7px;
  left: 332px;
`;

import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.primaryColor};
`;
export const MessageContainer = styled.div`
  height: 32px;
  font-size: 1rem;
`;
export const Error = styled.div`
  color: red;
  text-align: center;
`;
export const Success = styled.div`
  color: green;
  text-align: center;
`;

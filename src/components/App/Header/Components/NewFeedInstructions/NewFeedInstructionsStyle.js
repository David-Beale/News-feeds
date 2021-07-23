import styled from "styled-components";

const topShadow = "#cbced1";

export const Text = styled.div`
  color: rgb(10, 144, 197);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: ${(props) => (props.isDesktop ? "" : "0px")};
  left: ${(props) => (props.isDesktop ? "" : "0px")};
  width: ${(props) => (props.isDesktop ? "400px" : "100%")};
  background-color: #ecf0f3;
  height: 75px;
  padding: 0 15px;
  box-shadow: ${(props) =>
    props.isDesktop ? "" : `0px -5px 10px ${topShadow}`};
`;

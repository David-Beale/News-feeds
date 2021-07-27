import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: ${(props) => (props.isDesktop ? "calc(100% - 15px)" : "100%")};
  background-color: #ecf0f3;
  height: 75px;
  box-shadow: 0px 13px 20px ${({ theme }) => theme.topShadow};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIconButton = styled(IconButton)`
  color: black;
  box-shadow: ${(props) =>
    props.enabled
      ? "inset -4px -4px 8px rgba(255, 255, 255, 0.6), inset 8px 8px 16px rgba(0, 0, 0, 0.2)"
      : "-6px -6px 10px rgba(255, 255, 255, 0.7), 6px 6px 10px rgba(0, 0, 0, 0.3)"};
`;
export const CancelButtonContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isDesktop ? "flex-start" : "center")};
  padding: 0 15px;
`;

export const FeedMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

import styled from "styled-components";
import { IconButton } from "@material-ui/core";

const color = "rgb(10, 144, 197)";

export const OptionsBody = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OptionNum = styled.div`
  position: relative;
  top: -25px;
  color: ${color};
  font-weight: 600;
`;
export const Image = styled.img`
  max-height: 250px;
  max-width: calc(100% - 70px);
`;
export const Text = styled.div`
  text-align: center;
  padding: 10px;
  color: ${color};
  overflow-wrap: break-word;
  max-height: 250px;
  width: 250px;
  overflow-y: auto;
  font-size: 1rem;
`;
export const StyledNavButton = styled(IconButton)`
  border-radius: 10px;
  box-shadow: unset;
  height: 300px;
  padding: 0;
`;

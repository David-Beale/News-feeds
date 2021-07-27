import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.div`
  bottom: ${(props) => (props.slideUp ? "100%" : "0%")};
  height: ${(props) => props.height + "px"};
  width: 400px;
  font-family: Arial;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #ecf0f3;
  border-radius: 40px;
  box-shadow: 13px 13px 20px ${({ theme }) => theme.topShadow},
    -13px -13px 20px ${({ theme }) => theme.bottomShadow};
  overflow: hidden;
  position: relative;
  padding: 20px;
  transition: bottom 750ms cubic-bezier(0.68, -0.55, 0.265, 1.55), height 0.2s;
`;
export const LogoContainer = styled.div`
  background: ${({ theme }) =>
    theme.primaryColor}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    ${({ theme }) => theme.primaryColor},
    rgb(65, 189, 238)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primaryColor},
    rgb(65, 189, 238)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  height: 175px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  font-family: "Gill Sans" sans-serif;
  text-shadow: 2px 2px 8px #333;
`;

const AuthMessageBox = styled.div`
  height: 105px;
  margin: 30px 10px;
  box-sizing: border-box;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: 100%;
  font-size: 14px;
  padding: 10px 20px;
  color: #d64958;
`;

export const ConfirmChangeContainer = styled(AuthMessageBox)`
  text-align: center;
  box-shadow: inset 8px 8px 8px ${({ theme }) => theme.topShadow},
    inset -8px -8px 8px ${({ theme }) => theme.bottomShadow};
  color: ${({ theme }) => theme.primaryColor};
  height: 75px;
`;

export const AuthErrorBox = styled(AuthMessageBox)`
  align-items: flex-start;
  box-shadow: inset 8px 8px 8px ${({ theme }) => theme.topShadow},
    inset -8px -8px 8px
      ${(props) => (props.pass ? "hsl(146, 79%, 87%)" : "hsl(353, 92%, 90%)")};
`;

export const WelcomeBox = styled(AuthMessageBox)`
  box-shadow: inset 8px 8px 8px ${({ theme }) => theme.topShadow},
    inset -8px -8px 8px ${({ theme }) => theme.bottomShadow};
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 500;
  height: 160px;
  padding: 30px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  font-size: 14px;
`;

export const ForgotPasswordHeader = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 30px;
`;

export const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const InputField = styled(Field)`
  margin-bottom: 25px;
  padding: 15px 10px 15px 5px;
  box-shadow: inset 8px 8px 8px ${({ theme }) => theme.topShadow},
    inset -8px -8px 8px ${({ theme }) => theme.bottomShadow};
`;

export const AuthInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent !important;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryColor};
  margin-right: 10px;
`;

export const AuthButton = styled.button`
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 6px 12px;
  background-color: ${(props) =>
    props.disabled ? "#536a7e" : props.theme.primaryColor};
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.topShadow},
    -5px -5px 5px ${({ theme }) => theme.bottomShadow};
`;
export const AuthRedirectText = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 14px;
  margin-right: 10px;
`;
export const AuthCheck = styled.div`
  color: ${(props) => (props.success ? "hsl(145, 99%, 43%)" : "#df3312")};
  font-size: 14px;
`;

export const styleLoginIcon = (Component) => {
  return styled(Component)`
    margin: 0 10px;
    color: ${({ theme }) => theme.primaryColor};
  `;
};

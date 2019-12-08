import React, { useState } from "react";
import { connect } from "react-redux";

import * as s from "./styledLoginPage";
import { userOnLoginBtnClick } from "../../actions";
import CompanyLogo from "./CompanyLogo";
import googleIcon from "../../../assets/icon_google.svg";
import fbIcon from "../../../assets/icon_facebook.svg";

const LoginPage = ({ userInfo, loginBtnSpin, userOnLoginBtnClick }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const onLoginBtnClick = async () => {
    if (!login || !password) {
      setValidationMessage("Fill login and password");
      return null;
    }
    const response = await userOnLoginBtnClick(login, password);
    if (response) setValidationMessage(response);
  };

  const onLoginChange = value => {
    validationMessage && setValidationMessage("");
    setLogin(value);
  };

  const onPasswordChange = value => {
    validationMessage && setValidationMessage("");
    setPassword(value);
  };

  const renderLoginHelper = () => {
    return (
      <React.Fragment>
        <s.LoginDescription>
          If you already have an account here, then you can log in below. You
          can also use your google or facebook.
        </s.LoginDescription>
        <s.InputWrapper>
          <s.WrapperIcon iconName="FollowUser" />
          <s.Login
            type="text"
            value={login}
            onChange={e => onLoginChange(e.target.value)}
          />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.WrapperIcon iconName="Lock" />
          <s.Password
            type="password"
            value={password}
            onChange={e => onPasswordChange(e.target.value)}
          />
        </s.InputWrapper>
        {loginBtnSpin ? (
          <s.BtnSpinner />
        ) : (
          <s.LoginBtn onClick={onLoginBtnClick} displayErr={validationMessage}>
            {validationMessage && (
              <s.ErrorInput>{validationMessage}</s.ErrorInput>
            )}
            Log in
          </s.LoginBtn>
        )}
      </React.Fragment>
    );
  };
  //
  const renderAuthHelper = () => {
    return (
      <React.Fragment>
        <s.AuthDescription>
          If it's your first visit here you have to use your google or facebook
          account to register.
        </s.AuthDescription>
        <s.GoogleButton href="/auth/google">
          <s.AuthIcons src={googleIcon} alt="google-logo" />
          <s.AuthTitle>Sign in with Google</s.AuthTitle>
        </s.GoogleButton>
        <s.FacebookButton href="/auth/facebook">
          <s.AuthIcons src={fbIcon} alt="facebook-logo" />
          <s.AuthTitle>Sign in with Facebook</s.AuthTitle>
        </s.FacebookButton>
      </React.Fragment>
    );
  };

  return (
    <s.MainBackground>
      <s.MainPart>
        <s.LoginContainer>
          <CompanyLogo />
          <s.CompanyDescription>
            System transportu kontenerów
          </s.CompanyDescription>
          {userInfo === "wait" ? <s.Spinner /> : renderLoginHelper()}
        </s.LoginContainer>
        <s.AuthContainer>
          {userInfo === "wait" ? <s.Spinner /> : renderAuthHelper()}
        </s.AuthContainer>
      </s.MainPart>
    </s.MainBackground>
  );
};

const mapStateToProps = ({ userInfo, youSpinMe }) => {
  return { userInfo, loginBtnSpin: youSpinMe.shouldLoginBtnSpin };
};

export default connect(mapStateToProps, { userOnLoginBtnClick })(LoginPage);

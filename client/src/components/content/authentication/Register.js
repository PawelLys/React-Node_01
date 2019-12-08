import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { MainBackground, InputWrapper, WrapperIcon } from "./styledLoginPage";

import { userAccountSettings, userOnSkipBtnClick } from "../../actions";
import history from "../../../history";
import * as s from "./styledRegister";
import CompanyLogo from "./CompanyLogo";

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(3, "Login must have min 3 characters")
    .max(20, "Login can't have more than 20 characters")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must have min 8 characters")
    .max(20, "Password can't have more than 20 characters")
    .required("Required"),
  repeatPassword: Yup.mixed()
    .oneOf([Yup.ref("password"), "Password must be indentical"])
    .required("Required"),
  fullName: Yup.string(),
  adress: Yup.string()
});

const Register = ({ userInfo, userAccountSettings, userOnSkipBtnClick }) => {
  const [errMessage, setErrMessage] = useState("");

  const onSkipBtnClick = async () => {
    const response = await userOnSkipBtnClick();
    if (response) history.push("/");
  };

  if (!userInfo.registered)
    return (
      <MainBackground>
        <s.RegisterForm>
          <CompanyLogo />
          <s.RegisterDescription>
            Registration is entirely optional. If you plan to log in with your
            google or facebook accout click skip button below.
            <s.SkipBtn onClick={onSkipBtnClick}>
              Skip
              <s.SkipBtnIcon iconName="DoubleChevronLeftMedMirrored" />
            </s.SkipBtn>
          </s.RegisterDescription>
          <s.List>
            <Formik
              initialValues={{
                login: "",
                password: "",
                repeatPassword: "",
                fullName: "",
                adress: ""
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                setErrMessage("");
                const response = await userAccountSettings(
                  values.login,
                  values.password,
                  values.fullName,
                  values.adress
                );
                if (response.failure) {
                  setSubmitting(false);
                  setErrMessage(response.errMessage);
                }
              }}
              validationSchema={validationSchema}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form>
                  <s.Item makeSpace={touched.login && errors.login}>
                    <s.ItemDescription>
                      Login
                      <span style={{ color: "red", marginLeft: "2px" }}>*</span>
                    </s.ItemDescription>
                    <InputWrapper
                      style={{ marginLeft: "0", position: "relative" }}
                    >
                      <WrapperIcon iconName="Home" />
                      <Field
                        name="login"
                        type="input"
                        as={s.InputField}
                        placeholder="Enter login"
                      />
                      {touched.login && errors.login && (
                        <s.displayErrors>{errors.login}</s.displayErrors>
                      )}
                    </InputWrapper>
                  </s.Item>
                  <s.Item makeSpace={touched.password && errors.password}>
                    <s.ItemDescription>
                      Password
                      <span style={{ color: "red", marginLeft: "2px" }}>*</span>
                    </s.ItemDescription>
                    <InputWrapper
                      style={{ marginLeft: "0", position: "relative" }}
                    >
                      <WrapperIcon iconName="Home" />
                      <Field
                        name="password"
                        type="password"
                        as={s.InputField}
                        placeholder="Enter password"
                      />
                      {touched.password && errors.password && (
                        <s.displayErrors>{errors.password}</s.displayErrors>
                      )}
                    </InputWrapper>
                  </s.Item>
                  <s.Item
                    makeSpace={touched.repeatPassword && errors.repeatPassword}
                  >
                    <s.ItemDescription>
                      Repeat password
                      <span style={{ color: "red", marginLeft: "2px" }}>*</span>
                    </s.ItemDescription>
                    <InputWrapper
                      style={{ marginLeft: "0", position: "relative" }}
                    >
                      <WrapperIcon iconName="Home" />
                      <Field
                        name="repeatPassword"
                        type="password"
                        as={s.InputField}
                        placeholder="Repeat password"
                      />
                      {touched.repeatPassword && errors.repeatPassword && (
                        <s.displayErrors>
                          {errors.repeatPassword === "Required"
                            ? errors.repeatPassword
                            : errors.repeatPassword
                                .split("s: ", 2)[1]
                                .split(",", 2)[0]}
                        </s.displayErrors>
                      )}
                    </InputWrapper>
                  </s.Item>
                  <s.Item>
                    <s.Line />
                  </s.Item>
                  <s.Item>
                    <s.ItemDescription>Full name</s.ItemDescription>
                    <InputWrapper style={{ marginLeft: "0" }}>
                      <WrapperIcon iconName="Home" />
                      <Field
                        name="fullName"
                        type="input"
                        as={s.InputField}
                        placeholder="First name & last name"
                      />
                    </InputWrapper>
                  </s.Item>
                  <s.Item>
                    <s.ItemDescription>Address of residence</s.ItemDescription>
                    <InputWrapper style={{ marginLeft: "0" }}>
                      <WrapperIcon iconName="Home" />
                      <Field
                        name="adress"
                        type="input"
                        as={s.InputField}
                        placeholder="Adress of residence"
                      />
                    </InputWrapper>
                    <s.DoneBtn type="submit" disabled={isSubmitting}>
                      {errMessage && (
                        <s.displayLoginErr>{errMessage}</s.displayLoginErr>
                      )}
                      Register <s.DoneBtnIcon iconName="EditContact" />
                    </s.DoneBtn>
                  </s.Item>
                </Form>
              )}
            </Formik>
          </s.List>
        </s.RegisterForm>
      </MainBackground>
    );
};

const mapStateToProps = ({ userInfo }) => {
  return { userInfo };
};

export default connect(mapStateToProps, {
  userAccountSettings,
  userOnSkipBtnClick
})(Register);

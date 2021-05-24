import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import AuthInput from "../shared/inputs/AuthInput";
import BtnBord from "../shared/buttons/BtnBord";

import { signUp } from "../../../store/actions/user";
import { userProvider } from "../../../store/user/auth";

const SignUpForm = () => {
  const navigation = useNavigation();
  const { setCurrentUser } = userProvider();

  const onSubmit = (values, { setSubmitting }) => {
    let navigate = () => navigation.navigate("Verify");
    let userData = {
      username: values.username.toLowerCase(),
      password: values.password,
      email: values.username.includes("@") ? values.username : "",
      phone:
        values.username.includes("+") && !values.username.includes("@")
          ? values.username
          : "",
    };
    signUp(userData, setCurrentUser, setSubmitting, navigate);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Email/Phone is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!values.rePassword) {
      errors.rePassword = "Password is required";
    } else if (values.rePassword !== values.password) {
      errors.rePassword = "Passwords don'y match";
    }
    return errors;
  };

  return (
    <View style={{}}>
      <Formik
        initialValues={{ username: "", password: "", rePassword: "" }}
        validate={validate}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
        }) => (
          <>
            <AuthInput
              type="text"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              placeholder="Phone or Email"
              error={errors.username}
            />
            <AuthInput
              type="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
              error={errors.password}
            />
            <AuthInput
              type="password"
              onChangeText={handleChange("rePassword")}
              onBlur={handleBlur("rePassword")}
              value={values.rePassword}
              placeholder="Repeat Password"
              error={errors.rePassword}
            />

            <BtnBord
              onPress={handleSubmit}
              text="Continue"
              color="#85C8D5"
              st={{ alignSelf: "center" }}
              disabled={isSubmitting}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";

import AuthInput from "../shared/inputs/AuthInput";
import BtnBord from "../shared/buttons/BtnBord";

import { signIn } from "../../../store/actions/user";
import { userProvider } from "../../../store/user/auth";

const LoginForm = () => {
  const navigation = useNavigation();
  const { setCurrentUser } = userProvider();

  const onSubmit = (values, { setSubmitting }) => {
    let navigate = () => navigation.navigate("Verify");
    signIn(values, setCurrentUser, setSubmitting, navigate);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Email/Phone is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <View style={{}}>
      <Formik
        initialValues={{ username: "", password: "" }}
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
            <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
              <Text
                style={{
                  textAlign: "right",
                  marginTop: -5,
                  marginBottom: 20,
                  color: "#A5A5A5",
                  fontSize: 13,
                }}
              >
                Forget Password?
              </Text>
            </TouchableOpacity>
            <BtnBord
              onPress={handleSubmit}
              text="Sign In"
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

export default LoginForm;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import { Formik } from "formik";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import AuthInput from "../shared/inputs/AuthInput";
import BtnBord from "../shared/buttons/BtnBord";

import { fetchUserData } from "../../../store/actions/user";

const ResetForm = () => {
  const navigation = useNavigation();
  const [phase, setPhase] = useState(0);
  const [code, setCode] = useState("");
  const [username, setUsername] = useState({ success: false, user: null });

  const getUsername = (success, data) => {
    setUsername({ success, user: data });
  };

  useEffect(() => {
    if (username.success) {
      setPhase(1);
    }
  }, [username]);

  useEffect(() => {
    if (phase === 1) {
      verification(username.user.username);
    } else if (phase === 3) {
      setTimeout(() => {
        navigation.navigate("Auth");
      }, 3000);
    }
  }, [phase]);

  const usernameValidation = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Email/Phone is required";
    }
    return errors;
  };
  const passwordValidation = (values) => {
    const errors = {};
    if (!values.newPassword) {
      errors.newPassword = "Password is required";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
    if (!values.rePassword) {
      errors.rePassword = "Password is required";
    } else if (values.rePassword !== values.newPassword) {
      errors.rePassword = "Passwords don'y match";
    }
    return errors;
  };

  const handleUsernameSubmit = (values, { setSubmitting }) => {
    fetchUserData(values.username, getUsername);
    setSubmitting(false);
  };

  const codeSubmit = () => {
    if (code.length === 4) {
      axios
        .post(`http://134.209.239.1/api/auth/reset-confirmation`, {
          username: username.user.username,
          code,
        })
        .then((res) => {
          if (res.data.verified) {
            setCode("");
            setPhase(2);
          } else {
            setCode("");
          }
        })
        .catch((err) => {
          setCode("");
          console.log(err);
        });
    }
  };

  const handlePasswordSubmit = (values, { setSubmitting }) => {
    console.log(values.newPassword);
    axios
      .post(`http://134.209.239.1/api/user/${username.user.username}`, {
        password: values.newPassword,
      })
      .then((res) => {
        console.log(res);
        setSubmitting(false);
        console.log(res.data);
        if (res.data.success) {
          console.log("success");
          setPhase(3);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log("err: ", err);
        setSubmitting(false);
      });
  };

  const verification = async (username) => {
    let channel = username.includes("@") ? "email" : "sms";
    try {
      await axios
        .post(
          `http://134.209.239.1/api/auth/verification/${username}/${channel}`
        )
        .then((res) => {});
    } catch (error) {
      console.log("error here", error);
    }
  };

  return (
    <>
      {phase === 0 ? (
        <>
          <Formik
            initialValues={{ username: "" }}
            validate={usernameValidation}
            onSubmit={handleUsernameSubmit}
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
        </>
      ) : phase === 1 ? (
        <>
          <View style={{ height: 100 }}>
            <CodeInput
              className={"border-b"}
              space={10}
              size={30}
              inputPosition="center"
              activeColor="#85C8D5"
              inactiveColor="rgba(160, 160, 160, .5)"
              autoFocus={true}
              keyboardType="numeric"
              codeLength={4}
              codeInputStyle={{
                fontWeight: "400",
                color: "#6E6E6E",
                fontSize: 20,
              }}
              onFulfill={(code) => {
                setCode(code);
              }}
            />
          </View>
          <Text
            style={{
              alignSelf: "center",
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            verification code has been sent to {username.user.username}
          </Text>
          <BtnBord
            onPress={codeSubmit}
            text="Continue"
            color="#85C8D5"
            st={{ alignSelf: "center", marginTop: 20 }}
            disabled={code.length !== 4}
          />

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 30,
            }}
            // onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontSize: 12, color: "#A5A5A5" }}>Resend </Text>
            <Text style={{ color: "#85C8D5", fontSize: 12 }}>Code</Text>
          </TouchableOpacity>
        </>
      ) : phase === 2 ? (
        <>
          <Formik
            initialValues={{ newPassword: "", rePassword: "" }}
            validate={passwordValidation}
            onSubmit={handlePasswordSubmit}
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
                  type="password"
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  placeholder="newPassword"
                  error={errors.newPassword}
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
        </>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ marginBottom: 30, height: 72, width: 72 }}
            source={require("../../../assets/icons/successIcon.png")}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#A5A5A5",
              marginBottom: 5,
            }}
          >
            Password Updated Successfully
          </Text>
        </View>
      )}
    </>
  );
};

export default ResetForm;

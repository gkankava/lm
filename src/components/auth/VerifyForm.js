import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import axios from "axios";

import { userProvider } from "../../../store/user/auth";

const VerifyForm = () => {
  const { currentUser, setCurrentUser } = userProvider();
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    verification(currentUser.user.username);
    console.log(currentUser);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setCurrentUser(true, data);
      }, 3000);
    }
  }, [isSuccess]);

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

  const handleSubmit = () => {
    if (code.length === 4) {
      axios
        .post(`http://134.209.239.1/api/auth/confirmation`, {
          username: currentUser.user.username,
          code,
        })
        .then((res) => {
          setData(res.data);
          setIsSuccess(true);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  };

  return (
    <>
      {isSuccess ? (
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
            Registration completed successfully
          </Text>
          <Text style={{ fontSize: 12, color: "#A5A5A5" }}>Thank you!</Text>
        </View>
      ) : (
        <>
          <View style={{ height: 100, marginTop: 50 }}>
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
            verification code has been sent to {currentUser.user.username}
          </Text>
          <TouchableOpacity
            style={styles.buttonOut}
            onPress={handleSubmit}
            title="Continue"
            disabled={code.length !== 4}
          >
            <Text style={styles.buttonOutText}>Continue </Text>
          </TouchableOpacity>
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
      )}
    </>
  );
};

export default VerifyForm;

const styles = StyleSheet.create({
  buttonOut: {
    marginTop: 50,
    alignSelf: "center",
    width: "60%",
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#85C8D5",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutText: { color: "#85C8D5" },
});

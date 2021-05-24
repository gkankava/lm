import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import AuthScreen from "../components/auth/AuthScreen";
import LoginScreen from "../components/auth/LoginScreen";
import SignUpScreen from "../components/auth/SignUpScreen";
import VerifyScreen from "../components/auth/VerifyScreen";
import PasswordResetScreen from "../components/auth/PasswordResetScreen";

function AuthStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="Reset" component={PasswordResetScreen} />
      </Stack.Navigator>
    </>
  );
}

export default AuthStack;

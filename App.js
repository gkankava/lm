import React, { useEffect } from "react";
import { StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import jwtDecode from "jwt-decode";

import { userProvider } from "./store/user/auth";
import { socketProvider } from "./store/socket/socket";
import { fetchUserData } from "./store/actions/user";
import { getData } from "./src/handlers/localStorage";

import AuthStack from "./src/stacks/AuthStack";
import MainStack from "./src/stacks/MainStack";

export default function App() {
  const { currentUser, setCurrentUser, logOut } = userProvider();
  const { socket, join, disconnect } = socketProvider();

  useEffect(() => {
    // logOut();
    getData("jwtToken").then((token) => {
      if (token) {
        let id = jwtDecode(token).username;
        try {
          fetchUserData(id, setCurrentUser);
        } catch (error) {
          console.log(error);
          setCurrentUser(false, null);
        }
      }
    });
    return () => {
      disconnect(socket);
    };
  }, []);

  useEffect(() => {
    if (currentUser.isAuthenticated && currentUser.user.verified) {
      const { name, room } = {
        name: currentUser.user.username,
        room: `${currentUser.user.username}-chat-room`,
      };
      join(socket, name, room);
    }
  }, [currentUser]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {currentUser.isAuthenticated && currentUser.user.verified ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

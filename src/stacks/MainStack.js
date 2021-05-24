import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import BlogStack from "./BlogStack";
import ChatScreen from "../components/chat/ChatScreen";
import ProfileStack from "./ProfileStack";

function auth() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Blog"
        screenOptions={{ options: { headerShown: false } }}
      >
        <Stack.Screen
          name="Blog"
          component={BlogStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

export default auth;

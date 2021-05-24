import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import BlogScreen from "../components/blog/BlogScreen";
import PostScreen from "../components/blog/PostScreen";
const BlogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BlogScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BlogScreen" component={BlogScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default BlogStack;

import React, { useState } from "react";

import { TouchableOpacity, Dimensions, Alert } from "react-native";
const height = Dimensions.get("screen").height;

import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import profileScreen from "../components/profile/profileScreen";
import billingScreen from "../components/profile/billingScreen";
import profileSettingsScreen from "../components/profile/profileSettingsScreen";
import settingsScreen from "../components/profile/settingsScreen";

import Notifications from "../components/profile/Notifications";
import Membership from "../components/profile/Membership";
import Favorites from "../components/profile/Favorites";
import Share from "../components/profile/Share";
import Help from "../components/profile/Help";
import NewCardScreem from "../components/profile/NewCardScreen";
import CheckoutScreen from "../components/profile/CheckoutScreen";

import { Ionicons } from "@expo/vector-icons";

function ProfileStack() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const checkOutHeaderRight = () => (
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => {
        Alert.alert("Confirm", "Sure you want to leave?", [
          {
            text: "Yes",
            onPress: () => navigation.goBack(),
          },
          { text: "No", onPress: () => {} },
        ]);
      }}
    >
      <Ionicons name="md-close-outline" size={34} color="black" />
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={profileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsBilling"
          component={billingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsProfile"
          component={profileSettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={settingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Membership"
          component={Membership}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Share"
          component={Share}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewCard"
          component={NewCardScreem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            headerShown: false,
            headerStyle: {
              height: 110,
              backgroundColor: "#eee",
              borderBottomColor: "rgba(0,0,0,.1)",
              borderBottomWidth: 1,
            },
            headerTitle: "checkout",
            headerLeft: checkOutHeaderRight,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default ProfileStack;

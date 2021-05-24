import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Right = () => {
  return (
    <TouchableOpacity style={{ marginLeft: "auto" }}>
      <Feather name="more-horizontal" size={30} color="#777" />
    </TouchableOpacity>
  );
};

export default Right;

const styles = StyleSheet.create({});

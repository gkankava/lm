import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { keyboardProvider } from "../../../store/keyboard";

import {
  addKeyboardListener,
  removeKeyboardListener,
} from "../../handlers/keyboardListener";

const PageContent = (props) => {
  const { keyboardStatus, setKeyboardStatus } = keyboardProvider();
  const { children, header, hasIndicator = false, step = 1 } = props;

  useEffect(() => {
    addKeyboardListener(setKeyboardStatus);
    return () => {
      removeKeyboardListener(setKeyboardStatus);
    };
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        height: keyboardStatus ? height * 0.85 : height * 0.55,
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{header}</Text>
        {hasIndicator && (
          <View style={styles.indicatorContainer}>
            {step === 1 ? (
              <>
                <View style={styles.pageIndicatorActive} />
                <View style={styles.pageIndicator} />
              </>
            ) : (
              <>
                <View style={styles.pageIndicator} />
                <View style={styles.pageIndicatorActive} />
              </>
            )}
          </View>
        )}
      </View>
      <ScrollView style={styles.contentContainer}>{children}</ScrollView>
    </View>
  );
};

export default PageContent;

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 60,
    paddingRight: 30,
    paddingLeft: 30,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  innerContainer: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40,
  },
  header: {
    fontSize: 30,
    fontWeight: "300",
    color: "#85C8D5",
  },
  indicatorContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: 45,
    justifyContent: "space-between",
  },
  pageIndicator: {
    width: 12,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E5E5E5",
  },
  pageIndicatorActive: {
    width: 28,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#85C8D5",
  },
  contentContainer: {},
});

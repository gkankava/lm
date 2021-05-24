import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

const SelectCardModal = ({ vis, setVis, card, setCard }) => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={vis}
        onRequestClose={() => {
          setVis(false);
        }}
      >
        <View
          onStartShouldSetResponder={() => {
            setVis(false);
          }}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,.3)",
            justifyContent: "center",
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setVis(false)}
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <EvilIcons name="credit-card" size={30} color="black" />
                <Text style={{ fontSize: 16, marginLeft: 10 }}>{card}</Text>
              </View>
              <EvilIcons name="check" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SelectCardModal;

const styles = StyleSheet.create({
  modalView: {
    alignSelf: "center",
    width: "80%",
    //  height: 224,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 20,
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
});

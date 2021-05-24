import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import MenuModal from "../../shared/modals/MenuModal";
// import Modal from "../../shared/assets/modal";

const height = Dimensions.get("screen").height;

const LinearHeader = () => {
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <LinearGradient
      start={[0, 0]}
      end={[0.5, 1]}
      colors={["#88C8B1", "#94C936"]}
      style={styles.container}
    >
      <View style={styles.headContainer}>
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          <Text style={styles.arrText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <Image source={require("../../../../assets/icons/Icon-Menu.png")} />
        </TouchableOpacity>
        <MenuModal
          vis={menuVisible}
          setVis={setMenuVisible}
          profileStack={true}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: height * 0.15,
    width: "100%",
    overflow: "hidden",
  },
  headContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    paddingTop: 65,
    alignItems: "center",
    flex: 1,
  },
  leftContainer: { flexDirection: "row", alignItems: "center", width: 55 },
  arrow: {},
  arrText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  btnContainer: {
    alignItems: "flex-end",
    height: 11,
    justifyContent: "space-between",
  },
  handleLong: {
    width: 25,
    height: 3,
    backgroundColor: "white",
    borderRadius: 20,
  },
  handleShort: {
    width: 17,
    height: 3,
    backgroundColor: "white",
    borderRadius: 20,
  },
});

export default LinearHeader;

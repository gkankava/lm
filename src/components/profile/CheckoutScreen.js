import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import SelectCardModal from "../shared/modals/SelectCardModal";
import BtnFull from "../shared/buttons/BtnFull";

const CheckoutScreen = (props) => {
  const navigation = useNavigation();
  const { title, opt, price } = props.route.params;

  const [vis, setVis] = React.useState(false);
  const [card, setCard] = React.useState("card: **** 4879");

  const list = opt.map((item, key) => {
    return (
      <View style={styles.itemContainer} key={key}>
        {item.status ? (
          <Feather name="check" size={19} color="#656565" />
        ) : (
          <Feather name="x" size={19} color="#F3BFBF" />
        )}
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Package: {title}</Text>
      <View style={styles.optContainer}>
        <Text style={styles.heading2}>Features:</Text>
        {list}
      </View>
      <Text style={styles.heading3}>Select card:</Text>
      <TouchableOpacity onPress={() => setVis(true)} style={styles.select}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <EvilIcons name="credit-card" size={30} color="black" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>{card}</Text>
        </View>
        <EvilIcons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      <SelectCardModal
        vis={vis}
        setVis={setVis}
        setCard={setCard}
        card={card}
      />
      <View style={{ flexGrow: 1 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.heading3, { marginRight: 15 }]}>Total : </Text>
        <View
          style={{
            flexGrow: 1,
            // borderBottomWidth: 1,
            borderWidth: 0.4,
            alignSelf: "flex-end",
            borderStyle: "dashed",
          }}
        />
        <Text style={[styles.heading3, { marginLeft: 15 }]}>{price} usd </Text>
      </View>
      <BtnFull
        text="checkout"
        bgColor="#85C8D5"
        txtColor="white"
        onPress={() => {
          Alert.alert("Done", "", [
            {
              text: "Yes",
              onPress: () => navigation.navigate("BlogScreen"),
            },
          ]);
        }}
        st={{ alignSelf: "center", marginBottom: 50, marginTop: 20 }}
      />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingTop: 20, flex: 1 },
  heading1: { fontSize: 22 },
  heading2: { fontSize: 20, marginBottom: 10 },
  heading3: { fontSize: 16, marginTop: 30, marginBottom: 10 },
  optContainer: { marginTop: 10 },
  itemContainer: { flexDirection: "row", marginBottom: 8 },
  itemTitle: { marginLeft: 8, fontSize: 16, color: "#696969" },
  select: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

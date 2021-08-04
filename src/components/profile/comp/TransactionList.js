import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const TransactionList = ({
  list = [
    { date: "05 apr 2021", card: "4587", plan: "Traveler", price: "9.99" },
    { date: "05 apr 2021", card: "4587", plan: "Walker", price: "9.99" },
    { date: "05 apr 2021", card: "4587", plan: "Traveler", price: "9.99" },
  ],
}) => {
  let arr = list.map((i, k) => (
    <View style={styles.itemContainer} key={k}>
      <EvilIcons style={styles.cart} name="cart" size={20} color="#C8C7CC" />
      <View
        style={{
          borderBottomColor: "#C8C7CC",
          borderBottomWidth: 1,
          width: "100%",
          paddingBottom: 12,
        }}
      >
        <View style={styles.detailsContainer}>
          <View style={styles.top}>
            <Text style={styles.topTxt}>{i.date}</Text>
            <Text style={styles.topTxt}>**** {i.card}</Text>
          </View>
          <View style={styles.bot}>
            <Text style={styles.plan}>{i.plan} Package</Text>
            <Text style={styles.price}>
              {i.price} <Text style={{ fontWeight: "400" }}>usd</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  ));
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        style={{}}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        {arr}
      </ScrollView>
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    marginTop: 20,
    paddingBottom: 200,
  },
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  cart: { marginRight: 5 },
  detailsContainer: { flexGrow: 1, paddingRight: 40 },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topTxt: { color: "#C8C7CC", fontSize: 12 },
  bot: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plan: { fontSize: 17, color: "#3A3A3C" },
  price: { fontSize: 17, fontWeight: "600", color: "#3A3A3C" },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#3A3A3C",
    marginTop: 13,
    marginLeft: 30,
  },
});

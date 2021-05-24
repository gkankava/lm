import React from "react";
import { View, Text } from "react-native";
import Content from "./shared/Content";
import Header from "./shared/header";

import CardSlider from "./comp/CardsSlider";
import TransactionList from "./comp/TransactionList";

const BillingScreen = ({ navigation }) => {
  return (
    <>
      <Header header={"Billing"} />
      <Content>
        <CardSlider navigation={navigation} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginTop: 20,
            paddingHorizontal: 30,
          }}
        >
          Transactions
        </Text>
        <TransactionList />
      </Content>
    </>
  );
};

export default BillingScreen;

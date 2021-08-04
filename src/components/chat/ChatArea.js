import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { DotIndicator } from "react-native-indicators";

import Message from "./Message";

const ChatArea = ({ messageList, name, pP, isFetching }) => {
  const renderMessage = ({ item }) => (
    <Message message={item} name={name} pP={pP} k={item._id} />
  );
  return (
    <View style={styles.container}>
      {isFetching ? (
        <DotIndicator color="#85C8D5" size={5} />
      ) : (
        <FlatList
          inverted
          data={messageList}
          renderItem={renderMessage}
          keyExtractor={(message) => message._id}
          style={{ height: 10 }}
          initialNumToRender={5}
        />
      )}
    </View>
  );
};

export default ChatArea;

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});

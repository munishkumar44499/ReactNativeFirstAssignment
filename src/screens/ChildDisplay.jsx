import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChildDisplay = React.memo(({ text }) => {
  console.log("Child re-rendered"); 

  return (
    <View style={styles.childContainer}>
      <Text style={styles.text}>Child Component</Text>
      <Text style={styles.message}>Message: {text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  childContainer: {
    padding: 16,

    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#bcb5b5ff",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  message: {
    fontSize: 16,
    color: "#333",
  },
});

export default ChildDisplay;

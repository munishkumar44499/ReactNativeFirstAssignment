import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ChildDisplay from "./ChildDisplay";
import PrimaryButton from "../components/PrimaryButton";

const ParentChildDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Parent Component</Text>

    
      <Text style={styles.counter}>Counter: {count}</Text>
      <PrimaryButton buttonText="Increment" action={() => setCount(count + 1)} />

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
      />

      <ChildDisplay text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  counter: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
    padding: 8,
    marginVertical: 16,
  },
});

export default ParentChildDemo;

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const ToggleTask = () => {
  const [visible, setVisible] = useState(true);

  const toggleHandler = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>

      {visible && (
        <Text style={styles.details}>
          Hi Munish How are you?
        </Text>
      )}

      <PrimaryButton buttonText={visible ? "Hide Details" : "Show Details"}
        action={toggleHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  details: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
});

export default ToggleTask
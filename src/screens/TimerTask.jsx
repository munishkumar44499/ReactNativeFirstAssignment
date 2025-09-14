import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const TimerTask = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Elapsed Time: {seconds} seconds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TimerTask;

import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={theme.container}>
      <Text style={theme.text}>
        {isDarkMode ? "Dark Mode is On" : "Light Mode is On"}
      </Text>

      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
      />
    </View>
  );
};

export default DarkModeToggle;

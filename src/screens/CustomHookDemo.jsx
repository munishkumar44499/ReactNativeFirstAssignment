import React from "react";
import { SafeAreaView } from "react-native";
import UsersList from "./UsersList.js";

const CustomHookDemo=() => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsersList />
    </SafeAreaView>
  );
}

export default CustomHookDemo



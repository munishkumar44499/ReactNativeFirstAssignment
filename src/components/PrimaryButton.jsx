import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const PrimaryButton = ({ buttonText, action }) => {

    return (
        <TouchableOpacity
            onPress={action}
            style={styles.container}>
            <Text style={styles.textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create(
    {
        container: {
            elevation: 3,
            borderRadius: 8,
            backgroundColor: "#4542e0ff",
            padding: 12,
            marginHorizontal: 10,
            marginVertical: 5,
        },

        textStyle:{
                    color: "#ffffff",
                    textAlign: "center",
                }
    }
);

export default PrimaryButton
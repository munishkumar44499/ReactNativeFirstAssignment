import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const InputHandling = () => {
    const [name, setName] = useState("");
    const [submit, setSubmit] = useState("");

    const handleSubmit = () => {
        setSubmit(name);
    };

    return (
        <View style={styles.container}>
            {submit ? (<Text style={styles.greeting}>Hello, {submit}!</Text>) : null}

            <Text style={styles.label}>Enter your name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <PrimaryButton buttonText="Submit" action={handleSubmit} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    label: {
        fontSize: 20,
        marginTop:20,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#aaa",
        padding: 8,
        width: "80%",
        marginBottom: 12,
        borderRadius: 6,
    },
    greeting: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default InputHandling;

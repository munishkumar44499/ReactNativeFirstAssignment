import React from "react";
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import useFetch from "./useFetch";

const UsersList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) {
        return <ActivityIndicator size="large" color="blue" style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }} />;
    }

    if (error) {
        return <Text style={styles.error}>Error: {error}</Text>;
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        backgroundColor: "#f0f0f0",
        padding: 16,
        marginBottom: 10,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: "gray",
    },
    error: {
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
});

export default UsersList;

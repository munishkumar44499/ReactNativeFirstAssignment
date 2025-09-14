
import React from "react";
import { View, Text, StyleSheet } from "react-native";



const GreetingCard = ({ data }) => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Hello {data.name} !</Text>
            <Text style={styles.message}>{data.message} </Text>
        </View>
    );

};


const styles = StyleSheet.create(
    {
        card: {
            backgroundColor: '#fff',
            marginHorizontal: 15,
            marginTop:15,
            padding: 15,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
        },

        title: {
            fontSize: 16,
            color: "#1b5835ff"
        },


        message: {
            fontSize: 16,
            color: "#aa5e5eff"
        }


    });

export default GreetingCard
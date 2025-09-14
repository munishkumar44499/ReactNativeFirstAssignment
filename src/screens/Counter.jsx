
import React, { useState } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';




const Counter = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count == 0) {
            Alert.alert("count can not be in negative");
        } else {
            setCount(count - 1);
        }
    }

    return (
        <View >
            <Text style={styles.textStyle}> {count}</Text>
            <PrimaryButton buttonText="Plus" action={()=>increaseCount()} />
            <PrimaryButton buttonText="Minus" action={decreaseCount} />
        </View>
    )
};


const styles= StyleSheet.create({
    textStyle:{ fontSize: 30, textAlign: "center" }
});

export default Counter
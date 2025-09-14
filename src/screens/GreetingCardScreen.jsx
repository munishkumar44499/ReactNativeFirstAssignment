import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GreetingCard from './GreetingCard';

const GreetingCardScreen = () => {
    const cardsData = [
        { id: 1, name: "Munish", message: "Have a wonderful day!" },
        { id: 2, name: "Poonam", message: "Best wishes for your success!" },
        { id: 3, name: "Baby", message: "Lots of love and happiness!" }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {cardsData.map((item) => (
                <GreetingCard key={item.id} data={item} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
});

export default GreetingCardScreen;

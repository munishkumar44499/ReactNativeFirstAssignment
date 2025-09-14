import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";

const cardData = [
  { id: "1", title: "Card 1", description: "This is card 1" },
  { id: "2", title: "Card 2", description: "This is card 2" },
  { id: "3", title: "Card 3", description: "This is card 3" },
  { id: "4", title: "Card 4", description: "This is card 4" },
  { id: "5", title: "Card 5", description: "This is card 5" },
  { id: "6", title: "Card 6", description: "This is card 6" },
];

const CardGrid = () => {
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 2; 
  const cardWidth = screenWidth / numColumns - 24; 

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={[styles.card, { width: cardWidth }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  list: {
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#e6f0ff",
    borderRadius: 10,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#222",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});

export default CardGrid;

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todo.trim() === "") return;
        setTodos([...todos, { id: Date.now().toString(), text: todo }]);
        setTodo("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    return (
        <View style={styles.container}>

            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter todo..."
                    value={todo}
                    onChangeText={(text) => setTodo(text)}
                />
                <PrimaryButton buttonText="Add" action={addTodo} />
            </View>

            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={styles.todoText}>{item.text}</Text>
                        <TouchableOpacity
                            onPress={() => deleteTodo(item.id)}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    marginTop: 10,
  },
  inputRow: {
    margin:8,
    flexDirection: "row",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 8,
    borderRadius: 6,
    marginRight: 8,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "#beb9b9ff",
    borderRadius: 1,
    marginBottom: 1,
  },
  todoText: {
    flex: 1,               // 👈 takes remaining space
    fontSize: 16,
    marginRight: 10,       // space between text & button
  },
  buttonStyle: {
    borderRadius: 8,
    backgroundColor: "#ff0000",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  buttonTextStyle: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "600",
  },
});


export default TodoList;

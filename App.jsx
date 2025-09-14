
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Counter from './src/screens/Counter';
import ChatBox from './src/screens/ChatBox';
import PrimaryButton from './src/components/PrimaryButton';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GreetingCardScreen from './src/screens/GreetingCardScreen';
import ToggleTask from './src/screens/ToggleTask';
import TimerTask from './src/screens/TimerTask';
import InputHandling from './src/screens/InputHandling';
import TodoList from './src/screens/TodoList';
import CardGrid from './src/screens/CardGrid';
import DarkModeToggle from './src/screens/DarkModeToggle';
import ParentChildDemo from './src/screens/ParentChildDemo';
import CustomHookDemo from './src/screens/CustomHookDemo';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.appContainer}>
            <PrimaryButton buttonText="Counter" action={() => navigation.navigate("Counter")} />
            <PrimaryButton buttonText="Greeting Cards" action={() => navigation.navigate("GreetingCard")} />
            <PrimaryButton buttonText="Toggle Visibility" action={() => navigation.navigate("ToggleTask")} />
            <PrimaryButton buttonText="Timer Component" action={() => navigation.navigate("TimerTask")} />
            <PrimaryButton buttonText="Input Handling" action={() => navigation.navigate("InputHandling")} />
            <PrimaryButton buttonText="Todo List" action={() => navigation.navigate("TodoList")} />
            <PrimaryButton buttonText="Responsive Card Grid" action={() => navigation.navigate("CardGrid")} />
            <PrimaryButton buttonText="Memoized Component" action={() => navigation.navigate("MemoizedComponent")} />
            <PrimaryButton buttonText="Dark Mode Toggle" action={() => navigation.navigate("DarkModeToggle")} />
            <PrimaryButton buttonText="Custom Hook Demo" action={() => navigation.navigate("CustomHook")} />
            <PrimaryButton buttonText="Chat Box" action={() => navigation.navigate("ChatBox")} />
        </View>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Main Menu" }} />
                <Stack.Screen name="Counter" component={Counter} options={{ title: "Counter" }} />
                <Stack.Screen name="GreetingCard" component={GreetingCardScreen} options={{ title: "Greeting Cards" }} />
                <Stack.Screen name="ToggleTask" component={ToggleTask} options={{ title: "Toggle Visibility" }} />
                <Stack.Screen name="TimerTask" component={TimerTask} options={{ title: "Timer Component" }} />
                <Stack.Screen name="InputHandling" component={InputHandling} options={{ title: "Input Handling" }} />
                <Stack.Screen name="TodoList" component={TodoList} options={{ title: "Todo List" }} />
                <Stack.Screen name="CardGrid" component={CardGrid} options={{ title: "Responsive Card Grid" }} />
                <Stack.Screen name="MemoizedComponent" component={ParentChildDemo} options={{ title: "Memoized Component" }} />
                <Stack.Screen name="ChatBox" component={ChatBox} options={{ title: "Chat Box" }} />
                <Stack.Screen name="CustomHook" component={CustomHookDemo} options={{ title: "Custom Hook Demo" }} />
                <Stack.Screen name="DarkModeToggle" component={DarkModeToggle} options={{ title: "Dark Mode Toggle" }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
});

export default App
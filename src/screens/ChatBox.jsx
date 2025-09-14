import React, { useState } from "react";
import { TextInput,FlatList, TouchableOpacity, View,Text } from "react-native";
import chatboxstyles from "../styles/chatboxstyles";

const ChatBox = () => {

    const [list, setList] = useState([]);
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (message.trim() !== '') {
            setList([...list, message]);
            setMessage('');
        }
    }

    return (
        <View style={chatboxstyles.container}>
            <View style={chatboxstyles.chatArea}>
                <FlatList style={chatboxstyles.listStyle}
                    data={list}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text style={chatboxstyles.messageBg}>{`${item}`}</Text>
                    )}
                />
            </View>

            <View style={chatboxstyles.inputContainer}>
                <TextInput style={chatboxstyles.textInput} value={message} placeholder="type your message..." 
                onSubmitEditing={sendMessage} onChangeText={(value) => setMessage(value)}></TextInput>
                <TouchableOpacity style={chatboxstyles.btnSend} onPress={sendMessage}>
                    <Text style={chatboxstyles.textSend}>Send</Text>
                </TouchableOpacity>
            </View>


        </View>

    );

};


export default ChatBox
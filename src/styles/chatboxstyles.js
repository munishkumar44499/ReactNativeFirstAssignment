
import { StyleSheet } from "react-native";

const chatboxstyles = StyleSheet.create(
    {
        container: {
            backgroundColor: "#ffffff",
            flex: 1,
        },
        chatArea: {
            backgroundColor: "#ffffff",
            flex: 1,
        },
        listStyle:{
            backgroundColor:"#ffffff"
        },
        messageBg:{
            marginHorizontal:10,
            backgroundColor:"#9ac5d1ff",
            paddingVertical:8,
            paddingHorizontal:10,
            borderRadius:5,
            marginTop:8,
            alignSelf: 'flex-start',
        }
        ,
        inputContainer: {
            backgroundColor: "#fff",
            flexDirection: 'row',
            padding: 10,
            borderTopWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
        },

        textInput: {
            fontSize: 14,
            flex: 1,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: "#898787ff",
            padding: 10,
        },

        btnSend: {
            borderRadius: 5,
            marginStart: 10,
            backgroundColor: "#08733dff",
            paddingHorizontal: 15,
            paddingVertical: 10,
        },
        textSend: {
            color: "#ffffff",
            fontSize: 14,
        }
    }
);

export default chatboxstyles
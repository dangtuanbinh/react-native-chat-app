import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import {db} from "../firebase"
import { Button } from "react-native-elements";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
      headerTitleAlign: "center"
    });
  }, [navigation]);

  const createChat = async () => {
      await db.collection("chats").add({
          chatName: input
      }).then(() => {
          navigation.goBack()
      }).catch(err => alert(err))
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a Chat name"
        value={input}
        onChangeText={(value) => setInput(value)}
        onSubmitEditing={createChat}
        leftIcon={<Entypo name="chat" size={24} color="black" />}
      />
      <Button onPress={createChat} title="Add Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
      padding:20,
      height:"100%"
  },
});

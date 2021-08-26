import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";

// Inside "route", there are params
const ChatScreen = ({ navigation, route }) => {
  const chatName = route.params.chatName;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Avatar
            rounded
            source={{
              uri: "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png",
            }}
          />
          <Text style={styles.headerTitle}>{route.params.chatName}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}>
            <Entypo name="video-camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text>{route.params.chatName}</Text>
      </SafeAreaView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container:{
flex:1
    },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  headerRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 60,
  },
});

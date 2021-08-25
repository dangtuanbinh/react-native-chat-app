import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle:"Back to Login"
    })
  }, [navigation]);

  const register = () => {};
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text h3 style={{ marginBottom: 50 }}>
        Create an account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          autoFocus
          placeholder="Fullname"
          type="text"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          type="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Input
          placeholder="Profile picture(Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(value) => setImageUrl(value)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        title="Register"
        raised
        onPress={register}
        containerStyle={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  inputContainer: {
    width: 280,
    marginTop: 10,
  },
  button: {
    width: 200,
  },
});

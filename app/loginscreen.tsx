import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import Constants from "expo-constants";
import { LOGIN } from "@/constants/OnBoarding";
import { Button, Heading } from "tamagui";
import { Colors } from "@/constants/Colors";
import PMInput from "@/components/atomic/PMInput";

const LoginScreen = () => {
  const { screenType } = useLocalSearchParams();
  const isLoginScreen = screenType === LOGIN;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const goToDashboard = () => {
      router.replace("/(tabs)");
  };

  const inputConfigs = [
    {
      onChangeText: setFirstName,
      placeholderText: "Enter your firstname",
      value: firstName,
    },
    {
      onChangeText: setLastName,
      placeholderText: "Enter your lastname",
      value: lastName,
    },
    {
      onChangeText: setEmail,
      placeholderText: "Enter your email",
      value: email,
    },
    {
      onChangeText: setPassword,
      placeholderText: "Enter your password",
      value: password,
    },
    {
      onChangeText: setConfirmPassword,
      placeholderText: "Confirm your password",
      value: confirmPassword,
    },
  ];

  return (
    <View style={styles.container}>
      <Heading style={styles.heading} size={"$9"}>
        {isLoginScreen ? "Welcome Back!" : "New Here? Let's Begin!"}
      </Heading>
      {inputConfigs.map((config, index) => (
        <PMInput
          key={index}
          onChangeText={(text) => config.onChangeText(text)}
          placeholderText={config.placeholderText}
          value={config.value}
          containerStyle={styles.inputContainer}
        />
      ))}
      <Button style={styles.button} onPress={goToDashboard} size={"$3"}>
        Submit
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  heading: {
    color: Colors.light.title,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.light.primary_100,
    color: "white",
    width: "50%",
    position: "absolute",
    bottom: 60,
  },
  inputContainer: {
    marginBottom: 10,
    width: "100%",
  },
});

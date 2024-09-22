import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar />
      <Text>loginscreen</Text>

      <Text
        onPress={() => {
          router.back();
        }}
      >
        Hellpo
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

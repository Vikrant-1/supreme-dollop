import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const onboarding = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.center}>
        <Image
          source={require("../assets/images/onboarding.png")}
          style={styles.img}
        />
        <Text style={styles.centerTitle}>Enjoy Your Time</Text>
        <Text style={styles.centerSubtitle}>
          when you are confused about managing your task come to us
        </Text>
      </View>
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  container: {},
  center: {
    marginTop: 50,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: 300,
    resizeMode: "contain",
  },
  centerTitle: {
    color: "#363942",
    fontWeight: "bold",
    fontSize: 32,
  },
  centerSubtitle: {
    color: "#36394299",
    paddingHorizontal: 30,
    fontSize: 14,
    marginTop: 10,
  },
});

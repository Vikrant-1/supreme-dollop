import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "tamagui";
import { router } from "expo-router";
import { LOGIN, SIGNUP } from "@/constants/OnBoarding";

const onboarding = () => {
  const goToAuthPage = (screen: string) => {
    router.navigate({
      pathname: "/loginscreen",
      params: {
        screenType: screen,
      },
    });
  };

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

      <View style={styles.bottomView}>
        <Button
          style={styles.button}
          onPress={() => goToAuthPage(LOGIN)}
          size={"$5"}
        >
          Login
        </Button>
        <Button
          style={[styles.signButton]}
          onPress={() => goToAuthPage(SIGNUP)}
          size={"$5"}
        >
          Signup
        </Button>
      </View>
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    marginTop: "25%",
    paddingHorizontal: 40,
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 40,
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
  bottomView: {
    width: "100%",
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "#4B7BE5",
    color: "white",
    marginBottom: 12,
  },
  signButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#4B78E5",
  },
});

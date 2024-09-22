import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { Input } from "tamagui";

interface PMInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  value: string;
  onChangeText?: (text: string) => void;
  inputStyle?: StyleProp<TextStyle>;
  placeholderText: string;
}

const PMInput = ({
  containerStyle,
  value,
  onChangeText,
  inputStyle,
  placeholderText,
}: PMInputProps) => {
  return (
    <View style={containerStyle}>
      <Input
        placeholder={placeholderText}
        value={value}
        keyboardType="visible-password"
        onChangeText={onChangeText}
        size="$4"
        style={[styles.input, inputStyle]}
      />
    </View>
  );
};

export default PMInput;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingVertical: 3,
  },
});

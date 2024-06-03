import * as React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, FontFamily, FontSize } from "../GlobalStyles";

const Password = () => {
  return (
    <TextInput
      style={styles.password}
      placeholder="Password"
      autoCapitalize="none"
      secureTextEntry={true}
      placeholderTextColor="#6c757d"
    />
  );
};

const styles = StyleSheet.create({
  password: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
  },
});

export default Password;

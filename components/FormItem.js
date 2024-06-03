import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Password from "./Password";
import { Color, Padding } from "../GlobalStyles";

const FormItem = () => {
  return (
    <View style={styles.formItem}>
      <Image
        style={styles.labelIcon}
        resizeMode="cover"
        source={require("../assets/label1.png")}
      />
      <Password />
    </View>
  );
};

const styles = StyleSheet.create({
  labelIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 32,
    width: "100%",
    alignSelf: "stretch",
  },
  formItem: {
    backgroundColor: Color.colorGray_600,
    paddingBottom: Padding.p_base,
    zIndex: 0,
    alignSelf: "stretch",
  },
});

export default FormItem;

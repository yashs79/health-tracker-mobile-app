import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const UserLogin1 = () => {
  return (
    <View style={styles.userLogin}>
      <Text style={styles.appName}>APP Name</Text>
      <View style={[styles.frame7011Parent, styles.frame7011Position]}>
        <Image
          style={[styles.frame7011, styles.frame7011Position]}
          resizeMode="cover"
          source={require("../assets/frame-70-1-1.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>Powered By</Text>
      </View>
      <Image
        style={styles.userLoginChild}
        resizeMode="cover"
        source={require("../assets/group-43663.png")}
      />
      <Text style={[styles.text1, styles.textFlexBox]}>
        use your fingerprint to Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frame7011Position: {
    width: 145,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorRed,
    position: "absolute",
  },
  appName: {
    marginLeft: -167,
    top: 82,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    width: 333,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 2,
    color: Color.colorRed,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  frame7011: {
    marginLeft: -72.5,
    top: 27,
    height: 51,
  },
  text: {
    top: 0,
    left: 32,
    fontSize: FontSize.bodySmall_size,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frame7011Parent: {
    marginLeft: -73,
    top: 647,
    height: 78,
  },
  userLoginChild: {
    top: 256,
    left: 34,
    width: 324,
    height: 223,
    position: "absolute",
  },
  text1: {
    marginLeft: -104,
    top: 278,
    fontSize: FontSize.size_mini,
    lineHeight: 23,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    left: "50%",
  },
  userLogin: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UserLogin1;

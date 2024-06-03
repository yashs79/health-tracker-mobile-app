import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent4 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.frameLayout]}>
        <View style={[styles.frameGroup, styles.groupLayout]}>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupParent, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-43534.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{`Steps
1845`}</Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group22.png")}
          />
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={[styles.frameGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupParent, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-435341.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>{`Sleep
8h 33m`}</Text>
          <Image
            style={[styles.frameInner, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-29311.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleView, styles.frameLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 113,
    borderWidth: 1,
    borderColor: Color.colorGray_500,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 99,
    position: "absolute",
  },
  groupLayout: {
    height: 80,
    width: 80,
    position: "absolute",
  },
  textTypo: {
    height: 31,
    width: 46,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    top: 31,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupParent: {
    left: 0,
    top: 0,
    height: 80,
    width: 80,
  },
  text: {
    left: 17,
  },
  groupIcon: {
    height: "25.78%",
    width: "15.89%",
    top: "15.77%",
    right: "41.43%",
    bottom: "58.45%",
    left: "42.68%",
  },
  frameGroup: {
    top: 9,
    left: 16,
  },
  frameWrapper: {
    left: 0,
  },
  text1: {
    left: 18,
  },
  frameInner: {
    height: "19.9%",
    width: "31.41%",
    top: "18.52%",
    right: "34.29%",
    bottom: "61.58%",
    left: "34.29%",
  },
  frameContainer: {
    left: 123,
  },
  rectangleView: {
    left: 246,
  },
  frameParent: {
    top: 261,
    left: 15,
    width: 359,
    height: 99,
    position: "absolute",
  },
});

export default FrameComponent4;

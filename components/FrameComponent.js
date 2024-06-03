import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={styles.groupParent}>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-32.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.unionIcon, styles.frameItemPosition]}
            resizeMode="cover"
            source={require("../assets/union.png")}
          />
          <Image
            style={[styles.calendar2EventIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/calendar2event.png")}
          />
          <View style={[styles.aiParent, styles.iconLayout]}>
            <Text style={styles.ai}>{`AI
`}</Text>
            <Image
              style={[styles.vectorIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group-43668.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 391,
    position: "absolute",
  },
  frameItemPosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 31,
    height: 31,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    marginLeft: -195.5,
    top: 8,
    left: "50%",
    backgroundColor: Color.colorRed,
    height: 48,
  },
  frameItem: {
    left: 66,
    width: 62,
    height: 62,
  },
  vectorIcon: {
    height: "80.65%",
    width: "9.72%",
    top: "12.9%",
    right: "90.28%",
    bottom: "6.45%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  unionIcon: {
    left: 81,
    width: 32,
    height: 29,
  },
  calendar2EventIcon: {
    left: 257,
    overflow: "hidden",
  },
  ai: {
    top: 12,
    left: 11,
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.interRegular,
    color: Color.grayWhite,
    textAlign: "center",
    width: 7,
    height: 6,
    position: "absolute",
  },
  vectorIcon1: {
    left: 0,
    width: 31,
  },
  aiParent: {
    left: 168,
  },
  vectorParent: {
    top: 16,
    height: 31,
    left: 0,
    width: 288,
    position: "absolute",
  },
  groupParent: {
    left: 48,
    width: 288,
    top: 0,
    height: 62,
    position: "absolute",
  },
  rectangleParent: {
    top: 797,
    left: -1,
    height: 62,
  },
});

export default FrameComponent;

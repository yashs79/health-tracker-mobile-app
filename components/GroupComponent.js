import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent = ({ onUnionPress }) => {
  return (
    <View style={[styles.groupParent, styles.groupLayout1]}>
      <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
        <View style={[styles.rectangleWrapper, styles.groupWrapperPosition]}>
          <View style={[styles.groupChild, styles.groupWrapperPosition]} />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout1]}>
        <Image
          style={[styles.groupItem, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/group-32.png")}
        />
        <View style={[styles.groupFrame, styles.groupPosition1]}>
          <View style={[styles.groupView, styles.iconLayout]}>
            <View style={[styles.groupView, styles.iconLayout]}>
              <Image
                style={[styles.vectorIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Pressable style={styles.union} onPress={onUnionPress}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/union.png")}
                />
              </Pressable>
              <Image
                style={[styles.calendar2EventIcon, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/calendar2event.png")}
              />
              <View style={[styles.groupParent1, styles.groupLayout]}>
                <View style={[styles.groupWrapper1, styles.groupWrapperLayout]}>
                  <View style={[styles.groupWrapper2, styles.groupPosition]}>
                    <View style={[styles.groupWrapper2, styles.groupPosition]}>
                      <View
                        style={[styles.groupWrapper2, styles.groupPosition]}
                      >
                        <Text style={[styles.ai, styles.groupPosition]}>{`AI
`}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.groupInner, styles.groupPosition]}
                  resizeMode="cover"
                  source={require("../assets/group-43668.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 62,
    position: "absolute",
  },
  groupWrapperPosition: {
    height: 48,
    marginLeft: -195.5,
    width: 391,
    left: "50%",
    position: "absolute",
  },
  groupPosition1: {
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupLayout: {
    height: 31,
    width: 31,
  },
  groupWrapperLayout: {
    height: 6,
    width: 7,
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorRed,
    top: 0,
  },
  rectangleWrapper: {
    top: 0,
  },
  groupWrapper: {
    top: 8,
  },
  groupItem: {
    left: 66,
    width: 62,
    top: 0,
  },
  vectorIcon: {
    height: "80.65%",
    width: "9.72%",
    top: "12.9%",
    right: "90.28%",
    bottom: "6.45%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
  },
  union: {
    left: 81,
    width: 32,
    height: 29,
    top: 0,
    position: "absolute",
  },
  calendar2EventIcon: {
    left: 257,
    overflow: "hidden",
    position: "absolute",
    top: 0,
  },
  ai: {
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.interRegular,
    color: Color.grayWhite,
    textAlign: "center",
    height: 6,
    width: 7,
  },
  groupWrapper2: {
    height: 6,
    width: 7,
  },
  groupWrapper1: {
    top: 12,
    left: 11,
    position: "absolute",
  },
  groupInner: {
    height: 31,
    width: 31,
  },
  groupParent1: {
    left: 168,
    top: 0,
    position: "absolute",
  },
  groupView: {
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  groupFrame: {
    height: "50%",
    top: "25.81%",
    bottom: "24.19%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  groupContainer: {
    left: 48,
    width: 288,
    top: 0,
  },
  groupParent: {
    marginLeft: -196,
    top: 797,
    width: 391,
    left: "50%",
    height: 62,
  },
});

export default GroupComponent;

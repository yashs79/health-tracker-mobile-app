import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent6 = () => {
  return (
    <View style={styles.heartBeatParent}>
      <Text style={styles.heartBeat}>Heart Beat</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.groupParent}>
          <View style={styles.frameParent}>
            <View style={styles.parent}>
              <Text style={styles.text}>100</Text>
              <View style={styles.frameItem} />
            </View>
            <View style={[styles.group, styles.groupPosition]}>
              <Text style={styles.text}>80</Text>
              <View style={styles.frameItem} />
            </View>
            <View style={[styles.container, styles.groupPosition]}>
              <Text style={styles.text}>75</Text>
              <View style={styles.frameItem} />
            </View>
            <Text style={styles.todayAvg80bpm}>Today avg: 80bpm</Text>
          </View>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/vector-8.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 5,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  heartBeat: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.badgeLabel_size,
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderWidth: 0.5,
    width: 359,
    height: 179,
    zIndex: 0,
    borderColor: Color.colorSilver_100,
  },
  text: {
    fontSize: FontSize.bodySmall_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.grayBlack,
  },
  frameItem: {
    borderStyle: "dashed",
    borderRadius: 0.001,
    borderTopWidth: 1,
    width: 263,
    height: 1,
    marginLeft: 7,
    borderColor: Color.colorSilver_100,
  },
  parent: {
    top: 28,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  group: {
    top: 68,
  },
  container: {
    top: 105,
  },
  todayAvg80bpm: {
    left: 199,
    color: Color.grayBlack,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.badgeLabel_size,
    position: "absolute",
  },
  frameParent: {
    left: 0,
    top: 0,
    height: 126,
    width: 312,
    position: "absolute",
  },
  groupChild: {
    top: 51,
    left: 33,
    width: 261,
    height: 49,
    position: "absolute",
  },
  groupParent: {
    top: 26,
    left: 24,
    zIndex: 1,
    height: 126,
    width: 312,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 5,
  },
  heartBeatParent: {
    top: 401,
    left: 18,
    position: "absolute",
  },
});

export default FrameComponent6;

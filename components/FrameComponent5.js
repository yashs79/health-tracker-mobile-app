import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent5 = () => {
  return (
    <View style={styles.oxygenParent}>
      <Text style={styles.oxygen}>Oxygen</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.vectorParent}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/vector-2.png")}
          />
          <View style={styles.todayAvg99Parent}>
            <Text style={styles.todayAvg99}>Today : avg.99%</Text>
            <View style={styles.frameParent}>
              <View>
                <Text style={styles.textTypo}>100%</Text>
                <Text style={[styles.text1, styles.textTypo]}>99%</Text>
                <Text style={[styles.text1, styles.textTypo]}>98%</Text>
              </View>
              <View style={styles.lineParent}>
                <View style={styles.lineViewLayout} />
                <View style={[styles.lineView, styles.lineViewLayout]} />
                <View style={[styles.lineView, styles.lineViewLayout]} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.badgeLabel_size,
  },
  lineViewLayout: {
    height: 1,
    width: 262,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorSilver_200,
    borderStyle: "dashed",
  },
  oxygen: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.badgeLabel_size,
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorSilver_100,
    borderWidth: 0.5,
    height: 179,
    zIndex: 0,
    alignSelf: "stretch",
  },
  frameItem: {
    top: 40,
    left: 41,
    width: 261,
    height: 28,
    position: "absolute",
  },
  todayAvg99: {
    color: Color.grayBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.badgeLabel_size,
  },
  text1: {
    marginTop: 22,
  },
  lineView: {
    marginTop: 40,
  },
  lineParent: {
    marginLeft: 5,
  },
  frameParent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  todayAvg99Parent: {
    top: 0,
    left: 0,
    alignItems: "flex-end",
    position: "absolute",
  },
  vectorParent: {
    top: 24,
    left: 24,
    width: 301,
    height: 130,
    zIndex: 1,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  oxygenParent: {
    top: 613,
    left: 18,
    width: 359,
    position: "absolute",
  },
});

export default FrameComponent5;

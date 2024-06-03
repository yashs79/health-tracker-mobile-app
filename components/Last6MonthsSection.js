import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Last6MonthsSection = () => {
  return (
    <View style={styles.healthPerformanceParent}>
      <Text style={[styles.healthPerformance, styles.textTypo]}>
        Health Performance
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.frameParent}>
          <View style={[styles.frameGroup, styles.frameGroupPosition]}>
            <View style={styles.frameContainer}>
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo]}>100%</Text>
                <Text style={[styles.text1, styles.textTypo]}>70%</Text>
                <Text style={[styles.text1, styles.textTypo]}>50%</Text>
                <Text style={[styles.text1, styles.textTypo]}>10%</Text>
                <Text style={[styles.text1, styles.textTypo]}>0%</Text>
              </View>
              <View style={styles.lineParent}>
                <View style={styles.frameChild} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameChild1, styles.frameLayout]} />
              </View>
            </View>
            <View style={styles.decParent}>
              <Text style={[styles.text, styles.textTypo]}>Dec</Text>
              <Text style={[styles.jan, styles.textTypo]}>Jan</Text>
              <Text style={[styles.jan, styles.textTypo]}>Feb</Text>
              <Text style={[styles.jan, styles.textTypo]}>Mar</Text>
              <Text style={[styles.jan, styles.textTypo]}>Apr</Text>
              <Text style={[styles.jan, styles.textTypo]}>Jun</Text>
            </View>
          </View>
          <View style={[styles.vectorParent, styles.vectorLayout]}>
            <Image
              style={[styles.vectorIcon, styles.vectorLayout]}
              resizeMode="cover"
              source={require("../assets/vector-1.png")}
            />
            <View style={styles.frameView}>
              <View
                style={[
                  styles.feb3Corona5Wrapper,
                  styles.last6MonthsParentFlexBox,
                ]}
              >
                <Text style={[styles.feb3Corona, styles.feb3CoronaTypo]}>{`Feb 3
Corona
5%`}</Text>
              </View>
              <Image
                style={styles.polygonIcon}
                resizeMode="cover"
                source={require("../assets/polygon-4.png")}
              />
            </View>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-34.png")}
            />
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.last6MonthsParentFlexBox}>
            <Text style={[styles.last6Months, styles.feb3CoronaTypo]}>
              Last 6 months
            </Text>
            <Image
              style={styles.iconSelectDown}
              resizeMode="cover"
              source={require("../assets/-iconselectdown1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.badgeLabel_size,
  },
  frameGroupPosition: {
    left: 0,
    top: 0,
  },
  frameLayout: {
    marginTop: 45,
    height: 1,
    width: 270,
    borderTopWidth: 1,
    borderColor: Color.colorSilver_100,
  },
  vectorLayout: {
    height: 147,
    position: "absolute",
  },
  last6MonthsParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  feb3CoronaTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.badgeLabel_size,
  },
  healthPerformance: {
    color: Color.colorGray_100,
  },
  groupChild: {
    marginLeft: -179.5,
    left: "50%",
    backgroundColor: Color.grayWhite,
    borderColor: Color.colorSilver_200,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 0,
    height: 281,
    width: 359,
    position: "absolute",
  },
  text: {
    color: Color.grayBlack,
  },
  text1: {
    marginTop: 37,
    color: Color.grayBlack,
  },
  parent: {
    alignItems: "center",
  },
  frameChild: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorSilver_100,
    width: 270,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  frameItem: {
    borderRadius: 0.001,
    borderStyle: "dashed",
    marginTop: 45,
  },
  frameChild1: {
    borderStyle: "solid",
  },
  lineParent: {
    marginLeft: 12,
  },
  frameContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  jan: {
    marginLeft: 24,
    color: Color.grayBlack,
  },
  decParent: {
    marginTop: 5,
    flexDirection: "row",
  },
  frameGroup: {
    alignItems: "flex-end",
    position: "absolute",
  },
  vectorIcon: {
    width: 258,
    left: 0,
    top: 0,
  },
  feb3Corona: {
    color: Color.grayWhite,
  },
  feb3Corona5Wrapper: {
    backgroundColor: Color.colorGray_400,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_9xs,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  polygonIcon: {
    width: 22,
    height: 16,
    marginTop: -4,
  },
  frameView: {
    top: 63,
    left: 65,
    alignItems: "center",
    position: "absolute",
  },
  ellipseIcon: {
    top: 134,
    left: 92,
    width: 13,
    height: 13,
    position: "absolute",
  },
  vectorParent: {
    top: 23,
    left: 50,
    width: 270,
    height: 147,
  },
  frameParent: {
    top: 51,
    left: 17,
    width: 321,
    height: 211,
    position: "absolute",
  },
  last6Months: {
    color: Color.grayBlack,
  },
  iconSelectDown: {
    width: 9,
    height: 8,
    marginLeft: 5,
    overflow: "hidden",
  },
  frameWrapper: {
    top: 10,
    left: 222,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 125,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    alignSelf: "stretch",
    marginTop: 10,
    height: 281,
  },
  healthPerformanceParent: {
    top: 82,
    left: 18,
    width: 359,
    position: "absolute",
  },
});

export default Last6MonthsSection;

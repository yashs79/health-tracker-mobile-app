import * as React from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import FrameComponent2 from "./FrameComponent2";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.recentDiagnoseParent}>
        <Text style={[styles.recentDiagnose, styles.endocrinologyTypo]}>
          Recent Diagnose
        </Text>
        <Text style={[styles.viewAll, styles.viewTypo]}>View all</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <FrameComponent2
          vector={require("../assets/vector5.png")}
          orthopedic="Orthopedic"
        />
        <FrameComponent2
          vector={require("../assets/vector6.png")}
          orthopedic="ENT"
          propMarginTop={10}
          propWidth={23}
          propHeight={28}
          propMarginLeft={129}
        />
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.frameView}>
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <ImageBackground
                style={styles.image8Wrapper}
                resizeMode="cover"
                source={require("../assets/frame43.png")}
              >
                <View style={styles.image8} />
              </ImageBackground>
            </View>
            <View style={styles.endocrinologyWrapper}>
              <Text style={[styles.endocrinology, styles.endocrinologyTypo]}>
                Endocrinology
              </Text>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.frameWrapperFlexBox}>
              <Text style={[styles.viewDetails, styles.viewTypo]}>
                View details
              </Text>
              <Image
                style={styles.iconSelectDown}
                resizeMode="cover"
                source={require("../assets/-iconselectdown.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  endocrinologyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  viewTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.badgeLabel_size,
  },
  frameFlexBox: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameWrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  recentDiagnose: {
    color: Color.colorGray_100,
    fontSize: FontSize.badgeLabel_size,
    fontFamily: FontFamily.poppinsRegular,
  },
  viewAll: {
    color: Color.colorBlue,
    marginLeft: 206,
  },
  recentDiagnoseParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  image8: {
    top: 2,
    left: 1,
    backgroundColor: Color.colorRed,
    width: 32,
    height: 28,
    position: "absolute",
  },
  image8Wrapper: {
    width: 34,
    height: 32,
  },
  frameWrapper: {
    borderRadius: Border.br_xs,
    borderColor: Color.colorRed,
    width: 57,
    height: 57,
    padding: Padding.p_xs,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
  },
  endocrinology: {
    fontSize: FontSize.bodySmall_size,
    color: Color.grayBlack,
  },
  endocrinologyWrapper: {
    marginLeft: 9,
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewDetails: {
    color: Color.grayBlack,
  },
  iconSelectDown: {
    width: 8,
    height: 9,
    marginLeft: 5,
    overflow: "hidden",
  },
  frameWrapper1: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    marginLeft: 56,
    overflow: "hidden",
  },
  frameContainer: {
    flexDirection: "row",
  },
  frameGroup: {
    borderRadius: Border.br_3xs,
    borderColor: Color.colorSilver_100,
    padding: Padding.p_base,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
  },
  frameParent: {
    top: 717,
    left: 16,
    width: 359,
    alignItems: "center",
    position: "absolute",
  },
});

export default FrameComponent1;

import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Last6MonthsSection from "../components/Last6MonthsSection";
import GroupComponent4 from "../components/GroupComponent4";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HealthTrends = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.healthTrends}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.healthTrendsParent, styles.parentFlexBox]}>
          <Text style={styles.healthTrends1}>Health Trends</Text>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Dashboaard")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/frame-236.png")}
              />
            </Pressable>
            <View style={styles.groupWrapper}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <FrameComponent6 />
      <FrameComponent5 />
      <Last6MonthsSection />
      <View style={styles.updatedOn2ndApril2024Parent}>
        <Text
          style={[styles.updatedOn2nd, styles.updatedTypo]}
        >{`Updated on 2nd April 2024, `}</Text>
        <Text style={[styles.updatedByMaker, styles.updatedTypo]}>
          Updated by Maker 1
        </Text>
      </View>
      <Image
        style={styles.healthTrendsChild}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <GroupComponent4
        onGroupPressablePress={() => navigation.navigate("Dashboaard")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  updatedTypo: {
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_6xs,
    top: 0,
    height: 11,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorRed,
    width: 390,
    height: 44,
    zIndex: 0,
  },
  healthTrends1: {
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.grayWhite,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 27,
    height: 26,
  },
  groupIcon: {
    width: 21,
    height: 18,
  },
  groupWrapper: {
    width: 33,
    padding: Padding.p_8xs,
    marginLeft: 10,
  },
  frameParent: {
    marginLeft: 190,
  },
  healthTrendsParent: {
    top: 8,
    left: 8,
    zIndex: 1,
    position: "absolute",
  },
  rectangleParent: {
    top: 31,
    left: 0,
    position: "absolute",
  },
  updatedOn2nd: {
    marginLeft: -193,
    width: 94,
    left: "50%",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_6xs,
    top: 0,
  },
  updatedByMaker: {
    right: 0,
    width: 69,
  },
  updatedOn2ndApril2024Parent: {
    marginLeft: -191,
    top: 825,
    width: 386,
    height: 11,
    left: "50%",
    position: "absolute",
  },
  healthTrendsChild: {
    top: 678,
    left: 336,
    width: 39,
    height: 39,
    position: "absolute",
  },
  healthTrends: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 894,
    overflow: "hidden",
    width: "100%",
  },
});

export default HealthTrends;

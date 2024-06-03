import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={[styles.groupParent, styles.groupLayout]}>
      <View style={[styles.rectangleWrapper, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
        <View style={[styles.eveningParent, styles.groupWrapperLayout]}>
          <Text style={styles.evening}>Evening</Text>
          <Text style={[styles.pm, styles.pmTypo]}>4:00-4:30 PM</Text>
          <Text
            style={[styles.grapeFruitSmoothie, styles.pmTypo]}
          >{`Grape fruit smoothie with granola
`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 80,
    width: 393,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  groupWrapperLayout: {
    height: 62,
    width: 260,
    position: "absolute",
  },
  pmTypo: {
    fontSize: FontSize.badgeLabel_size,
    left: "50%",
    textAlign: "center",
    color: Color.grayBlack,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderWidth: 1,
    height: 80,
    width: 393,
    position: "absolute",
  },
  rectangleWrapper: {
    height: 80,
    width: 393,
    position: "absolute",
  },
  evening: {
    left: 100,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  pm: {
    marginLeft: -101,
    top: 23,
    width: 203,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.badgeLabel_size,
    left: "50%",
  },
  grapeFruitSmoothie: {
    marginLeft: -130,
    top: 44,
    fontFamily: FontFamily.poppinsRegular,
    height: 18,
    fontSize: FontSize.badgeLabel_size,
    left: "50%",
    width: 260,
  },
  eveningParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 9,
    left: 69,
  },
  groupParent: {
    top: 742,
    left: -2,
  },
});

export default GroupComponent1;

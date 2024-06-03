import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View style={[styles.groupParent, styles.groupParentLayout]}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <View style={[styles.groupItem, styles.groupBorder]} />
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={[styles.groupWrapper, styles.lunchParentLayout]}>
        <View style={[styles.lunchParent, styles.lunchParentLayout]}>
          <Text style={styles.lunch}>Lunch</Text>
          <Text style={[styles.pm, styles.pmTypo]}>2:00-2:30 PM</Text>
          <Text
            style={[styles.quinoaRiceBowl, styles.pmTypo]}
          >{`Quinoa rice bowl
`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 80,
    width: 393,
  },
  parentPosition: {
    left: 0,
    top: 0,
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
    position: "absolute",
  },
  lunchParentLayout: {
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
    borderColor: Color.colorGray_500,
    left: 0,
    top: 0,
    height: 80,
    width: 393,
  },
  groupItem: {
    top: 5,
    left: 11,
    borderRadius: Border.br_base,
    borderColor: Color.colorRed,
    width: 70,
    height: 70,
  },
  rectangleParent: {
    height: 80,
    width: 393,
    position: "absolute",
  },
  vectorIcon: {
    height: "60%",
    width: "12.47%",
    top: "20%",
    right: "81.93%",
    bottom: "20%",
    left: "5.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  lunch: {
    left: 108,
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
  quinoaRiceBowl: {
    marginLeft: -130,
    top: 44,
    fontFamily: FontFamily.poppinsRegular,
    height: 18,
    fontSize: FontSize.badgeLabel_size,
    left: "50%",
    width: 260,
  },
  lunchParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 9,
    left: 68,
  },
  groupParent: {
    top: 652,
    left: -2,
    position: "absolute",
  },
});

export default GroupComponent2;

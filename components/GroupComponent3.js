import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const GroupComponent3 = () => {
  return (
    <View style={[styles.groupParent, styles.groupParentLayout]}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <View style={[styles.groupItem, styles.groupBorder]} />
      </View>
      <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
        <View style={[styles.midMealParent, styles.groupWrapperLayout]}>
          <Text style={styles.midMeal}>Mid-Meal</Text>
          <Text style={[styles.am, styles.amTypo]}>11:00-11:30 AM</Text>
          <Text
            style={[styles.greenSaladBowlorange, styles.amTypo]}
          >{`Green salad bowl,Orange juice
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
  groupWrapperLayout: {
    height: 62,
    width: 260,
    position: "absolute",
  },
  amTypo: {
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
    left: 12,
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
  midMeal: {
    left: 94,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  am: {
    marginLeft: -101,
    top: 23,
    width: 203,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.badgeLabel_size,
    left: "50%",
  },
  greenSaladBowlorange: {
    marginLeft: -130,
    top: 44,
    fontFamily: FontFamily.poppinsRegular,
    height: 18,
    fontSize: FontSize.badgeLabel_size,
    left: "50%",
    width: 260,
  },
  midMealParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 9,
    left: 67,
  },
  groupParent: {
    top: 562,
    left: -2,
    position: "absolute",
    width: 393,
  },
});

export default GroupComponent3;

import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Water = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.water}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.todaysDietPlanParent, styles.parentFlexBox]}>
          <Text style={styles.todaysDietPlan}>Today's diet plan</Text>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("DietPlan")}
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
      <View style={styles.waterChild} />
      <View style={styles.waterParent}>
        <Text style={styles.water1}>Water</Text>
        <Text style={[styles.listView, styles.meals1Typo]}>List view</Text>
        <Pressable
          style={styles.meals}
          onPress={() => navigation.navigate("DietPlan")}
        >
          <Text style={styles.meals1Typo}>Meals</Text>
        </Pressable>
      </View>
      <View style={styles.waterItem} />
      <View style={[styles.waterInner, styles.waterInnerLayout]}>
        <View style={[styles.groupChild, styles.waterInnerLayout]} />
      </View>
      <View style={styles.updatedOn2ndApril2024Parent}>
        <Text
          style={[styles.updatedOn2nd, styles.updatedTypo]}
        >{`Updated on 2nd April 2024, `}</Text>
        <Text style={[styles.updatedByMaker, styles.updatedTypo]}>
          Updated by Maker 1
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={styles.groupContainer}>
          <View style={styles.groupContainer}>
            <View style={styles.groupContainer}>
              <View style={[styles.groupItem, styles.groupBorder]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.groupGroup, styles.groupPosition]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={[styles.groupIcon4, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group4.png")}
          />
          <Image
            style={[styles.groupIcon5, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group5.png")}
          />
        </View>
        <View style={[styles.groupParent1, styles.groupParentPosition1]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group6.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group7.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group8.png")}
          />
          <Image
            style={[styles.groupIcon4, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group9.png")}
          />
          <Image
            style={[styles.groupIcon5, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group10.png")}
          />
        </View>
        <View style={[styles.groupParent2, styles.groupParentPosition1]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group11.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group12.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group13.png")}
          />
          <Image
            style={[styles.groupIcon4, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group14.png")}
          />
          <Image
            style={[styles.groupIcon5, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group15.png")}
          />
        </View>
        <View style={styles.groupParent3}>
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group16.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group17.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group18.png")}
          />
          <Image
            style={[styles.groupIcon4, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group19.png")}
          />
          <Image
            style={[styles.groupIcon5, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group20.png")}
          />
        </View>
      </View>
      <View style={styles.groupParent4}>
        <View style={[styles.groupParent5, styles.groupParentPosition]}>
          <Image
            style={[styles.groupIcon21, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.yetToConsume, styles.consumedTypo]}>
            Yet to consume
          </Text>
        </View>
        <View style={[styles.groupParent6, styles.groupParentPosition]}>
          <Image
            style={[styles.groupIcon22, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group21.png")}
          />
          <Text style={[styles.consumed, styles.consumedTypo]}>Consumed</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View
          style={[
            styles.intakeOfMoreWaterSuggestedParent,
            styles.parentPosition,
          ]}
        >
          <Text style={[styles.intakeOfMore, styles.consumedTypo]}>
            Intake of more water suggested.
          </Text>
          <Image
            style={[styles.groupChild1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-43650.png")}
          />
        </View>
      </View>
      <Image
        style={styles.waterChild1}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <GroupComponent onUnionPress={() => navigation.navigate("Dashboaard")} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  meals1Typo: {
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
  },
  waterInnerLayout: {
    height: 2,
    width: 67,
    position: "absolute",
  },
  updatedTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_6xs,
    height: 11,
    color: Color.grayBlack,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout1: {
    height: 199,
    width: 365,
    left: "50%",
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 0.5,
    borderColor: Color.colorGray_800,
    backgroundColor: Color.grayWhite,
    borderRadius: Border.br_3xs,
    marginLeft: -182.5,
    borderStyle: "solid",
    top: 0,
  },
  groupPosition: {
    top: "0%",
    right: "0%",
    width: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentPosition1: {
    height: "18.55%",
    left: "0%",
    position: "absolute",
  },
  groupParentPosition: {
    height: "38.16%",
    left: "0%",
    position: "absolute",
  },
  consumedTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.grayBlack,
    position: "absolute",
  },
  groupLayout: {
    height: 78,
    width: 365,
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: 8,
    position: "absolute",
  },
  frameChild: {
    height: 44,
    zIndex: 0,
    width: 390,
    backgroundColor: Color.colorRed,
  },
  todaysDietPlan: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.grayWhite,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
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
    marginLeft: 151,
  },
  todaysDietPlanParent: {
    top: 8,
    zIndex: 1,
    left: 8,
    position: "absolute",
  },
  rectangleParent: {
    top: 31,
    left: 0,
    position: "absolute",
  },
  waterChild: {
    marginLeft: -195,
    top: 80,
    height: 46,
    left: "50%",
    width: 390,
    position: "absolute",
  },
  water1: {
    marginLeft: -26,
    color: Color.colorRed,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  listView: {
    left: 269,
    top: 0,
    position: "absolute",
  },
  meals: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  waterParent: {
    marginLeft: -164,
    top: 87,
    width: 336,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  waterItem: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: Color.colorGray_700,
    borderTopWidth: 1,
    height: 354,
    borderStyle: "solid",
    top: 108,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    top: 0,
    backgroundColor: Color.colorRed,
    left: 0,
  },
  waterInner: {
    left: 164,
    top: 108,
    height: 2,
    width: 67,
  },
  updatedOn2nd: {
    marginLeft: -192.5,
    width: 94,
    left: "50%",
  },
  updatedByMaker: {
    right: 0,
    width: 69,
  },
  updatedOn2ndApril2024Parent: {
    marginLeft: -192,
    top: 783,
    width: 385,
    height: 11,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    height: 199,
    width: 365,
    left: "50%",
    position: "absolute",
  },
  groupContainer: {
    marginLeft: -182.5,
    height: 199,
    width: 365,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupView: {
    marginLeft: -182,
    top: 165,
  },
  groupIcon1: {
    right: "92.77%",
    width: "7.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
  },
  groupIcon2: {
    right: "69.58%",
    left: "23.19%",
    width: "7.23%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIcon3: {
    right: "46.38%",
    left: "46.38%",
    width: "7.23%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIcon4: {
    right: "23.19%",
    left: "69.58%",
    width: "7.23%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIcon5: {
    left: "92.77%",
    width: "7.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
  },
  groupGroup: {
    bottom: "81.45%",
    left: "0%",
    right: "0%",
    height: "18.55%",
    position: "absolute",
  },
  groupParent1: {
    top: "27.13%",
    bottom: "54.32%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "18.55%",
  },
  groupParent2: {
    top: "54.32%",
    bottom: "27.13%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "18.55%",
  },
  groupParent3: {
    top: "81.45%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "18.55%",
    position: "absolute",
    width: "100%",
  },
  groupParent: {
    height: "20.5%",
    width: "81.92%",
    top: "20.31%",
    right: "9.1%",
    bottom: "59.19%",
    left: "8.97%",
    position: "absolute",
  },
  groupIcon21: {
    width: "14.99%",
    right: "85.01%",
    left: "0%",
  },
  yetToConsume: {
    top: 7,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    left: 43,
    fontFamily: FontFamily.interRegular,
  },
  groupParent5: {
    bottom: "61.84%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon22: {
    width: "19.25%",
    right: "80.75%",
    left: "0%",
  },
  consumed: {
    top: 6,
    fontSize: FontSize.size_mini,
    left: 43,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  groupParent6: {
    width: "77.87%",
    top: "61.72%",
    right: "22.13%",
    bottom: "0.12%",
  },
  groupParent4: {
    height: "9.96%",
    width: "39.51%",
    top: "45.77%",
    right: "30.23%",
    bottom: "44.26%",
    left: "30.26%",
    position: "absolute",
  },
  groupInner: {
    borderWidth: 0.5,
    borderColor: Color.colorGray_800,
    backgroundColor: Color.grayWhite,
    borderRadius: Border.br_3xs,
    marginLeft: -182.5,
    borderStyle: "solid",
    top: 0,
  },
  intakeOfMore: {
    top: 11,
    left: 59,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
  },
  groupChild1: {
    width: "14%",
    right: "86%",
    left: "0%",
  },
  intakeOfMoreWaterSuggestedParent: {
    top: 16,
    width: 350,
    height: 45,
  },
  rectangleGroup: {
    marginLeft: -183,
    top: 524,
  },
  waterChild1: {
    top: 678,
    left: 336,
    width: 39,
    height: 39,
    position: "absolute",
  },
  water: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Water;

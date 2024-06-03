import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import RecommendedSection from "../components/RecommendedSection";
import GroupComponent4 from "../components/GroupComponent4";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Breakfast = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.breakfast}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.breakfastParent, styles.parentFlexBox]}>
          <Text style={styles.breakfast1}>Breakfast</Text>
          <View style={[styles.componentParent, styles.parentFlexBox]}>
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
      <View style={styles.updatedOn2ndApril2024Parent}>
        <Text
          style={[styles.updatedOn2nd, styles.updatedTypo]}
        >{`Updated on 2nd April 2024, `}</Text>
        <Text style={[styles.updatedByMaker, styles.updatedTypo]}>
          Updated by Maker 1
        </Text>
      </View>
      <SectionCard />
      <RecommendedSection />
      <View style={styles.groupParent}>
        <View style={[styles.consumedWrapper, styles.consumedLayout]}>
          <Text style={[styles.consumed, styles.consumedTypo]}>Consumed</Text>
        </View>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <View style={styles.eggsOmeletteWithWholeWheatParent}>
              <Text
                style={styles.eggsOmeletteWith}
              >{`2 eggs omelette with whole wheat toast, 
1 cup skimmed milk`}</Text>
              <View style={styles.groupView}>
                <View style={[styles.groupFrame, styles.groupLayout2]}>
                  <View style={[styles.groupFrame, styles.groupLayout2]}>
                    <Text style={[styles.gmCarbs, styles.gmFatsTypo]}>
                      85gm Carbs
                    </Text>
                    <View
                      style={[styles.rectangleWrapper, styles.rectangleLayout]}
                    >
                      <View style={[styles.groupItem, styles.groupLayout1]} />
                    </View>
                  </View>
                </View>
                <View style={[styles.groupWrapper1, styles.groupLayout2]}>
                  <View style={[styles.groupFrame, styles.groupLayout2]}>
                    <Text style={[styles.gmFats, styles.gmFatsTypo]}>
                      30gm Fats
                    </Text>
                    <View
                      style={[styles.rectangleWrapper, styles.rectangleLayout]}
                    >
                      <View style={[styles.groupInner, styles.groupLayout1]} />
                    </View>
                  </View>
                </View>
                <View style={[styles.groupWrapper2, styles.proteinsPosition]}>
                  <View
                    style={[styles.gmProteinsParent, styles.proteinsPosition]}
                  >
                    <Text style={[styles.gmProteins, styles.proteinsPosition]}>
                      20gm Proteins
                    </Text>
                    <View
                      style={[styles.rectangleFrame, styles.rectangleLayout]}
                    >
                      <View
                        style={[styles.rectangleView, styles.groupLayout1]}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.calParent, styles.calPosition]}>
            <Text style={[styles.cal, styles.calPosition]}>600cal</Text>
            <Image
              style={[styles.groupIcon1, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group30.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <View
          style={[
            styles.intakeCaloriesOvershotBy11Parent,
            styles.parentPosition,
          ]}
        >
          <Text
            style={[styles.intakeCaloriesOvershot, styles.consumedTypo]}
          >{`Intake calories overshot by 110 `}</Text>
          <Image
            style={[styles.groupChild2, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-436501.png")}
          />
        </View>
      </View>
      <Image
        style={styles.breakfastChild}
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
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_6xs,
    color: Color.grayBlack,
    top: 0,
    height: 11,
    textAlign: "left",
    position: "absolute",
  },
  consumedLayout: {
    height: 30,
    width: 193,
    top: 0,
    left: "50%",
  },
  consumedTypo: {
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    height: 131,
    marginLeft: -189.95,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  groupChildBorder: {
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupLayout2: {
    width: 70,
    height: 22,
    top: 0,
    position: "absolute",
  },
  gmFatsTypo: {
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.grayBlack,
  },
  rectangleLayout: {
    height: 4,
    top: 18,
    width: 70,
    position: "absolute",
  },
  groupLayout1: {
    borderRadius: Border.br_9xs,
    height: 4,
    width: 70,
    top: 0,
    left: 0,
    position: "absolute",
  },
  proteinsPosition: {
    width: 76,
    top: 0,
    position: "absolute",
  },
  calPosition: {
    width: 37,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild1Layout: {
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
    backgroundColor: Color.colorRed,
    width: 390,
    height: 44,
    zIndex: 0,
  },
  breakfast1: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.grayWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  componentParent: {
    marginLeft: 209,
  },
  breakfastParent: {
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
  updatedOn2nd: {
    width: 94,
    color: Color.grayBlack,
    left: "50%",
    marginLeft: -193,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_6xs,
  },
  updatedByMaker: {
    right: 0,
    width: 69,
    color: Color.grayBlack,
  },
  updatedOn2ndApril2024Parent: {
    top: 782,
    width: 386,
    height: 11,
    left: "50%",
    marginLeft: -193,
    position: "absolute",
  },
  consumed: {
    marginLeft: -96.3,
    color: Color.colorRed,
    height: 30,
    width: 193,
    top: 0,
    left: "50%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lgi,
  },
  consumedWrapper: {
    marginLeft: -185.75,
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorGray_500,
    borderWidth: 1,
    height: 131,
    marginLeft: -189.95,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  eggsOmeletteWith: {
    marginLeft: -163.8,
    fontSize: FontSize.size_mini,
    width: 226,
    height: 72,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.grayBlack,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  gmCarbs: {
    left: 2,
    width: 66,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorLightcoral,
  },
  rectangleWrapper: {
    left: 0,
  },
  groupFrame: {
    left: 0,
  },
  gmFats: {
    left: 6,
    width: 57,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorYellow_100,
  },
  groupWrapper1: {
    left: 117,
  },
  gmProteins: {
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.grayBlack,
    left: 0,
  },
  rectangleView: {
    backgroundColor: Color.colorCornflowerblue_100,
  },
  rectangleFrame: {
    left: 3,
  },
  gmProteinsParent: {
    height: 22,
    left: 0,
  },
  groupWrapper2: {
    left: 231,
    height: 22,
  },
  groupView: {
    top: 89,
    left: 20,
    width: 308,
    height: 22,
    position: "absolute",
  },
  eggsOmeletteWithWholeWheatParent: {
    marginLeft: -172.15,
    top: 9,
    width: 328,
    height: 111,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
  },
  cal: {
    marginLeft: -18.3,
    top: 38,
    fontFamily: FontFamily.capriolaRegular,
    height: 14,
    fontSize: FontSize.size_3xs,
    width: 37,
    textAlign: "center",
    color: Color.grayBlack,
  },
  groupIcon1: {
    height: "54.58%",
    width: "71.86%",
    right: "16.67%",
    bottom: "45.42%",
    left: "11.48%",
  },
  calParent: {
    marginLeft: 134.45,
    top: 6,
    height: 51,
  },
  groupContainer: {
    top: 30,
  },
  groupParent: {
    marginLeft: -189,
    top: 599,
    height: 161,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  groupChild1: {
    marginLeft: -182.5,
    borderColor: Color.colorGray_800,
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  intakeCaloriesOvershot: {
    top: 16,
    left: 59,
    fontFamily: FontFamily.interRegular,
    color: Color.grayBlack,
  },
  groupChild2: {
    width: "14.58%",
    right: "85.42%",
    bottom: "0%",
    left: "0%",
    height: "100%",
  },
  intakeCaloriesOvershotBy11Parent: {
    top: 13,
    width: 336,
    height: 45,
  },
  rectangleParent1: {
    marginLeft: -182,
    top: 303,
  },
  breakfastChild: {
    top: 678,
    left: 336,
    width: 39,
    height: 39,
    position: "absolute",
  },
  breakfast: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Breakfast;

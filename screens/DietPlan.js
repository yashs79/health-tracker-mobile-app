import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const DietPlan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dietPlan}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.todaysDietPlanParent, styles.parentFlexBox]}>
          <Text style={styles.todaysDietPlan}>Today's diet plan</Text>
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
      <View style={styles.dietPlanChild} />
      <View style={styles.waterParent}>
        <Pressable
          style={styles.water}
          onPress={() => navigation.navigate("Water")}
        >
          <Text style={[styles.water1, styles.mealsTypo]}>Water</Text>
        </Pressable>
        <Text style={[styles.listView, styles.mealsTypo]}>List view</Text>
        <Text style={[styles.meals, styles.mealsTypo]}>Meals</Text>
      </View>
      <View style={styles.dietPlanItem} />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-43574.png")}
        />
        <View style={styles.parent}>
          <Text style={styles.text}>
            <Text style={styles.text1}>690/</Text>
            <Text style={styles.text2}>1640</Text>
          </Text>
          <Text style={[styles.calories, styles.fats39FlexBox]}>Calories</Text>
        </View>
      </View>
      <View style={[styles.dietPlanInner, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupInner, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-67.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-67.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-69.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-67.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-67.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-67.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-67.png")}
        />
        <Text style={[styles.s, styles.sTypo]}>S</Text>
        <Text style={[styles.m, styles.sTypo]}>M</Text>
        <Text style={styles.t}>T</Text>
        <Text style={[styles.w, styles.sTypo]}>W</Text>
        <Text style={[styles.t1, styles.sTypo]}>T</Text>
        <Text style={[styles.f, styles.sTypo]}>F</Text>
        <Text style={[styles.s1, styles.sTypo]}>S</Text>
      </View>
      <Text style={[styles.today2Apr, styles.mealsTypo]}>
        Today, 2 Apr 2024
      </Text>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.carbs49Parent, styles.groupViewPosition]}>
          <Text style={styles.carbs49}>
            <Text style={[styles.text3, styles.textTypo]}>{`340
`}</Text>
            <Text style={[styles.carbs491, styles.mealsTypo]}>Carbs (49%)</Text>
          </Text>
          <Text style={[styles.fats39, styles.fats39FlexBox]}>
            <Text style={[styles.text4, styles.textTypo]}>{`270
`}</Text>
            <Text style={[styles.carbs491, styles.mealsTypo]}>Fats (39%)</Text>
          </Text>
          <Text style={[styles.proteins12, styles.fats39FlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>{`80
`}</Text>
            <Text style={[styles.carbs491, styles.mealsTypo]}>
              Proteins (12%)
            </Text>
          </Text>
        </View>
      </View>
      <Image
        style={[styles.dietPlanChild1, styles.dietChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Breakfast")}
      >
        <View style={styles.rectangleView} />
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
      </Pressable>
      <Pressable style={[styles.groupPressable, styles.groupPressableLayout]}>
        <View style={[styles.breakfastParent, styles.groupPressableLayout]}>
          <Text style={[styles.breakfast, styles.dinnerTypo]}>Breakfast</Text>
          <Text style={[styles.am, styles.amTypo]}>8:00-8:30 AM</Text>
          <Text style={styles.eggsOmeletteWith}>
            {" "}
            2 eggs omelette with whole wheat toast
          </Text>
        </View>
      </Pressable>
      <View style={[styles.dietPlanChild2, styles.dietPosition]} />
      <GroupComponent3 />
      <GroupComponent2 />
      <GroupComponent1 />
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.rectangleView} />
        <View style={[styles.groupContainer, styles.dinnerParentLayout]}>
          <View style={[styles.dinnerParent, styles.dinnerParentLayout]}>
            <Text style={[styles.dinner, styles.dinnerTypo]}>Dinner</Text>
            <Text style={[styles.pm, styles.amTypo]}>8:00-8:30 PM</Text>
            <Text style={styles.vegetarianLentilTacos}>{`Vegetarian Lentil Tacos
`}</Text>
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
      <Pressable style={[styles.calParent, styles.calParentPosition]}>
        <Text style={[styles.cal, styles.calTypo]}>490cal</Text>
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group24.png")}
        />
      </Pressable>
      <View style={[styles.calGroup, styles.calParentPosition]}>
        <Text style={[styles.cal1, styles.calTypo]}>150cal</Text>
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group24.png")}
        />
      </View>
      <View style={[styles.calContainer, styles.calPosition]}>
        <Text style={[styles.cal2, styles.calTypo]}>600cal</Text>
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group24.png")}
        />
      </View>
      <View style={[styles.calParent1, styles.calParentPosition]}>
        <Text style={[styles.cal3, styles.calTypo]}>100cal</Text>
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group24.png")}
        />
      </View>
      <View style={[styles.calParent2, styles.calPosition]}>
        <Text style={[styles.cal2, styles.calTypo]}>300cal</Text>
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group24.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group25.png")}
      />
      <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
        <View style={[styles.groupChild8, styles.groupChildLayout]} />
        <Image
          style={[styles.vectorIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={[styles.dietPlanInner1, styles.dietPosition]}>
        <View style={[styles.groupChild8, styles.groupChildLayout]} />
      </View>
      <Image
        style={[styles.dietPlanChild3, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-43661.png")}
      />
      <Image
        style={[styles.dietPlanChild4, styles.dietChildLayout]}
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
  mealsTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 193,
    width: 193,
    position: "absolute",
  },
  fats39FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupItemLayout: {
    height: 2,
    width: 67,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 30,
    height: 30,
    top: 0,
    position: "absolute",
  },
  sTypo: {
    color: Color.colorDimgray,
    top: 3,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  groupViewPosition: {
    height: 45,
    width: 358,
    marginLeft: -179,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.bodyRegular_size,
  },
  dietChildLayout: {
    height: 39,
    width: 39,
    top: 678,
    position: "absolute",
  },
  rectangleLayout: {
    height: 80,
    width: 393,
    left: -2,
    position: "absolute",
  },
  groupChildLayout: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  groupPressableLayout: {
    width: 203,
    height: 80,
    position: "absolute",
  },
  dinnerTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  amTypo: {
    top: 23,
    width: 203,
    textAlign: "center",
    fontSize: FontSize.badgeLabel_size,
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  dietPosition: {
    top: 837,
    height: 70,
    width: 70,
    position: "absolute",
  },
  dinnerParentLayout: {
    height: 62,
    width: 260,
    position: "absolute",
  },
  updatedTypo: {
    fontSize: FontSize.size_6xs,
    height: 11,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.grayBlack,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  calParentPosition: {
    marginLeft: 140,
    left: "50%",
    height: 44,
    position: "absolute",
  },
  calTypo: {
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.grayBlack,
    left: "50%",
    top: 31,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calPosition: {
    width: 35,
    marginLeft: 140,
    left: "50%",
    height: 44,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
    height: 44,
    width: 390,
    backgroundColor: Color.colorRed,
  },
  todaysDietPlan: {
    textAlign: "left",
    color: Color.grayWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
    padding: Padding.p_8xs,
    marginLeft: 10,
    width: 33,
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
    left: 0,
    top: 31,
    position: "absolute",
  },
  dietPlanChild: {
    marginLeft: -195,
    top: 80,
    height: 46,
    left: "50%",
    width: 390,
    position: "absolute",
  },
  water1: {
    marginLeft: -26,
    color: Color.grayBlack,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "500",
  },
  water: {
    top: 0,
    left: "50%",
    position: "absolute",
  },
  listView: {
    left: 269,
    color: Color.grayBlack,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "500",
    position: "absolute",
  },
  meals: {
    color: Color.colorRed,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "500",
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
  dietPlanItem: {
    backgroundColor: "rgba(217, 217, 217, 0.1)",
    borderColor: Color.colorGray_700,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 354,
    borderStyle: "solid",
    top: 108,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  text1: {
    fontSize: 25,
    color: Color.grayBlack,
  },
  text2: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
  },
  text: {
    marginLeft: -54,
    fontFamily: FontFamily.interSemiBold,
    top: 0,
    left: "50%",
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  calories: {
    top: 38,
    left: 19,
    lineHeight: 18,
    fontFamily: FontFamily.interMedium,
    color: "#757575",
    width: 69,
    fontSize: FontSize.badgeLabel_size,
    textAlign: "center",
    fontWeight: "500",
  },
  parent: {
    marginLeft: -53.5,
    top: 68,
    width: 108,
    height: 56,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    top: 193,
    left: 99,
  },
  groupItem: {
    borderRadius: Border.br_9xs,
    top: 0,
    width: 67,
    backgroundColor: Color.colorRed,
    left: 0,
  },
  dietPlanInner: {
    left: 21,
    top: 108,
    width: 67,
  },
  groupInner: {
    left: 0,
  },
  ellipseIcon: {
    left: 57,
  },
  groupChild1: {
    left: 114,
  },
  groupChild2: {
    left: 171,
  },
  groupChild3: {
    left: 228,
  },
  groupChild4: {
    left: 285,
  },
  groupChild5: {
    left: 342,
  },
  s: {
    left: 10,
  },
  m: {
    left: 65,
  },
  t: {
    left: 124,
    top: 3,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.grayWhite,
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  w: {
    left: 178,
  },
  t1: {
    left: 238,
  },
  f: {
    left: 296,
  },
  s1: {
    left: 352,
  },
  ellipseParent: {
    top: 119,
    width: 372,
    height: 30,
    left: 9,
    position: "absolute",
  },
  today2Apr: {
    marginLeft: -71,
    top: 159,
    color: Color.grayBlack,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "500",
    position: "absolute",
  },
  text3: {
    color: Color.colorLightcoral,
  },
  carbs491: {
    fontSize: FontSize.bodySmall_size,
    color: Color.grayBlack,
  },
  carbs49: {
    marginLeft: -179,
    textAlign: "center",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  text4: {
    color: "#e4e922",
  },
  fats39: {
    marginLeft: -40,
    top: 0,
    left: "50%",
  },
  text5: {
    color: Color.colorCornflowerblue_100,
  },
  proteins12: {
    marginLeft: 80,
    top: 0,
    left: "50%",
  },
  carbs49Parent: {
    top: 0,
  },
  groupView: {
    top: 401,
  },
  dietPlanChild1: {
    left: 328,
  },
  rectangleView: {
    borderColor: Color.colorGray_500,
    borderWidth: 1,
    backgroundColor: Color.grayWhite,
    height: 80,
    width: 393,
    borderStyle: "solid",
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild6: {
    top: 5,
    left: 13,
    borderColor: Color.colorRed,
    borderRadius: Border.br_base,
    borderWidth: 1,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
  },
  rectangleGroup: {
    top: 472,
  },
  breakfast: {
    left: 66,
  },
  am: {
    marginLeft: -101.5,
    top: 23,
  },
  eggsOmeletteWith: {
    fontFamily: FontFamily.poppinsRegular,
    top: 44,
    marginLeft: -101.5,
    width: 203,
    textAlign: "center",
    fontSize: FontSize.badgeLabel_size,
    color: Color.grayBlack,
    left: "50%",
    position: "absolute",
  },
  breakfastParent: {
    top: 0,
    left: 0,
  },
  groupPressable: {
    left: 94,
    top: 472,
  },
  dietPlanChild2: {
    left: 7,
    borderColor: Color.colorRed,
    borderRadius: Border.br_base,
    borderWidth: 1,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
  },
  dinner: {
    left: 105,
  },
  pm: {
    marginLeft: -101,
  },
  vegetarianLentilTacos: {
    marginLeft: -130,
    width: 260,
    fontFamily: FontFamily.poppinsRegular,
    top: 44,
    textAlign: "center",
    fontSize: FontSize.badgeLabel_size,
    color: Color.grayBlack,
    left: "50%",
    height: 18,
    position: "absolute",
  },
  dinnerParent: {
    top: 0,
    left: 0,
  },
  groupContainer: {
    top: 9,
    left: 70,
  },
  rectangleContainer: {
    top: 832,
  },
  updatedOn2nd: {
    width: 94,
    marginLeft: -193,
    fontSize: FontSize.size_6xs,
    left: "50%",
  },
  updatedByMaker: {
    right: 0,
    width: 69,
  },
  updatedOn2ndApril2024Parent: {
    top: 922,
    width: 386,
    height: 11,
    marginLeft: -193,
    left: "50%",
    position: "absolute",
  },
  cal: {
    marginLeft: -17,
  },
  groupIcon1: {
    width: "73.82%",
    right: "14.41%",
    left: "11.76%",
    bottom: "38.64%",
    top: "0%",
    height: "61.36%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  calParent: {
    top: 490,
    width: 34,
  },
  cal1: {
    marginLeft: -16,
  },
  groupIcon2: {
    width: "78.44%",
    right: "12.19%",
    left: "9.38%",
    bottom: "38.64%",
    top: "0%",
    height: "61.36%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  calGroup: {
    top: 583,
    width: 32,
  },
  cal2: {
    marginLeft: -17.5,
  },
  groupIcon3: {
    width: "71.71%",
    right: "16.86%",
    left: "11.43%",
    bottom: "38.64%",
    top: "0%",
    height: "61.36%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  calContainer: {
    top: 674,
  },
  cal3: {
    marginLeft: -16.5,
  },
  groupIcon4: {
    width: "76.06%",
    right: "14.85%",
    left: "9.09%",
    bottom: "38.64%",
    top: "0%",
    height: "61.36%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  calParent1: {
    top: 760,
    width: 33,
  },
  calParent2: {
    top: 850,
  },
  vectorIcon: {
    height: "4.93%",
    width: "13.08%",
    top: "49.14%",
    right: "81.79%",
    bottom: "45.92%",
    left: "5.13%",
  },
  groupIcon6: {
    height: "4.31%",
    width: "13.49%",
    top: "58.51%",
    right: "81.64%",
    bottom: "37.18%",
    left: "4.87%",
  },
  groupChild8: {
    borderColor: Color.colorRed,
    borderRadius: Border.br_base,
    borderWidth: 1,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    top: 0,
    left: 0,
  },
  vectorIcon1: {
    height: "50%",
    width: "80%",
    top: "25.71%",
    right: "10%",
    bottom: "24.29%",
    left: "10%",
  },
  rectangleParent1: {
    top: 747,
    left: 8,
  },
  dietPlanInner1: {
    left: 9,
    top: 837,
  },
  dietPlanChild3: {
    height: "5.27%",
    width: "15.13%",
    top: "85.2%",
    right: "81.54%",
    bottom: "9.54%",
    left: "3.33%",
  },
  dietPlanChild4: {
    left: 336,
  },
  dietPlan: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 993,
    overflow: "hidden",
    width: "100%",
  },
});

export default DietPlan;

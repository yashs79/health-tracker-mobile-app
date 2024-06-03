import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import FrameComponent4 from "../components/FrameComponent4";
import VariantStandardColorPrimar from "../components/VariantStandardColorPrimar";
import FrameComponent3 from "../components/FrameComponent3";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Dashboaard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboaard}>
      <View style={styles.dashboaardInner}>
        <View style={styles.homeParent}>
          <Text style={styles.home}>Home</Text>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
      </View>
      <Pressable style={styles.dashboaardChild}>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.todaysDietPlanParent, styles.todaysPosition]}>
            <Text style={[styles.todaysDietPlan, styles.todaysDietPlanTypo]}>
              Today's diet plan
            </Text>
            <Image
              style={[styles.chevronRightIcon, styles.chevronIconLayout]}
              resizeMode="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.framePressable, styles.frameLayout]}>
        <View style={[styles.todaysDietPlanParent, styles.todaysPosition]}>
          <Text style={[styles.todaysDietPlan, styles.todaysDietPlanTypo]}>
            My Medical Appointments
          </Text>
          <Image
            style={[styles.chevronRightIcon, styles.chevronIconLayout]}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.ongoingMedicationsParent, styles.parentBorder]}>
        <Text style={[styles.ongoingMedications, styles.todaysDietPlanTypo]}>
          Ongoing Medications
        </Text>
        <Image
          style={[styles.chevronRightIcon2, styles.chevronIconLayout]}
          resizeMode="cover"
          source={require("../assets/chevronright.png")}
        />
      </View>
      <FrameComponent4 />
      <VariantStandardColorPrimar
        content="2"
        variantStandardColorPrimaPosition="absolute"
        variantStandardColorPrimaBackgroundColor="#fa2609"
        variantStandardColorPrimaTop={387}
        variantStandardColorPrimaLeft={316}
        variantStandardColorPrimaWidth={15}
        variantStandardColorPrimaHeight={15}
        textFontSize={10}
      />
      <View style={[styles.groupParent, styles.frameChildLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-435342.png")}
        />
        <Text style={styles.text}>{`Calories
2300 kcal`}</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <FrameComponent3 />
      <VariantStandardColorPrimar
        content="1"
        variantStandardColorPrimaPosition="absolute"
        variantStandardColorPrimaBackgroundColor="#fa2609"
        variantStandardColorPrimaTop={444}
        variantStandardColorPrimaLeft={316}
        variantStandardColorPrimaWidth={15}
        variantStandardColorPrimaHeight={15}
        textFontSize={10}
      />
      <Pressable
        style={[styles.healthTrendsParent, styles.parentBorder]}
        onPress={() => navigation.navigate("HealthTrends")}
      >
        <Text style={[styles.ongoingMedications, styles.todaysDietPlanTypo]}>
          Health Trends
        </Text>
        <Image
          style={[styles.chevronRightIcon3, styles.chevronIconLayout]}
          resizeMode="cover"
          source={require("../assets/chevronright.png")}
        />
      </Pressable>
      <View style={[styles.myAllergiesParent, styles.parentBorder]}>
        <Text style={[styles.ongoingMedications, styles.todaysDietPlanTypo]}>
          My Allergies
        </Text>
        <Image
          style={[styles.chevronRightIcon4, styles.chevronIconLayout]}
          resizeMode="cover"
          source={require("../assets/chevronright.png")}
        />
      </View>
      <View style={[styles.ongoingDiagnoseParent, styles.parentBorder]}>
        <Text style={[styles.ongoingMedications, styles.todaysDietPlanTypo]}>
          Ongoing Diagnose
        </Text>
        <Image
          style={[styles.chevronRightIcon5, styles.chevronIconLayout]}
          resizeMode="cover"
          source={require("../assets/chevronright.png")}
        />
      </View>
      <FrameComponent1 />
      <Image
        style={styles.dashboaardItem}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <FrameComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    borderWidth: 0.5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
    borderRadius: Border.br_3xs,
    left: "50%",
    height: 47,
    width: 359,
    position: "absolute",
  },
  todaysPosition: {
    left: 12,
    position: "absolute",
  },
  todaysDietPlanTypo: {
    fontSize: FontSize.bodySmall_size,
    color: Color.grayBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  chevronIconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  parentBorder: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 0.5,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
    borderRadius: Border.br_3xs,
    width: 359,
    left: 15,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameChildLayout: {
    height: 80,
    width: 80,
    position: "absolute",
  },
  home: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.grayWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  groupIcon: {
    width: 21,
    height: 18,
  },
  groupWrapper: {
    padding: Padding.p_8xs,
    marginLeft: 278,
  },
  homeParent: {
    top: 8,
    left: 8,
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  dashboaardInner: {
    top: 31,
    backgroundColor: Color.colorRed,
    width: 390,
    height: 44,
    left: 0,
    position: "absolute",
  },
  todaysDietPlan: {
    color: Color.grayBlack,
    left: 12,
    position: "absolute",
    top: 0,
  },
  chevronRightIcon: {
    top: 3,
    left: 308,
    position: "absolute",
  },
  todaysDietPlanParent: {
    top: 12,
    width: 324,
    height: 21,
  },
  frameWrapper: {
    marginLeft: -179.5,
    top: 0,
  },
  dashboaardChild: {
    top: 371,
    height: 47,
    width: 359,
    left: 15,
    position: "absolute",
  },
  framePressable: {
    marginLeft: -180,
    top: 428,
  },
  ongoingMedications: {
    color: Color.grayBlack,
  },
  chevronRightIcon2: {
    marginLeft: 152,
  },
  ongoingMedicationsParent: {
    top: 484,
    height: 47,
  },
  frameChild: {
    top: 0,
    left: 0,
  },
  text: {
    top: 32,
    left: 290,
    fontSize: FontSize.size_4xs,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    width: 56,
    height: 31,
    color: Color.grayBlack,
    position: "absolute",
  },
  vectorIcon: {
    height: "25.03%",
    width: "17.52%",
    top: "14.89%",
    right: "41.43%",
    bottom: "60.08%",
    left: "41.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    top: 270,
    left: 278,
  },
  chevronRightIcon3: {
    marginLeft: 205,
  },
  healthTrendsParent: {
    top: 651,
    height: 47,
  },
  chevronRightIcon4: {
    marginLeft: 222,
  },
  myAllergiesParent: {
    top: 541,
    height: 43,
  },
  chevronRightIcon5: {
    marginLeft: 175,
  },
  ongoingDiagnoseParent: {
    top: 594,
    height: 47,
  },
  dashboaardItem: {
    top: 678,
    left: 336,
    width: 39,
    height: 39,
    position: "absolute",
  },
  dashboaard: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 1033,
    overflow: "hidden",
  },
});

export default Dashboaard;

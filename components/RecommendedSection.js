import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const RecommendedSection = () => {
  return (
    <View style={styles.breakfastInner}>
      <View style={styles.groupParent}>
        <View style={[styles.recommendedWrapper, styles.recommendedPosition]}>
          <Text style={[styles.recommended, styles.recommendedPosition]}>
            Recommended
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.rectangleParent, styles.groupPosition]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View style={styles.eggsOmeletteWithWholeWheatParent}>
              <Text
                style={styles.eggsOmeletteWith}
              >{` 2 eggs omelette with whole 
wheat toast`}</Text>
              <View style={styles.groupView}>
                <View style={[styles.groupWrapper, styles.groupLayout1]}>
                  <View style={[styles.groupWrapper, styles.groupLayout1]}>
                    <Text style={[styles.gmCarbs, styles.gmFatsTypo]}>
                      70gm Carbs
                    </Text>
                    <View
                      style={[styles.rectangleWrapper, styles.rectangleLayout]}
                    >
                      <View style={[styles.groupItem, styles.groupLayout]} />
                    </View>
                  </View>
                </View>
                <View style={[styles.groupFrame, styles.groupLayout1]}>
                  <View style={[styles.groupWrapper, styles.groupLayout1]}>
                    <Text style={[styles.gmFats, styles.gmFatsTypo]}>
                      10gm Fats
                    </Text>
                    <View
                      style={[styles.rectangleWrapper, styles.rectangleLayout]}
                    >
                      <View style={[styles.groupInner, styles.groupLayout]} />
                    </View>
                  </View>
                </View>
                <View style={[styles.groupWrapper1, styles.proteinsPosition]}>
                  <View
                    style={[styles.gmProteinsParent, styles.proteinsPosition]}
                  >
                    <Text style={[styles.gmProteins, styles.proteinsPosition]}>
                      30gm Proteins
                    </Text>
                    <View
                      style={[styles.rectangleFrame, styles.rectangleLayout]}
                    >
                      <View
                        style={[styles.rectangleView, styles.groupLayout]}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.calParent, styles.calPosition]}>
            <Text style={[styles.cal, styles.calPosition]}>490cal</Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group29.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendedPosition: {
    height: 30,
    width: 193,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 137,
    marginLeft: -190,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  groupLayout1: {
    width: 70,
    height: 22,
    top: 0,
    position: "absolute",
  },
  gmFatsTypo: {
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleLayout: {
    height: 4,
    top: 18,
    width: 70,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_9xs,
    height: 4,
    width: 70,
    left: 0,
    top: 0,
    position: "absolute",
  },
  proteinsPosition: {
    width: 76,
    top: 0,
    position: "absolute",
  },
  calPosition: {
    width: 36,
    left: "50%",
    position: "absolute",
  },
  recommended: {
    marginLeft: -96.3,
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorLimegreen,
    textAlign: "left",
  },
  recommendedWrapper: {
    marginLeft: -185.8,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderWidth: 1,
    top: 0,
  },
  eggsOmeletteWith: {
    marginLeft: -161.7,
    fontSize: FontSize.bodyRegular_size,
    width: 221,
    height: 76,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  groupWrapper: {
    left: 0,
  },
  gmFats: {
    left: 8,
    width: 53,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorYellow_100,
  },
  groupFrame: {
    left: 117,
  },
  gmProteins: {
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
  },
  rectangleView: {
    backgroundColor: Color.colorCornflowerblue_100,
  },
  rectangleFrame: {
    left: 3,
  },
  gmProteinsParent: {
    left: 0,
    height: 22,
  },
  groupWrapper1: {
    left: 231,
    height: 22,
  },
  groupView: {
    top: 76,
    left: 16,
    width: 308,
    height: 22,
    position: "absolute",
  },
  eggsOmeletteWithWholeWheatParent: {
    marginLeft: -168,
    top: 10,
    width: 323,
    height: 98,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
  },
  cal: {
    marginLeft: -17.8,
    top: 36,
    fontFamily: FontFamily.capriolaRegular,
    height: 14,
    fontSize: FontSize.size_3xs,
    width: 36,
    textAlign: "center",
    color: Color.grayBlack,
  },
  groupIcon: {
    height: "56.34%",
    width: "73.88%",
    top: "0%",
    right: "14.33%",
    bottom: "43.66%",
    left: "11.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  calParent: {
    marginLeft: 134.4,
    top: 8,
    height: 50,
  },
  groupContainer: {
    top: 30,
  },
  groupParent: {
    top: 0,
    marginLeft: -190,
    height: 167,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  breakfastInner: {
    marginLeft: -189,
    top: 412,
    height: 167,
    width: 380,
    left: "50%",
    position: "absolute",
  },
});

export default RecommendedSection;

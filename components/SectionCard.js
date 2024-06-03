import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SectionCard = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.groupGroup, styles.groupPosition2]}>
        <View style={styles.group}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
          <View style={[styles.group1, styles.groupPosition2]}>
            <View style={[styles.group2, styles.groupPosition2]}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition1]}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
              <Text style={[styles.carbs, styles.fatsTypo]}>Carbs</Text>
            </View>
            <View style={[styles.group3, styles.groupPosition2]}>
              <Image
                style={[styles.vectorIcon2, styles.vectorIconPosition1]}
                resizeMode="cover"
                source={require("../assets/vector12.png")}
              />
              <Text style={[styles.fats, styles.fatsTypo]}>Fats</Text>
            </View>
            <View style={[styles.group4, styles.groupPosition2]}>
              <Image
                style={[styles.vectorIcon3, styles.vectorIconPosition1]}
                resizeMode="cover"
                source={require("../assets/vector13.png")}
              />
              <Text style={[styles.carbs, styles.fatsTypo]}>Proteins</Text>
            </View>
          </View>
        </View>
        <View style={styles.group5}>
          <Image
            style={[styles.vectorIcon4, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector14.png")}
          />
          <View style={[styles.group6, styles.groupPosition2]}>
            <View style={[styles.group7, styles.groupPosition1]}>
              <Image
                style={[styles.vectorIcon5, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector15.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>0</Text>
            </View>
            <View style={[styles.group8, styles.groupPosition]}>
              <Image
                style={[styles.vectorIcon6, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector16.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>25</Text>
            </View>
            <View style={[styles.group9, styles.groupPosition]}>
              <Image
                style={[styles.vectorIcon6, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector17.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>50</Text>
            </View>
            <View style={[styles.group10, styles.groupPosition1]}>
              <Image
                style={[styles.vectorIcon8, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector18.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>75</Text>
            </View>
            <View style={[styles.group11, styles.groupPosition1]}>
              <Image
                style={styles.vectorIcon9}
                resizeMode="cover"
                source={require("../assets/vector18.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>100</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group27.png")}
        />
        <View style={styles.group12}>
          <View style={[styles.group6, styles.groupPosition2]}>
            <Image
              style={styles.groupChild}
              resizeMode="cover"
              source={require("../assets/group-43633.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group28.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-43631.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.gram, styles.fatsTypo]}>Gram</Text>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Text style={[styles.recommended, styles.consumedPosition]}>
          Recommended
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.groupInnerPosition]} />
        <Text style={[styles.consumed, styles.consumedPosition]}>Consumed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition2: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition1: {
    bottom: "79.61%",
    height: "20.39%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  fatsTypo: {
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    left: "0%",
    position: "absolute",
  },
  groupPosition1: {
    height: "8.77%",
    right: "0%",
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "42.04%",
    top: "51.59%",
    height: "6.37%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    fontSize: FontSize.badgeLabel_size,
    color: Color.grayBlack,
    fontFamily: FontFamily.interRegular,
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  groupPosition: {
    left: "14.97%",
    width: "85.03%",
    height: "8.77%",
    right: "0%",
    position: "absolute",
  },
  groupLayout: {
    top: "59.09%",
    width: "14.89%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  rectanglePosition: {
    height: 12,
    left: 285,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 7,
    width: 39,
    left: 0,
    top: 2,
    position: "absolute",
  },
  consumedPosition: {
    left: 42,
    top: 0,
    height: 12,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.24%",
    bottom: "96.76%",
    width: "100%",
    right: "0%",
    top: "0%",
    left: "0%",
  },
  vectorIcon1: {
    width: "3.29%",
    right: "47.04%",
    left: "49.67%",
  },
  carbs: {
    height: "52.1%",
    top: "48.22%",
    width: "100%",
  },
  group2: {
    width: "12.96%",
    right: "87.04%",
    bottom: "0%",
    top: "0%",
    left: "0%",
  },
  vectorIcon2: {
    width: "5.88%",
    right: "43.53%",
    left: "50.59%",
  },
  fats: {
    height: "50.16%",
    top: "50.16%",
    width: "100%",
  },
  group3: {
    width: "7.25%",
    right: "47.55%",
    left: "45.2%",
    bottom: "0%",
    top: "0%",
  },
  vectorIcon3: {
    width: "2.74%",
    right: "50.41%",
    left: "46.85%",
  },
  group4: {
    width: "15.57%",
    left: "84.43%",
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  group1: {
    width: "64.85%",
    right: "25.58%",
    left: "9.57%",
    bottom: "0%",
    top: "0%",
  },
  group: {
    height: "15.27%",
    width: "90.17%",
    top: "84.73%",
    left: "9.83%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "93.63%",
    width: "2.54%",
    top: "2.07%",
    right: "-2.54%",
    bottom: "4.3%",
    left: "100%",
  },
  vectorIcon5: {
    width: "31.55%",
    left: "68.45%",
  },
  text: {
    width: "42.25%",
  },
  group7: {
    width: "47.46%",
    top: "91.18%",
    bottom: "0.06%",
    left: "52.54%",
  },
  vectorIcon6: {
    width: "17.61%",
    left: "82.39%",
  },
  text1: {
    width: "67.76%",
  },
  group8: {
    top: "67.78%",
    bottom: "23.45%",
  },
  group9: {
    top: "44.39%",
    bottom: "46.85%",
  },
  vectorIcon8: {
    width: "18.15%",
    left: "81.85%",
  },
  text3: {
    width: "66.77%",
  },
  group10: {
    width: "82.49%",
    top: "20.94%",
    bottom: "70.3%",
    left: "17.51%",
  },
  vectorIcon9: {
    width: "14.97%",
    top: "23.57%",
    bottom: "70.06%",
    left: "85.03%",
    height: "6.37%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
  },
  text4: {
    width: "72.59%",
  },
  group11: {
    bottom: "91.23%",
    width: "100%",
    top: "0%",
    left: "0%",
  },
  group6: {
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
  },
  group5: {
    height: "88.53%",
    width: "9.83%",
    right: "90.17%",
    bottom: "11.47%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  groupIcon: {
    height: "82.9%",
    width: "85.69%",
    top: "1.83%",
    right: "4.49%",
    bottom: "15.27%",
    left: "9.83%",
  },
  groupChild: {
    height: "99.86%",
    right: "85.11%",
    bottom: "0.14%",
    width: "14.89%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  groupIcon1: {
    height: "40.91%",
    right: "42.13%",
    left: "42.98%",
    bottom: "0%",
  },
  groupItem: {
    height: "40.84%",
    bottom: "0.07%",
    left: "85.11%",
    right: "0%",
  },
  group12: {
    height: "70.69%",
    width: "58.6%",
    top: "14.14%",
    right: "23.69%",
    bottom: "15.18%",
    left: "17.71%",
    position: "absolute",
  },
  groupGroup: {
    width: "99.75%",
    left: "0.25%",
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  gram: {
    height: "6.67%",
    width: "9%",
    top: "52.05%",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  groupInner: {
    backgroundColor: Color.colorLimegreen,
  },
  recommended: {
    width: 57,
  },
  rectangleParent: {
    top: 9,
    width: 99,
  },
  rectangleView: {
    backgroundColor: Color.colorRed,
  },
  consumed: {
    width: 41,
  },
  rectangleGroup: {
    top: 22,
    width: 83,
  },
  groupParent: {
    height: "23.74%",
    width: "103.08%",
    top: "10.13%",
    right: "-3.08%",
    bottom: "66.13%",
    left: "0%",
    position: "absolute",
  },
});

export default SectionCard;

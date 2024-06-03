import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent3 = () => {
  return (
    <View style={[styles.frameParent, styles.frameLayout3]}>
      <View style={[styles.frameGroup, styles.frameLayout3]}>
        <View style={styles.myProfileWrapper}>
          <Text style={styles.myProfile}>My Profile</Text>
        </View>
        <View style={[styles.frameContainer, styles.frameLayout2]}>
          <View style={[styles.frameWrapper, styles.lineViewPosition]}>
            <View style={[styles.frameView, styles.frameLayout1]}>
              <View style={[styles.frameParent1, styles.frameLayout1]}>
                <Image
                  style={[styles.frameParent1, styles.frameLayout1]}
                  resizeMode="cover"
                  source={require("../assets/frame-64.png")}
                />
                <View style={styles.frameParent2}>
                  <View style={[styles.frameParent3, styles.frameParentLayout]}>
                    <View style={[styles.groupParent, styles.groupLayout]}>
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        resizeMode="cover"
                        source={require("../assets/group-34.png")}
                      />
                      <View style={styles.oxygenParent}>
                        <Text
                          style={[styles.oxygen, styles.oxygenTypo]}
                        >{`Oxygen
`}</Text>
                        <Text style={[styles.yo, styles.yoTypo]}>55 y.o.</Text>
                      </View>
                      <View
                        style={[
                          styles.sugarWrapper,
                          styles.sugarWrapperPosition,
                        ]}
                      >
                        <Text style={[styles.sugar, styles.sugarTypo]}>{`Sugar
`}</Text>
                      </View>
                    </View>
                    <View
                      style={[styles.ellipseParent, styles.frameParentLayout]}
                    >
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        resizeMode="cover"
                        source={require("../assets/group-34.png")}
                      />
                      <View
                        style={[styles.weightParent, styles.parentPosition]}
                      >
                        <Text style={styles.sugarTypo}>Weight</Text>
                        <Text style={[styles.yo, styles.yoTypo]}>62 kg</Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.frameIcon, styles.frameParentLayout]}
                      resizeMode="cover"
                      source={require("../assets/frame-29274.png")}
                    />
                  </View>
                  <View style={[styles.frameParent4, styles.frameParentLayout]}>
                    <View style={[styles.groupContainer, styles.groupLayout]}>
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        resizeMode="cover"
                        source={require("../assets/group-341.png")}
                      />
                      <View
                        style={[styles.heightParent, styles.parentPosition]}
                      >
                        <Text style={[styles.height, styles.oxygenTypo]}>
                          Height
                        </Text>
                        <Text style={[styles.cm, styles.cmTypo]}>163 cm</Text>
                      </View>
                    </View>
                    <View
                      style={[styles.groupParent1, styles.sugarWrapperPosition]}
                    >
                      <Image
                        style={[styles.frameChild1, styles.frameLayout]}
                        resizeMode="cover"
                        source={require("../assets/group-34.png")}
                      />
                      <View
                        style={[styles.heartbeatParent, styles.heartbeatLayout]}
                      >
                        <Text
                          style={[styles.heartbeat, styles.heartbeatLayout]}
                        >
                          Heartbeat
                        </Text>
                        <Text style={[styles.permin, styles.heartbeatLayout]}>
                          94per/min
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.frameIcon, styles.frameParentLayout]}>
                      <Image
                        style={[styles.frameItem, styles.frameLayout]}
                        resizeMode="cover"
                        source={require("../assets/group-34.png")}
                      />
                      <View style={styles.bpParent}>
                        <Text style={styles.sugarTypo}>BP</Text>
                        <Text style={[styles.yo, styles.yoTypo]}>80mm hg</Text>
                      </View>
                      <Text style={[styles.mgdl, styles.yoTypo]}>300mg/dl</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.lineView, styles.lineViewPosition]} />
            </View>
          </View>
          <View style={[styles.aditiyaParent, styles.aditiyaLayout]}>
            <Text style={[styles.aditiya, styles.aditiyaLayout]}>Aditiya</Text>
            <Text style={[styles.y, styles.yTypo]}>55 y</Text>
            <Text style={[styles.male, styles.yTypo]}>Male</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.frameChild2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-43626.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/group23.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout3: {
    height: 162,
    width: 362,
    position: "absolute",
  },
  frameLayout2: {
    height: 137,
    width: 362,
  },
  lineViewPosition: {
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  frameLayout1: {
    height: 124,
    width: 343,
    position: "absolute",
  },
  frameParentLayout: {
    height: 34,
    position: "absolute",
  },
  groupLayout: {
    width: 76,
    height: 34,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 30,
    width: 30,
    left: 0,
    position: "absolute",
  },
  oxygenTypo: {
    height: 12,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  yoTypo: {
    color: Color.grayBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  sugarWrapperPosition: {
    top: 1,
    position: "absolute",
  },
  sugarTypo: {
    width: 45,
    height: 12,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.badgeLabel_size,
  },
  parentPosition: {
    left: 34,
    top: 0,
  },
  cmTypo: {
    top: 16,
    color: Color.grayBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  heartbeatLayout: {
    width: 60,
    position: "absolute",
  },
  aditiyaLayout: {
    width: 49,
    position: "absolute",
  },
  yTypo: {
    fontSize: FontSize.size_4xs,
    top: 16,
    color: Color.grayBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconPosition: {
    left: "75.69%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  myProfile: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.badgeLabel_size,
  },
  myProfileWrapper: {
    left: 1,
    width: 359,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  frameParent1: {
    left: 0,
    top: 0,
  },
  frameItem: {
    top: 4,
  },
  oxygen: {
    width: 42,
    fontSize: FontSize.size_2xs,
    height: 12,
    color: Color.colorGray_200,
  },
  yo: {
    marginTop: 4,
  },
  oxygenParent: {
    left: 125,
    top: 0,
    position: "absolute",
  },
  sugar: {
    left: 34,
    top: 0,
    position: "absolute",
  },
  sugarWrapper: {
    width: 50,
    height: 31,
    left: 8,
  },
  groupParent: {
    left: 91,
  },
  weightParent: {
    position: "absolute",
  },
  ellipseParent: {
    width: 79,
    left: 0,
    top: 0,
  },
  frameIcon: {
    left: 191,
    width: 84,
    top: 0,
  },
  frameParent3: {
    width: 275,
    left: 0,
    top: 0,
  },
  height: {
    top: -4,
    width: 42,
    height: 12,
    color: Color.colorGray_200,
    fontSize: FontSize.badgeLabel_size,
    left: 0,
    position: "absolute",
  },
  cm: {
    position: "absolute",
  },
  heightParent: {
    height: 31,
    width: 42,
    position: "absolute",
  },
  groupContainer: {
    left: 0,
  },
  frameChild1: {
    top: 3,
  },
  heartbeat: {
    left: 4,
    height: 12,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    top: 0,
  },
  permin: {
    top: 16,
    color: Color.grayBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  heartbeatParent: {
    left: 34,
    top: 0,
    height: 31,
  },
  groupParent1: {
    left: 88,
    width: 94,
    height: 33,
  },
  bpParent: {
    left: 225,
    top: 0,
    position: "absolute",
  },
  mgdl: {
    top: 10,
    left: 32,
    position: "absolute",
  },
  frameParent4: {
    top: 58,
    width: 275,
    left: 0,
  },
  frameParent2: {
    top: 15,
    left: 66,
    height: 92,
    width: 275,
    position: "absolute",
  },
  lineView: {
    left: 251,
    borderColor: Color.colorSilver_100,
    borderRightWidth: 0.5,
    width: 1,
    height: 125,
  },
  frameView: {
    top: 7,
    left: 8,
  },
  frameWrapper: {
    marginLeft: -181,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.grayWhite,
    borderColor: Color.colorGray_500,
    borderWidth: 1,
    height: 137,
    width: 362,
  },
  aditiya: {
    fontSize: FontSize.bodySmall_size,
    color: Color.colorGray_300,
    textAlign: "center",
    height: 18,
    fontFamily: FontFamily.poppinsRegular,
    width: 49,
    left: 0,
    top: 0,
  },
  y: {
    left: 5,
  },
  male: {
    left: 27,
  },
  aditiyaParent: {
    top: 88,
    left: 15,
    height: 40,
  },
  frameContainer: {
    top: 25,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    left: 0,
    top: 0,
  },
  vectorIcon: {
    width: "2.49%",
    right: "74.03%",
    left: "23.48%",
    bottom: "56.17%",
    top: "37.04%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "6.79%",
  },
  frameChild2: {
    height: "6.05%",
    width: "2.32%",
    right: "49.06%",
    bottom: "56.91%",
    left: "48.62%",
    top: "37.04%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon1: {
    height: "7.41%",
    top: "36.42%",
    right: "21.55%",
    width: "2.76%",
    bottom: "56.17%",
  },
  vectorIcon2: {
    height: "5.56%",
    top: "73.46%",
    right: "49.72%",
    bottom: "20.99%",
    left: "47.51%",
    width: "2.76%",
  },
  groupIcon1: {
    width: "3.07%",
    top: "72.84%",
    right: "21.24%",
    bottom: "20.37%",
    height: "6.79%",
  },
  frameParent: {
    top: 89,
    left: 14,
  },
});

export default FrameComponent3;

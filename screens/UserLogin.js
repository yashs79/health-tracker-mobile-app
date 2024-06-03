import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import HierarchyprimaryListfalse from "../components/HierarchyprimaryListfalse";
import FormItem1 from "../components/FormItem1";
import FormItem from "../components/FormItem";
import { useNavigation } from "@react-navigation/native";
import SizemediumTypeprimaryOut from "../components/SizemediumTypeprimaryOut";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const UserLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.userLogin, styles.userLoginFlexBox]}>
      <Text style={[styles.appName, styles.textTypo1]}>APP Name</Text>
      <View style={[styles.formParent, styles.formLayout]}>
        <View style={[styles.form, styles.formLayout]}>
          <View style={styles.formItem}>
            <View style={styles.label}>
              <HierarchyprimaryListfalse
                text="Username"
                hierarchyprimaryListfalsePosition="unset"
                hierarchyprimaryListfalseMarginLeft="unset"
                textColor="#212529"
                textFontSize={15}
                textLineHeight={23}
                textFontFamily="Inter-Regular"
                textFontWeight="unset"
              />
              <HierarchyprimaryListfalse
                text="*"
                hierarchyprimaryListfalsePosition="unset"
                hierarchyprimaryListfalseMarginLeft={4}
                textColor="#dc3545"
                textFontSize={16}
                textLineHeight={24}
                textFontFamily="Inter-Regular"
                textFontWeight="unset"
              />
            </View>
            <View style={[styles.input, styles.inputFlexBox]}>
              <View style={[styles.inputBase, styles.inputFlexBox]}>
                <View style={[styles.placeholder, styles.inputFlexBox]}>
                  <Image
                    style={styles.inputPrefixIcon}
                    resizeMode="cover"
                    source={require("../assets/inputprefix3.png")}
                  />
                  <Text style={[styles.placeholder1, styles.text1Typo]}>
                    Enter your username
                  </Text>
                </View>
                <View style={[styles.spacer, styles.inputFlexBox]}>
                  <View style={styles.ignoreLayout} />
                  <View style={[styles.ignore1, styles.ignoreLayout]} />
                </View>
                <Image
                  style={styles.inputPrefixIcon}
                  resizeMode="cover"
                  source={require("../assets/inputsuffix4.png")}
                />
              </View>
            </View>
          </View>
          <FormItem1 />
          <FormItem />
        </View>
        <Pressable
          style={[styles.actions, styles.formLayout]}
          onPress={() => navigation.navigate("Dashboaard")}
        >
          <SizemediumTypeprimaryOut
            icon={require("../assets/icon.png")}
            text="Login"
            icon2={require("../assets/icon2.png")}
            iconRight={false}
            iconLeft={false}
            sizemediumTypeprimaryOutPosition="unset"
            sizemediumTypeprimaryOutBackgroundColor="#fa2609"
            sizemediumTypeprimaryOutBorderColor="#fa2609"
            sizemediumTypeprimaryOutAlignSelf="stretch"
            textFontSize={20}
            textLineHeight={30}
            textFontFamily="Poppins-SemiBold"
            textFontWeight="600"
          />
        </Pressable>
        <Text style={[styles.forgotPassword, styles.textTypo]}>
          Forgot Password
        </Text>
      </View>
      <View style={[styles.frame7011Parent, styles.frame7011Position]}>
        <Image
          style={[styles.frame7011, styles.frame7011Position]}
          resizeMode="cover"
          source={require("../assets/frame-70-1-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Powered By</Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("UserLogin1")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group26.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>
            Login with Fingerprint
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  userLoginFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  textTypo1: {
    color: Color.colorRed,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  formLayout: {
    width: 324,
    position: "absolute",
  },
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Typo: {
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.size_mini,
  },
  ignoreLayout: {
    height: 0,
    width: 0,
  },
  textTypo: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
    position: "absolute",
  },
  frame7011Position: {
    width: 145,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 70,
    width: 324,
    position: "absolute",
  },
  appName: {
    marginLeft: -167,
    top: 82,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    width: 333,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 2,
    left: "50%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  label: {
    alignItems: "flex-end",
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.colorGray_600,
    alignSelf: "stretch",
  },
  inputPrefixIcon: {
    width: 18,
    height: 18,
    display: "none",
    overflow: "hidden",
  },
  placeholder1: {
    fontFamily: FontFamily.interRegular,
    color: Color.themeSecondary,
    marginLeft: 4,
  },
  placeholder: {
    overflow: "hidden",
    flex: 1,
  },
  ignore1: {
    marginLeft: 8,
  },
  spacer: {
    display: "none",
  },
  inputBase: {
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  input: {
    borderRadius: Border.br_9xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  formItem: {
    paddingBottom: Padding.p_base,
    zIndex: 2,
    display: "none",
    backgroundColor: Color.colorGray_600,
    alignSelf: "stretch",
  },
  form: {
    left: 0,
    top: 0,
  },
  actions: {
    top: 213,
    left: 0,
  },
  forgotPassword: {
    top: 165,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorBlue,
    left: 0,
  },
  formParent: {
    top: 264,
    height: 257,
    left: 33,
  },
  frame7011: {
    marginLeft: -72.5,
    top: 27,
    height: 51,
  },
  text: {
    left: 32,
    lineHeight: 21,
    top: 0,
    color: Color.colorRed,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frame7011Parent: {
    marginLeft: -73,
    top: 647,
    height: 78,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorRed,
    left: 0,
    top: 0,
  },
  groupIcon: {
    height: "100%",
    width: "19.25%",
    top: "0%",
    right: "80.75%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    top: 11,
    left: 51,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.grayWhite,
    position: "absolute",
  },
  groupParent: {
    height: "64.57%",
    width: "65.74%",
    top: "17.14%",
    right: "17.28%",
    bottom: "18.29%",
    left: "16.98%",
    position: "absolute",
  },
  rectangleParent: {
    top: 541,
    left: 33,
  },
  userLogin: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UserLogin;

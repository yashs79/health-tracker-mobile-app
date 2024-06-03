import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent2 = ({
  vector,
  orthopedic,
  propMarginTop,
  propWidth,
  propHeight,
  propMarginLeft,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.frameParent, styles.frameFlexBox, frameViewStyle]}>
      <View style={styles.frameFlexBox}>
        <View style={[styles.vectorWrapper, styles.vectorWrapperFlexBox]}>
          <Image
            style={[styles.vectorIcon, vectorIconStyle]}
            resizeMode="cover"
            source={vector}
          />
        </View>
        <View style={styles.orthopedicWrapper}>
          <Text style={styles.orthopedic}>{orthopedic}</Text>
        </View>
      </View>
      <View style={[styles.frameWrapper, frameView1Style]}>
        <View style={styles.vectorWrapperFlexBox}>
          <Text style={styles.viewDetails}>View details</Text>
          <Image
            style={styles.iconSelectDown}
            resizeMode="cover"
            source={require("../assets/-iconselectdown.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 24,
    height: 27,
  },
  vectorWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorRed,
    borderWidth: 1,
    width: 57,
    height: 57,
    padding: Padding.p_xs,
    overflow: "hidden",
  },
  orthopedic: {
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.grayBlack,
  },
  orthopedicWrapper: {
    marginLeft: 9,
  },
  viewDetails: {
    fontSize: FontSize.badgeLabel_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    color: Color.grayBlack,
  },
  iconSelectDown: {
    width: 8,
    height: 9,
    marginLeft: 5,
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    marginLeft: 78,
    overflow: "hidden",
  },
  frameParent: {
    alignSelf: "stretch",
  },
});

export default FrameComponent2;

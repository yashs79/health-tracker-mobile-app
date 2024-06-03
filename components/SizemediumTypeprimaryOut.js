import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizemediumTypeprimaryOut = ({
  icon,
  text,
  icon2,
  iconRight = false,
  iconLeft = false,
  sizemediumTypeprimaryOutPosition,
  sizemediumTypeprimaryOutBackgroundColor,
  sizemediumTypeprimaryOutBorderColor,
  sizemediumTypeprimaryOutAlignSelf,
  textFontSize,
  textLineHeight,
  textFontFamily,
  textFontWeight,
}) => {
  const sizemediumTypeprimaryOutStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sizemediumTypeprimaryOutPosition),
      ...getStyleValue(
        "backgroundColor",
        sizemediumTypeprimaryOutBackgroundColor
      ),
      ...getStyleValue("borderColor", sizemediumTypeprimaryOutBorderColor),
      ...getStyleValue("alignSelf", sizemediumTypeprimaryOutAlignSelf),
    };
  }, [
    sizemediumTypeprimaryOutPosition,
    sizemediumTypeprimaryOutBackgroundColor,
    sizemediumTypeprimaryOutBorderColor,
    sizemediumTypeprimaryOutAlignSelf,
  ]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
      ...getStyleValue("fontFamily", textFontFamily),
      ...getStyleValue("fontWeight", textFontWeight),
    };
  }, [textFontSize, textLineHeight, textFontFamily, textFontWeight]);

  return (
    <View
      style={[styles.sizemediumTypeprimaryOut, sizemediumTypeprimaryOutStyle]}
    >
      {iconLeft && (
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={icon}
        />
      )}
      <View style={[styles.text, styles.textSpaceBlock]}>
        <Text style={[styles.text1, text1Style]}>{text}</Text>
      </View>
      {iconRight && (
        <Image
          style={[styles.icon2, styles.textSpaceBlock]}
          resizeMode="cover"
          source={icon2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    display: "none",
    height: 16,
    width: 16,
  },
  textSpaceBlock: {
    marginLeft: 8,
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyRegular,
    color: Color.grayWhite,
    textAlign: "left",
  },
  text: {
    backgroundColor: Color.colorGray_600,
    justifyContent: "center",
  },
  icon2: {
    display: "none",
    height: 16,
    width: 16,
  },
  sizemediumTypeprimaryOut: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.themePrimary,
    borderStyle: "solid",
    borderColor: Color.themePrimary,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default SizemediumTypeprimaryOut;

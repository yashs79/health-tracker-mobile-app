import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HierarchyprimaryListfalse = ({
  text = "Text line",
  hierarchyprimaryListfalsePosition,
  hierarchyprimaryListfalseMarginLeft,
  textColor,
  textFontSize,
  textLineHeight,
  textFontFamily,
  textFontWeight,
}) => {
  const hierarchyprimaryListfalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", hierarchyprimaryListfalsePosition),
      ...getStyleValue("marginLeft", hierarchyprimaryListfalseMarginLeft),
    };
  }, [hierarchyprimaryListfalsePosition, hierarchyprimaryListfalseMarginLeft]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
      ...getStyleValue("fontFamily", textFontFamily),
      ...getStyleValue("fontWeight", textFontWeight),
    };
  }, [textColor, textFontSize, textLineHeight, textFontFamily, textFontWeight]);

  return (
    <View
      style={[styles.hierarchyprimaryListfalse, hierarchyprimaryListfalseStyle]}
    >
      <Text style={[styles.text, text2Style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyRegular,
    color: Color.bodyTextBodyColor,
    textAlign: "left",
  },
  hierarchyprimaryListfalse: {
    backgroundColor: Color.colorGray_600,
    overflow: "hidden",
    justifyContent: "center",
  },
});

export default HierarchyprimaryListfalse;

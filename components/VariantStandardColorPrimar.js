import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VariantStandardColorPrimar = ({
  content = "1",
  variantStandardColorPrimaPosition,
  variantStandardColorPrimaBackgroundColor,
  variantStandardColorPrimaTop,
  variantStandardColorPrimaLeft,
  variantStandardColorPrimaWidth,
  variantStandardColorPrimaHeight,
  textFontSize,
}) => {
  const variantStandardColorPrimarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", variantStandardColorPrimaPosition),
      ...getStyleValue(
        "backgroundColor",
        variantStandardColorPrimaBackgroundColor
      ),
      ...getStyleValue("top", variantStandardColorPrimaTop),
      ...getStyleValue("left", variantStandardColorPrimaLeft),
      ...getStyleValue("width", variantStandardColorPrimaWidth),
      ...getStyleValue("height", variantStandardColorPrimaHeight),
    };
  }, [
    variantStandardColorPrimaPosition,
    variantStandardColorPrimaBackgroundColor,
    variantStandardColorPrimaTop,
    variantStandardColorPrimaLeft,
    variantStandardColorPrimaWidth,
    variantStandardColorPrimaHeight,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
    };
  }, [textFontSize]);

  return (
    <View
      style={[
        styles.variantstandardColorprimar,
        variantStandardColorPrimarStyle,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.badgeLabel_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.badgeLabel,
    color: Color.grayWhite,
    textAlign: "left",
  },
  variantstandardColorprimar: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryMain,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_6xs_5,
    paddingVertical: 0,
  },
});

export default VariantStandardColorPrimar;

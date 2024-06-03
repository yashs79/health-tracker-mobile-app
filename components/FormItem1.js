import * as React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Border, Color, Padding, FontFamily, FontSize } from "../GlobalStyles";

const FormItem1 = () => {
  return (
    <View style={styles.formItem}>
      <Image
        style={styles.labelIcon}
        resizeMode="cover"
        source={require("../assets/label.png")}
      />
      <View style={[styles.input, styles.inputFlexBox]}>
        <TextInput
          style={[styles.inputBase, styles.inputFlexBox]}
          placeholder="Enter your username"
          placeholderTextColor="#6c757d"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_9xs,
  },
  labelIcon: {
    maxWidth: "100%",
    height: 32,
    width: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  inputBase: {
    flex: 1,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    overflow: "hidden",
  },
  input: {
    alignSelf: "stretch",
  },
  formItem: {
    backgroundColor: Color.colorGray_600,
    paddingBottom: Padding.p_base,
    zIndex: 1,
    alignSelf: "stretch",
  },
});

export default FormItem1;

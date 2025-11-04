import React from "react";
import { View, Text, Pressable, Image, StyleSheet, ImageBackground } from "react-native";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  theme: any;
}

const Header: React.FC<HeaderProps> = ({ isDark, setIsDark, theme }) => {
  const bgImage = isDark
    ? require("../assets/images/bg-mobile-dark.jpg")
    : require("../assets/images/bg-mobile-light.jpg");

  return (
    <ImageBackground
      source={bgImage}
      style={styles.headerBackground}
      imageStyle={styles.imageStyle}
      resizeMode="cover"
    >
      <View style={styles.headerContent}>
        <Text style={[styles.title, { color: theme.primaryText }]}>TODO</Text>
        <Pressable onPress={() => setIsDark(!isDark)} style={styles.toggleButton}>
          <Image
            source={
              isDark
                ? require("../assets/images/icon-sun.svg")
                : require("../assets/images/icon-moon.svg")
            }
            style={styles.icon}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  imageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "JosefinSans-Regular", // ensure this font is loaded
    letterSpacing: 10,
  },
  toggleButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

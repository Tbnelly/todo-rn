import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";

interface FooterProps {
  theme: any;
}

export default function Footer({ theme }: FooterProps) {
  return (
    <View style={styles.footer}>
      <View style={styles.icons} /> {/* Optional icons row */}

      
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    marginVertical: 40,
    paddingHorizontal: 16,
  },
  icons: {
    height: 40,
    width: 120,
    marginBottom: 8,
    // Add social icons if needed
  },
  attribution: {
    fontSize: 12,
    textAlign: "center",
    lineHeight: 16,
  },
  link: {
    textDecorationLine: "underline",
  },
});

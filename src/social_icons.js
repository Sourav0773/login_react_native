import React from "react";
import { View, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SocialIcons = ({ icon }) => {
  return (
    <View style={styles.socialContainerDesign}>
       <Ionicons name={icon} size={30} color="rgb(66, 150, 235)" />
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainerDesign: {
    backgroundColor: "white",
    height: 65,
    width: 90,
    borderRadius: 15,
    shadowColor: "rgb(14, 121, 229)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center", 
  },
});

export default SocialIcons;
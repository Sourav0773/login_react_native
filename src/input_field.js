import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputFieldDesign = ({ placeholder, iconName}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.CircularContainerPerson}>
        <Ionicons name={iconName} size={23} style={styles.personIcon} />
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="lightgrey"
        style={styles.UsernameInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    width: "85%",
    elevation: 9,
    shadowColor: "rgb(16, 119, 221)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
  CircularContainerPerson: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: -5,
    shadowColor: "rgb(16, 119, 221)",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 15,
  },
  UsernameInput: {
    flex: 1,
    height: 50,
    paddingLeft: 70,
  },
  personIcon: {
    color: "rgb(113, 164, 214)",
  },
});

export default InputFieldDesign;

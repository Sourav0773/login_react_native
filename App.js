import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputFieldDesign from "./src/input_field";
import { Ionicons } from "@expo/vector-icons";
import SocialIcons from "./src/social_icons";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/blue.jpg_preview_rev_1.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      <View style={styles.inputField}>
        <InputFieldDesign placeholder="Username" iconName="person-outline" />
        <InputFieldDesign
          placeholder="Password"
          iconName="lock-closed-outline"
          secureTextEntry
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </View>

      <View style={styles.Or_sign_in_with}>
        <View style={styles.line} />
        <Text style={styles.Or_sign_in_withText}>Or sign in with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <SocialIcons icon="logo-google" />
        <SocialIcons icon="logo-facebook" />
        <SocialIcons icon="logo-twitter" />
      </View>

      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text style={styles.signupLink}>Sign up here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 110,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 14,
    color: "grey",
    marginBottom: 30,
  },
  inputField: {
    gap: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "rgb(16, 119, 221)",
    width: "40%",
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "rgb(16, 119, 221)",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 12,
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  Or_sign_in_with: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "lightgrey",
  },
  Or_sign_in_withText: {
    marginHorizontal: 10,
    color: "grey",
    fontSize: 14,
  },
  socialContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 35,
  },
  signupText: {
    marginTop: 100,
  },
  signupLink: {
    color: "rgb(16, 119, 221)",
    fontWeight: "bold",
  },
});

export default Login;

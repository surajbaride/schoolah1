import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'; // Import icons

const FifthScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/vector-design-cabin-icon-style_822882-22083.jpg?w=740",
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Begin Your Learning Adventure</Text>
        <Text style={styles.headerSubtitle}>
          Let's explore the possibilities within your personalized learning space.
        </Text>
      </View>

      {/* Login Options */}
      <View style={styles.loginOptionsContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <View style={styles.buttonContent}>
          <Image
          source={{
            uri: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
          }}
          style={styles.logoImage}
        />
            <Text style={styles.loginButtonText}>Continue With Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <View style={styles.buttonContent}>
            <Ionicons name="logo-apple" size={20} color="#000" />
            <Text style={styles.loginButtonText}>Continue With Apple</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <View style={styles.buttonContent}>
            <FontAwesome name="facebook" size={20} color="#1877F2" />
            <Text style={styles.loginButtonText}>Continue With Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sign Up and Sign In Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <Text style={styles.footerText}>
        By signing in, you are confirming your understanding and acceptance of
        our{" "}
        <Text style={styles.linkText}>privacy policy</Text> and{" "}
        <Text style={styles.linkText}>terms of service</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "space-between",
    paddingBottom:"20%"
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  headerImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  logoImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  loginOptionsContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginLeft: 10,
  },
  actionButtonsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#FF6D00",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginVertical: 10,
  },
  signUpButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  signInButton: {
    backgroundColor: "#FFF4E5",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FF6D00",
    marginVertical: 10,
  },
  signInButtonText: {
    fontSize: 16,
    color: "#FF6D00",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  linkText: {
    color: "#FF6D00",
    textDecorationLine: "underline",
  },
});

export default FifthScreen;

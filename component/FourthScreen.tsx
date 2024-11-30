import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const FourthScreen = () => {
  const navigation = useNavigation();

  // Navigate to the main app or home screen
  const handleGetStarted = () => {
    navigation.navigate("FifthSAcreen"); // Replace "HomeScreen" with your target screen
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/vector-design-cabin-icon-style_822882-22083.jpg?w=740",
          }}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Schoolah</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQI7u52DHJhnJ9NTFdeQd3oOqnC2i6rsMjvQHcVxkvdEhy7gc6B",
          }}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Title and Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Choose Smart Learning for Lasting Success</Text>
        <Text style={styles.subtitle}>
          Step into a realm of educational excellence with Schoolah. Discover
          courses tailored to your interests and elevate your learning journey.
        </Text>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
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
  logoContainer: {
    marginTop:10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  illustration: {
    width: 250,
    height: 250,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: "#FF6D00",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  getStartedText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FourthScreen;

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SecondScreen = () => {
  const navigation = useNavigation();

  // Navigate to the ThirdScreen
  const navigateToThirdScreen = () => {
    navigation.navigate("ThirdScreen");
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
            uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYoyh_m2YYDKJUbhoOk_gMh5S76q05twAnqTf5dYIs1Mr7Zd0E",
          }}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Title and Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Elevate Your Learning Experience</Text>
        <Text style={styles.subtitle}>
          Step into a realm of educational excellence with Schoolah. Discover
          courses tailored to your interests and elevate your learning journey.
        </Text>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footerContainer}>
        {/* Skip Button */}
        <TouchableOpacity onPress={navigateToThirdScreen}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Pagination */}
        <View style={styles.paginationContainer}>
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>

        {/* Next Button */}
        <TouchableOpacity onPress={navigateToThirdScreen}>
          <Text style={styles.nextText}>Next</Text>
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
    paddingBottom:"10%"
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  skipText: {
    fontSize: 16,
    color: "#999",
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FF6D00",
    marginHorizontal: 4,
  },
  nextText: {
    fontSize: 16,
    color: "#FF6D00",
  },
});

export default SecondScreen;

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ThirdScreen = () => {
  const navigation = useNavigation();

  // Navigate to the FourthScreen
  const navigateToFourthScreen = () => {
    navigation.navigate("FourthScreen");
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
            uri: "https://img.freepik.com/premium-vector/startup-success-technology-growth-innovation-idea-thought-woman-statistics_783192-45.jpg?w=740",
          }}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Title and Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Achieve Brilliance Through Smart Learning</Text>
        <Text style={styles.subtitle}>
          Step into a realm of educational excellence with Schoolah. Discover
          courses tailored to your interests and elevate your learning journey.
        </Text>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footerContainer}>
        {/* Skip Button */}
        <TouchableOpacity onPress={navigateToFourthScreen}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Pagination */}
        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
        </View>

        {/* Next Button */}
        <TouchableOpacity onPress={navigateToFourthScreen}>
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

export default ThirdScreen;

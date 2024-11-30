import { useNavigation } from "@react-navigation/native"; // Use this for navigation
import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";

const FirstScreen = () => {
  const navigation = useNavigation(); // Get the navigation instance
  const spinAnim = useRef(new Animated.Value(0)).current; // Initialize animation for spinning

  useEffect(() => {
    // Start spinning animation
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Navigate after 5 seconds using navigation.navigate
    const timer = setTimeout(() => {
      navigation.navigate('SecondScreen'); // Navigate to the next screen
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, [navigation, spinAnim]);

  // Rotate the spinner smoothly
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* Displaying Image */}
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/vector-design-cabin-icon-style_822882-22083.jpg?w=740",
        }}
        style={{ width: 100, height: 100 }}
      />

      {/* Displaying Text */}
      <Text style={styles.text1}>Schoolah</Text>

      {/* Animated Circular Loader */}
      <Animated.View
        style={[styles.loader, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text1: {
    paddingLeft: 10,
    top: 20,
    fontSize: 20,
  },
  loader: {
    marginTop: "70%", // Adjusted positioning for loader
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: "#007bff",
    borderRadius: 25,
    borderTopColor: "transparent", // This creates the spinning effect
  },
});

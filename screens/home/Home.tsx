import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Button, IconButton, MD3Colors } from "react-native-paper";

type Props = {
  email: string;
  password: string;
  userId: string;
  userName: string;
  userRole: string;
};

const Home = ({ route }) => {
  const { email, password, userId, userName, userRole }: Props = route.params;
  console.log("In Home =", email, password, userId, userName, userRole);
  function handleCameraButtonClick() {
    console.log("Camera button clicked");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <IconButton
        icon="camera"
        iconColor={MD3Colors.error70}
        size={50}
        onPress={() => handleCameraButtonClick()}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Adjust for status bar height on Android
    position: "relative",
  },
  button: {
    position: "absolute",
    bottom: 35,
    right: 25,
    backgroundColor: "black",
  },
});

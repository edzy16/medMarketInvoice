import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  email: string;
  password: string;
  userId: string;
  userName: string;
  userRole: string;
};

const Home = ({ email, password, userId, userName, userRole }: Props) => {
  console.log("Homescreen", email, password, userId, userName, userRole);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

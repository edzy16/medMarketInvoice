import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 12px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #4a9ff5;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/icons/meds.png")}
        style={styles.icon}
      />
      <Title>Login</Title>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Button>
        <ButtonText>Sign In</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    height: 50,
    width: 200,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

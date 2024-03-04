import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from "react-native";
import CustomSnackbar from "../../components/customSnackbar";
import { getCurrentLocation } from "../../utils/currentLocation";

type Props = {};

const SignUp = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);

  const callSubmitApi = () => {};

  const handleSignUp = () => {
    // Display the error message from the api using snackbar
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (
      name.trim().length < 0 ||
      password.trim().length < 0 ||
      email.trim().length < 0 ||
      role.trim().length < 0
    ) {
      setVisible(true);
      setSnackbarMessage("Please fill all the fields");
      console.log("Please fill all the fields");
      return;
    } else if (password !== confirmPassword) {
      setVisible(true);
      setSnackbarMessage("Passwords are not the same");
      console.log("Passwords are not the same");
      return;
    } else if (role === "REP" && !currentLocation) {
      setVisible(true);
      setSnackbarMessage("Please get the current location");
      console.log("Please get the current location");
      return;
    } else if (!emailRegex.test(email)) {
      setVisible(true);
      setSnackbarMessage("Please enter a valid email");
      console.log("Please enter a valid email");
      return;
    } else if (!passwordRegex.test(password)) {
      setVisible(true);
      setSnackbarMessage(
        "Password must contain at least 8 characters, including letters and numbers"
      );
      console.log(
        "Password must contain at least 8 characters, including letters and numbers",
        password
      );
      return;
    }
    console.log(
      "All fields are correct, ready to send the request to the server"
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Full Name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <Picker
        style={styles.input}
        selectedValue={role}
        placeholder="select a role"
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="Select a role" value="" />
        <Picker.Item label="Customer" value="USER" />
        <Picker.Item label="Medical Rep" value="REP" />
      </Picker>
      {role === "REP" && (
        <View style={{ paddingBottom: 16 }}>
          <Text style={{ color: "red" }}>
            Make sure you are in your medical shop to give the correct current
            location
          </Text>
          <Button
            title="Get Current Location"
            onPress={async () => {
              const location = await getCurrentLocation();
              setCurrentLocation(location);
            }}
            color="#007AFF"
          />
        </View>
      )}
      <Button title="Register" onPress={handleSignUp} />
      <CustomSnackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        message={snackbarMessage}
        bgColor={false}
      />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

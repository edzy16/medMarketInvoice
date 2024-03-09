import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export default async function takePhoto() {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }
  }

  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    // aspect: [4, 3],
    quality: 0.5,
  });

  console.log(result);

  if (!result.canceled) {
    // Do something with the image
  }
  return result.assets;
}

import * as Location from "expo-location";

export async function getCurrentLocation() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.error("Permission to access location was denied");
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  console.log("Current location:", location);
  return location;
}

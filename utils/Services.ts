// Function to make a POST request
// const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_URL = "https://medical-invoice-app-backend.onrender.com/api/v1/user/"; // Replace with your API URL
export async function postData(endpoint: string = "", data = {}) {
  console.log("Api url", API_URL + endpoint);

  const response = await fetch(API_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any other headers if needed
    },
    body: JSON.stringify(data),
  });
  return await response.json(); // Parse JSON response
}

// Function to make a POST request with multipart/form-data
export async function postMultipartData(
  endpoint = "",
  formData = new FormData()
) {
  const response = await fetch(API_URL + endpoint, {
    method: "POST",
    body: formData,
  });
  return await response.json(); // Parse JSON response
}

// Function to make a GET request
export async function getData(endpoint = "") {
  const response = await fetch(API_URL + endpoint);
  return await response.json(); // Parse JSON response
}

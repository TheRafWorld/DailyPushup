import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
  <Stack screenOptions={{
    headerShown: false,
    headerStyle: {
      backgroundColor: "#1E1E1E",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    animation: "fade_from_bottom",
  }}>
    <Stack.Screen name="login" />
    <Stack.Screen name="signup" />
  </Stack>
  );
}

import { AuthProvider } from "@/context/AuthContext";
import { Stack, router } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {

  let isAuth = false;
  useEffect(() => {
    if (!isAuth) {
      // Redirect to the login page if the user is not authenticated
      router.replace("/(auth)/login");
    } else {
      // Redirect to the main app page if the user is authenticated
      router.replace("/(tabs)");
    }
  }, []);

  return (
    <AuthProvider>
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
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </AuthProvider>
  );
}

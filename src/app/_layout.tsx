import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RouteGuard() {
  const router = useRouter();
  const { user } = useAuth();
  const segments = useSegments();

  const inAuthGroup = segments[0] === "(auth)";
  const inTabsGroup = segments[0] === "(tabs)";

  let isAuth = false;
  useEffect(() => {
    if (!user) {
      if (!inAuthGroup) {
        // Redirect to the login page if the user is not authenticated and not in the auth group
        router.replace("/(auth)/login");
      }
    } else {
      if (!inTabsGroup) {
        // Redirect to the main app page if the user is authenticated and not in the tabs group
        router.replace("/(tabs)");
      }
    }
  }, [user, segments, router]);
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
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard />
    </AuthProvider>
  );
}

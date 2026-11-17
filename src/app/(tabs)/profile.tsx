import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Edit src/app/(tabs)/profile.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

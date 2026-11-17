import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Edit src/app/(tabs)/about.tsx to edit this screen.</Text>
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

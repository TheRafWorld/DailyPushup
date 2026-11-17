import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@expo/ui/swift-ui";


export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Edit src/app/(tabs)/index.tsx to edit this screen.</Text>
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

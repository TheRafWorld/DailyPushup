import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@expo/ui/swift-ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";


export default function SignupScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const { signUp } = useAuth();

    const handleSignup = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields.");
        }

        if (password.length < 3) {
            Alert.alert("Error", "Password must be at least 3 characters long.");
        }

        setIsLoading(true)

        try {
            await signUp(email, password);
            router.push("/(auth)/onboarding");
        } catch (error) {
            console.error("Signup error:", error);
            Alert.alert("Error", "Failed to sign up. Please try again.");
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <View style={styles.content}>
                <Text style={styles.title}>Create an Account</Text>
                <Text style={styles.subtitle}>Sign up to get started.</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={"#999"}
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={"#999"}
                        secureTextEntry={true}
                        autoComplete="password"
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSignup}>
                        {isLoading ? (
                            <ActivityIndicator size={24} color={"#fff"} />
                        ) : (
                            <Text style={styles.buttonText}>Sign Up</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => router.push("/(auth)/login")}>
                        <Text style={styles.linkButtonText}>
                            Already have an account? <Text style={styles.linkButtonTextBold}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "light",
        marginBottom: 32,
        color: "#666",
    },
    form: {
        width: "100%",
        paddingBottom: 20,
    },
    input: {
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    button: {
        backgroundColor: "#000",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        marginBottom: 16,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    linkButton: {
        marginTop: 24,
        alignItems: "center",
    },
    linkButtonText: {
        color: "#666",
        fontSize: 14,
    },
    linkButtonTextBold: {
        fontWeight: "600",
        color: "#000",
    },
});

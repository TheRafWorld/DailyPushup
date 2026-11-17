import { Icon, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return ( 
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#1E1E1E",
      tabBarInactiveTintColor: "#8E8E93",
      tabBarStyle: {
        backgroundColor: "#F9F9F9",
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
    }}>
        <Tabs.Screen name="index" 
          options={{ 
            title: "Home", 
            tabBarIcon: ({ size, color, focused }) => 
            <Ionicons 
              name={focused ? "home" : "home-outline"}
              size={size} 
              color={color} 
            />
          }} 
        />
        <Tabs.Screen name="profile" 
          options={{
            title: "Profile", 
            tabBarIcon: ({ size, color, focused }) => 
            <Ionicons 
              name={focused ? "person" : "person-outline"}
              size={size} 
              color={color} 
            /> 
          }} 
        />
        <Tabs.Screen name="about" 
          options={{
            title: "About", 
            tabBarIcon: ({ size, color, focused }) => 
            <Ionicons 
              name={focused ? "information-circle" : "information-circle-outline"}
              size={size} 
              color={color} 
            /> 
          }} 
        />
    </Tabs>
  );
}

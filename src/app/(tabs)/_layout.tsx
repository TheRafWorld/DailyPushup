import { NativeTabs } from "expo-router/unstable-native-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return ( 
    <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"house"}/>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"person"}/>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
          <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"info.circle"}/>
        </NativeTabs.Trigger>
    </NativeTabs>
  );
}

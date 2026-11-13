import { MenuView } from "@expo/ui/community/menu";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const OPTIONS = ["Alpha", "Beta", "Gamma"];

export default function App() {
  const [selected, setSelected] = useState("Alpha");

  return (
    <View style={styles.container}>
      <MenuView
        actions={OPTIONS.map((title) => ({
          id: title,
          title,
          state: selected === title ? "on" : "off",
        }))}
        onPressAction={(event) => setSelected(event.nativeEvent.event)}
      >
        <View style={styles.trigger}>
          <Text style={styles.triggerText}>{selected} ▾</Text>
        </View>
      </MenuView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  trigger: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
  },
  triggerText: {
    fontSize: 18,
  },
});

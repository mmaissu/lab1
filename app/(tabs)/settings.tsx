import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function SettingsScreen() {
  const [name, setName] = useState("");

  useEffect(() => {
    loadName();
  }, []);

  const saveName = async () => {
    await AsyncStorage.setItem("studentName", name);
    alert("Сақталды!");
  };

  const loadName = async () => {
    const savedName = await AsyncStorage.getItem("studentName");
    if (savedName) {
      setName(savedName);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Баптаулар</Text>

      <TextInput
        placeholder="Атыңды енгіз"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={saveName}>
        <Text style={styles.buttonText}>Сақтау</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#16a34a",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

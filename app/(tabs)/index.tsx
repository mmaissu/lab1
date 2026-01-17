import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet, Pressable, Linking } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/react-logo.png")}
        style={styles.avatar}
      />

      <Text style={styles.name}>Maira Student</Text>
      <Text style={styles.info}>IT студенті</Text>

      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL("tel:+77001234567")}
      >
        <Text style={styles.buttonText}>📞 Телефон</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL("mailto:maira@example.com")}
      >
        <Text style={styles.buttonText}>✉️ Email</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4f46e5",
    padding: 12,
    borderRadius: 10,
    width: "70%",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

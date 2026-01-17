import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";

const resources = [
  {
    title: "Expo Documentation",
    url: "https://docs.expo.dev/",
  },
  {
    title: "React Native Docs",
    url: "https://reactnative.dev/",
  },
  {
    title: "JavaScript Info",
    url: "https://javascript.info/",
  },
  {
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
  },
];

export default function ResourcesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Білім ресурстары</Text>

      {resources.map((item, index) => (
        <Pressable
          key={index}
          style={styles.card}
          onPress={() => Linking.openURL(item.url)}
        >
          <Text style={styles.link}>{item.title}</Text>
          <Text style={styles.url}>{item.url}</Text>
        </Pressable>
      ))}
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
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#f3f4f6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
  },
  url: {
    fontSize: 12,
    color: "gray",
  },
});

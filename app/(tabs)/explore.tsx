import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";

export default function DataScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Студент туралы мәліметтер</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Аты-жөні:</Text>
        <Text>Maira Student</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Тобы:</Text>
        <Text>IT-231</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Мамандығы:</Text>
        <Text>Ақпараттық жүйелер</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Университет:</Text>
        <Text>ALMAU</Text>
      </View>
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
  card: {
    backgroundColor: "#f3f4f6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
});

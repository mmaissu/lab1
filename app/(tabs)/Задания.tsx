import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function TodoScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const saveTasks = async (newTasks: string[]) => {
    setTasks(newTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const loadTasks = async () => {
    const stored = await AsyncStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  };

  const addTask = () => {
    if (!task.trim()) return;
    saveTasks([...tasks, task]);
    setTask("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Тапсырмалар тізімі</Text>

      <View style={styles.row}>
        <TextInput
          placeholder="Жаңа тапсырма"
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />
        <Pressable style={styles.addButton} onPress={addTask}>
          <Text style={styles.addText}>+</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item}</Text>
          </View>
        )}
      />
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
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
  },
  addButton: {
    backgroundColor: "#2563eb",
    marginLeft: 10,
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  addText: {
    color: "white",
    fontSize: 20,
  },
  task: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
});

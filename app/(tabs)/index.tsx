import { TaskData } from "@/components/AddTaskForm";
import AddTaskModal from "@/components/AddTaskModal";
import Task from "@/components/Task";
import Ionicons from "@expo/vector-icons/Ionicons";
import Constants from "expo-constants";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.plusButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name={"add-sharp"} color={"#fff"} size={24} />
      </Pressable>

      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Task task={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Start gamification by adding your first task!
          </Text>
        </View>
      )}

      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddTask={(newTask) =>
          setTasks((prevTasks) => [...prevTasks, newTask])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    paddingTop: Constants.statusBarHeight,
  },
  plusButton: {
    alignItems: "flex-end",
    paddingHorizontal: 16,
  },
  text: {
    color: "#fff",
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
});

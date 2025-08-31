import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { TaskData } from "./AddTaskForm";

interface TaskProps {
  task: TaskData;
}

export default function Task({task}: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="footsteps-outline" size={24} style={styles.icon} />
      </View>

      <View>
        <Text style={styles.text}>{task.name}</Text>
        <Text style={styles.subtext}>{task.points} points</Text>
        <Text style={styles.taskTag}>{task.tag}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  text: {
    color: "#fff",
    fontSize: 22,
  },
  subtext: {
    color: "#A1A3B5",
    fontSize: 14,
  },
  iconContainer: {
    width: 48,
    height: 48,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3E4246",
    borderRadius: 10,
  },
  icon: {
    color: "#fff",
  },
  taskTag: {
    fontSize: 12,
    color: '#777',
  },
});

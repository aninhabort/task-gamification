import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export interface TaskData {
  name: string;
  points: number;
  tag: "steps" | "water" | "read" | "gym" | "eat healthy";
}

interface AddTaskFormProps {
  onAddTask: (task: TaskData) => void;
}

export default function AddTaskForm ({ onAddTask }: AddTaskFormProps) {
  const [taskName, setTaskName] = useState<string>("");
  const [points, setPoints] = useState<string>("");
  const [tag, setTag] = useState<TaskData["tag"]>("steps");

  const handleAddTask = () => {
    if (!taskName || !points || isNaN(parseInt(points))) {
      alert("Please fill in the task name and points correctly");
      return;
    }

    const newTask: TaskData = {
      name: taskName,
      points: parseInt(points),
      tag: tag,
    };

    onAddTask(newTask);

    setTaskName("");
    setPoints("");
    setTag("steps");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task:</Text>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={setTaskName}
        placeholder="Ex: Drink 8 glasses of water"
      />

      <Text style={styles.label}>Points:</Text>
      <TextInput
        style={styles.input}
        value={points}
        onChangeText={setPoints}
        keyboardType="numeric"
        placeholder="Ex: 100"
      />

      <Text style={styles.label}>Tag:</Text>
      <Picker
        selectedValue={tag}
        style={styles.picker}
        onValueChange={(itemValue) => setTag(itemValue as TaskData["tag"])}
      >
        <Picker.Item label="Steps" value="steps" />
        <Picker.Item label="Water" value="water" />
        <Picker.Item label="Read" value="read" />
        <Picker.Item label="Gym" value="gym" />
        <Picker.Item label="Eat healthy" value="eat healthy" />
      </Picker>

      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  picker: {
    marginBottom: 15,
  },
});

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import AddTaskForm, { TaskData } from "./AddTaskForm";

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (task: TaskData) => void;
}

export default function AddTaskModal ({ visible, onClose, onAddTask }: AddTaskModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-outline" size={30} color="#666" />
          </Pressable>
          
          <AddTaskForm
            onAddTask={(task) => {
              onAddTask(task);
              onClose();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

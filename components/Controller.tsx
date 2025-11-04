import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Task {
  id: string;
  name: string;
  complete: boolean;
}

interface ControllerProps {
  tasks: Task[];
  handleAll: () => void;
  handleActive: () => void;
  handleComplete: () => void;
  handleClear: () => void;
  theme: any;
}

const Controller: React.FC<ControllerProps> = ({
  tasks,
  handleAll,
  handleActive,
  handleComplete,
  handleClear,
  theme,
}) => {
  const remaining = tasks.filter((task) => !task.complete).length;

  return (
    <View style={[styles.container, { backgroundColor: theme.formBackground }]}>
      <Text style={[styles.leftPart, { color: theme.primaryText }]}>{remaining} items left</Text>

      <View style={styles.buttons}>
        <Pressable onPress={handleAll} style={styles.button}>
          <Text style={[styles.buttonText, { color: theme.brightBlue }]}>All</Text>
        </Pressable>
        <Pressable onPress={handleActive} style={styles.button}>
          <Text style={[styles.buttonText, { color: theme.secondaryText }]}>Active</Text>
        </Pressable>
        <Pressable onPress={handleComplete} style={styles.button}>
          <Text style={[styles.buttonText, { color: theme.secondaryText }]}>Completed</Text>
        </Pressable>
      </View>

      <Pressable onPress={handleClear} style={styles.clearButton}>
        <Text style={[styles.clearText, { color: theme.secondaryText }]}>Clear Completed</Text>
      </Pressable>
    </View>
  );
};

export default Controller;

const styles = StyleSheet.create({
  container: { padding: 16, borderRadius: 8, marginVertical: 8, alignItems: "center" },
  leftPart: { marginBottom: 12 },
  buttons: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginBottom: 12 },
  button: { paddingHorizontal: 12, paddingVertical: 6, marginHorizontal: 4 },
  buttonText: { fontWeight: "700" },
  clearButton: { paddingHorizontal: 12, paddingVertical: 6 },
  clearText: { fontWeight: "600" },
});

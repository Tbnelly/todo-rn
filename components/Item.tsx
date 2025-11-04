import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

interface Task {
  id: string;
  name: string;
  complete: boolean;
}

interface ItemProps {
  task: Task;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  theme: any;
}

const Item: React.FC<ItemProps> = ({ task, deleteTask, toggleComplete, theme }) => {
  return (
    <View style={[styles.item, { backgroundColor: theme.formBackground, boxShadow: theme.boxShadow }]}>
      <Pressable style={styles.checkContainer} onPress={() => toggleComplete(task.id)}>
        <View
          style={[
            styles.checkbox,
            { borderColor: theme.borderColor },
            task.complete && { backgroundColor: theme.brightBlue, borderColor: theme.brightBlue },
          ]}
        >
          {task.complete && (
            <Image
              source={require("../assets/images/icon-check.svg")}
              style={[styles.checkIcon]}
              resizeMode="contain"
            />
          )}
        </View>

        <Text style={[styles.taskName, { color: task.complete ? theme.completedText : theme.primaryText }]}>
          {task.name}
        </Text>
      </Pressable>

      <Pressable onPress={() => deleteTask(task.id)}>
        <Image
          source={require("../assets/images/icon-cross.svg")}
          style={[styles.crossIcon, { tintColor: theme.secondaryText }]}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  checkContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  checkbox: { width: 24, height: 24, borderWidth: 1, borderRadius: 12, marginRight: 16, justifyContent: "center", alignItems: "center" },
  checkIcon: { width: 12, height: 12 },
  taskName: { fontSize: 16 },
  crossIcon: { width: 20, height: 20 },
});

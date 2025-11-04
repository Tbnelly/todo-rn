// components/ShowList.tsx
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Item from "./Item";

interface Task {
  id: string;
  name: string;
  complete: boolean;
}

interface ShowListProps {
  tasks: Task[];
  filteredTasks: Task[];
  setFilteredTasks: (tasks: Task[]) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  theme: any; // ✅ Add theme prop
}

const ShowList: React.FC<ShowListProps> = ({
  filteredTasks,
  deleteTask,
  toggleComplete,
  theme, // ✅ receive theme
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            task={item}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            theme={theme} // ✅ Pass theme down to Item
          />
        )}
      />
    </View>
  );
};

export default ShowList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  separator: {
    height: 8,
  },
});

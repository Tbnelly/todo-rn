import React, { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import FormList from "../components/FormList";
import ShowList from "../components/ShowList";
import Controller from "../components/Controller";
import Footer from "../components/Footer";
import { v4 as uuidv4 } from "uuid";
import { lightTheme, darkTheme } from "../constants/theme";

type Task = { id: string; name: string; complete: boolean };

const initialState: Task[] = [
  { id: uuidv4(), name: "Complete Online JavaScript Course", complete: true },
  { id: uuidv4(), name: "Jog around the park 3x", complete: false },
  { id: uuidv4(), name: "10 minutes meditation", complete: false },
  { id: uuidv4(), name: "Read for 1 hour", complete: false },
  { id: uuidv4(), name: "Pick up groceries", complete: false },
  {
    id: uuidv4(),
    name: "Complete Todo App on Frontend Mentor",
    complete: false,
  },
];

export default function Layout() {
  const [tasks, setTasks] = useState<Task[]>(initialState);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(initialState);
  const [isDark, setIsDark] = useState(true);

  const theme = isDark ? darkTheme : lightTheme;

  const addTask = (taskName: string) => {
    if (taskName.trim() !== "") {
      const newTask: Task = { id: uuidv4(), name: taskName, complete: false };
      setTasks((prev) => [...prev, newTask]);
      setFilteredTasks((prev) => [...prev, newTask]);
    }
  };

  const deleteTask = (id: string) => {
    const newList = tasks.filter((t) => t.id !== id);
    setTasks(newList);
    setFilteredTasks(newList);
  };

  const toggleComplete = (id: string) => {
    const newList = tasks.map((t) =>
      t.id === id ? { ...t, complete: !t.complete } : t
    );
    setTasks(newList);
    setFilteredTasks(newList);
  };

  const handleAll = () => setFilteredTasks(tasks);
  const handleActive = () => setFilteredTasks(tasks.filter((t) => !t.complete));
  const handleComplete = () =>
    setFilteredTasks(tasks.filter((t) => t.complete));
  const handleClear = () => {
    const newList = tasks.filter((t) => !t.complete);
    setTasks(newList);
    setFilteredTasks(newList);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Header isDark={isDark} setIsDark={setIsDark} theme={theme} />
      <FormList addTask={addTask} theme={theme} />
      <ShowList
        tasks={tasks}
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        theme={theme} // ✅ Must pass theme
      />
      <Controller
        tasks={tasks}
        handleAll={handleAll}
        handleActive={handleActive}
        handleComplete={handleComplete}
        handleClear={handleClear}
        theme={theme}
      />
      <Text style={[styles.dragText, { color: theme.secondaryText }]}>
        Drag and drop to reorder list
      </Text>
      <Footer theme={theme} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  dragText: { textAlign: "center", marginVertical: 16 },
});

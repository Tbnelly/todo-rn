import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

type Props = { addTask: (taskName: string) => void; theme: any; };

export default function FormList({ addTask, theme }: Props) {
  const [text, setText] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: theme.formBackground, borderColor: theme.borderColor }]}>
      <TextInput
        style={[styles.input, { color: theme.primaryText }]}
        placeholder="Create a new todo..."
        placeholderTextColor={theme.secondaryText}
        value={text}
        onChangeText={setText}
      />
      <Pressable style={styles.addButton} onPress={() => { addTask(text); setText(""); }}>
        <Text style={{ color: theme.secondaryText }}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 12, borderRadius: 8, borderWidth: 1, marginVertical: 8, alignItems: "center" },
  input: { flex: 1, fontSize: 16 },
  addButton: { marginLeft: 8, paddingHorizontal: 12, paddingVertical: 8 },
});

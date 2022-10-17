import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Pressed", todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.tilte}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flex: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10
  }
});

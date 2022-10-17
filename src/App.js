import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AddTodo } from "./AddTodo";
import { Navbar } from "./Navbar";
import { Todo } from "./Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  //   setTodos((prev) => [
  //     ...prev,
  //     {
  //       id: Date.now().toString(),
  //       title: title
  //     }
  //   ]);
  // };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 20
    }
  });

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}

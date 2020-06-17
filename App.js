import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import TaskItem from './components/TaskItem'

export default function App() {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  }

  const addTaskHandler = () => {
    setTasks(currentTasks => [...currentTasks, 
      {key: Math.random().toString(), value: enteredTask}]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Task"
          style={styles.textInput}
          onChangeText={taskInputHandler}
          value={enteredTask} />
        <Button title="Add" onPress={addTaskHandler} />
      </View>
      <FlatList 
        data={tasks} 
        renderItem={itemData => (
          <TaskItem title={itemData.item.value} />
        )
      }/>   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  } 
});

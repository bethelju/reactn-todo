import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = task => {
    setTasks(currentTasks => [...currentTasks, 
      {key: Math.random().toString(), value: task}]);
    setIsAddMode(false);
    }
  
  const closeHandler = () => {
    setIsAddMode(false);
  }

  const removeTaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.filter((task) => task.key !== taskId);
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)}/>
      <TaskInput visible={isAddMode} onAddTask={addTaskHandler} onClose={closeHandler}/>
      <FlatList 
        data={tasks} 
        renderItem={itemData => (
          <TaskItem onDelete={removeTaskHandler.bind(this, itemData.item.key)} title={itemData.item.value} />
        )
      }/>   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});

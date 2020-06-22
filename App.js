import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'

export default function App() {
  //Set the react react hooks needed for the component
  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //addTaskHandler that sets the current adds a new task to task list
  const addTaskHandler = task => {
    setTasks(currentTasks => [...currentTasks, 
      {key: Math.random().toString(), value: task}]);
    setIsAddMode(false);
    }
  
  //Closes the add modal upon pressing close button
  const closeHandler = () => {
    setIsAddMode(false);
  }

  //removes the selected (passed) task from the list
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

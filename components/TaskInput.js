import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

//Task Input element that 
const TaskInput = props => {
    //State that holds the entered text
    const [enteredTask, setEnteredTask] = useState('');
    
    //Changes the text state based upon updates to the input element
    const taskInputHandler = (enteredText) => {
        setEnteredTask(enteredText);
    }

    //Handler for when add button is pressed
    const addTaskHandler = () => {
        //If the input is blank, don't add
        if(!enteredTask.length){
            return;
        }
        //Passes to passed in function from App.js
        props.onAddTask(enteredTask);
        setEnteredTask('');
    }

    //Modal for when a new task is to be added
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Task"
                    style={styles.textInput}
                    onChangeText={taskInputHandler}
                    value={enteredTask} />
                <View style={styles.buttonRow}>
                <View style={styles.button}>
                        <Button title="Add" onPress={addTaskHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Close" 
                            onPress={() => {props.onClose()}}
                            color = 'red' />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10
    },
    buttonRow: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    button: {
        width: '40%'
    }
})

export default TaskInput;
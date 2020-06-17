import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('');
    const taskInputHandler = (enteredText) => {
        setEnteredTask(enteredText);
    }

    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTask('');
    }

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
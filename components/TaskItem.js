import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//A single task item that can be long pressed to be deleted
const TaskItem = props => {
    return (
        <TouchableOpacity onLongPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TaskItem
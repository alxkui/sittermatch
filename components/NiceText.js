import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function NiceText({children, weight}) {
    return <Text style={ styles.text }>{ children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Montserrat',
    },
});

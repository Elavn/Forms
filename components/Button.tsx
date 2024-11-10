import { Image, StyleSheet, Platform, View, SafeAreaView, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from "react";

type ButtonProps = {
    title: string,
    onPress: () => void
};

const Button = ({title, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
            <Image
          source={require('@/assets/images/next.png')}
          style={styles.icon}/>
        </TouchableOpacity>
    );
};

export default Button



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 19,
        height: 56,
        width: 290,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnText: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 19.36,
        textAlign: 'center',
        color: '#000000',

    },
    icon: {
        height: 24,
        width: 24,
        marginHorizontal: 5
    }

})
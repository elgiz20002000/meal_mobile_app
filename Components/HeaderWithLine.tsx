import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const HeaderWithLine = ({children}) => {
    return <View style={styles.container}>
        <Text style={styles.text}>
            {children}
        </Text>
        <View style={styles.line}></View>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:20
    },
    line:{
        marginTop:10,
        borderBottomColor:"white",
        borderBottomWidth:2,
        width:'100%'
    }
})

export default HeaderWithLine;
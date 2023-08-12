import React, {useContext} from 'react';
import {FlatList, StyleSheet, View, Text} from "react-native";
import {mainContext} from "../App";
import MealItem from "../Components/MealItem";

const FavoriteScreen = () => {
    const {favorite} = useContext(mainContext)

    return <View style={styles.container}>
        {favorite.length ? <FlatList data={favorite} renderItem={(item) => {
            return <MealItem item={item.item}/>
        }}
                                     keyExtractor={item => item.id}
        /> : <Text style={styles.text}>Empty</Text>}
    </View>
};


const styles = StyleSheet.create({
    container:{
        padding:16
    },
    text:{
        color:'white',
        fontSize:26,
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default FavoriteScreen;
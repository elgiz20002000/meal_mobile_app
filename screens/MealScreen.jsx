import {FlatList, StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {CATEGORIES, MEALS} from "../extra-files/data/dummy-data";
import MealItem from "../Components/MealItem";
import {useEffect, useLayoutEffect} from "react";

const MealScreen = () => {
    const {params:{categoryId}} = useRoute()
    const {setOptions} = useNavigation()

    const mealList = MEALS.filter((item) => {
        return item.categoryIds.indexOf(categoryId) >= 0
    })

    useLayoutEffect(() => {
        const title = CATEGORIES.find(item => item.id === categoryId).title
        setOptions({
            title
        })
    },[])

    return <View style={styles.container}>
        <FlatList data={mealList} renderItem={(item) => {
            return <MealItem item={item.item}/>
        }}
        keyExtractor={item => item.id}
        />
    </View>
};


const styles = StyleSheet.create({
    container:{
        padding:16
    }
})
export default MealScreen;
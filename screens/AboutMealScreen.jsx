import {Alert, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {MEALS} from "../extra-files/data/dummy-data";
import {useContext, useLayoutEffect, useMemo} from "react";
import TextItems from "../Components/TextItems";
import HeaderWithLine from "../Components/HeaderWithLine";
import ItemsList from "../Components/ItemsList";
import IconButton from "../Components/IconButton";
import {mainContext} from "../App";

const AboutMealScreen = () => {
    const {setFavorite, favorite} = useContext(mainContext)
    const {params} = useRoute()
    const {setOptions} = useNavigation()
    const meal = MEALS.find(item => item.id === params.mealId)
    const mealIsFavorite = useMemo(() => {
        return favorite.findIndex(item => item.id === meal.id) >= 0
    }, [meal, favorite])

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => {
                return <IconButton active={mealIsFavorite} onPress={() => {
                    if (!mealIsFavorite) {
                        setFavorite((favorite) => {
                            return [...favorite, meal]
                        })
                        Alert.alert('Info', 'Meal is attached')
                    } else {
                        setFavorite((favorite) => {
                            return favorite.filter(item => item.id !== meal.id)
                        })
                        Alert.alert('Info', 'Meal is removed')
                    }


                }}/>
            },

            title: meal.title,

        })
    })
    return <ScrollView style={{marginBottom: 40}}>
        <Image style={styles.mainImg} source={{uri: meal.imageUrl}} width={'100%'} height={300}/>
        <Text style={styles.mainTitle}>{meal.title}</Text>
        <TextItems extraStyle={{color: 'white', fontSize: 20}} duration={meal.duration} complexity={meal.complexity}
                   affordability={meal.affordability}/>
        <View style={styles.ingredientsContainer}>
            <HeaderWithLine>
                Ingredients
            </HeaderWithLine>
            <ItemsList data={meal.ingredients}/>
        </View>

        <View style={styles.stepsContainer}>
            <HeaderWithLine>
                Steps
            </HeaderWithLine>
            <ItemsList data={meal.steps}/>
        </View>
    </ScrollView>
};

const styles = StyleSheet.create({
    mainImg: {
        borderRadius: 12,
    },
    mainTitle: {
        color: 'white',
        textAlign: "center",
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 26
    },
    ingredientsContainer: {},
    stepsContainer: {},
})

export default AboutMealScreen;
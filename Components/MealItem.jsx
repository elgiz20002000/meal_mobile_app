import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import TextItems from "./TextItems";

const MealItem = ({item: {title, imageUrl,duration, complexity, affordability, id}}) => {
    const {navigate} = useNavigation()

    return <View style={styles.mainContainer}>
        <Pressable onPress={() => {
            navigate('AboutMeal',{mealId:id})
        }} style={({pressed}) => pressed ? styles.pressedStyle : null}>
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.img} source={{uri: imageUrl}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TextItems affordability={affordability} complexity={affordability} duration={duration}/>
            </View>
        </Pressable>
    </View>
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowOpacity:0.3,
        shadowOffset:{width:5,height:5},
        shadowColor:'white',
    },
    innerContainer:{
        overflow:"hidden",
        borderRadius: 12,
    },
    title: {

        margin: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    img: {
        width: '100%',
        height: 200
    },
    pressedStyle:{
        opacity:0.5
    }
})

export default MealItem;
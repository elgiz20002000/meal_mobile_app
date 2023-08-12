import {Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const CategoryTile = ({item:{title, color, id}}) => {
    const {navigate} = useNavigation()
    return <View style={[styles.container]}>
        <Pressable onPress={() => navigate('MealScreen', {categoryId:id})} style={({pressed}) => [styles.button, pressed ? styles.pressedTile : null ]}>
            <View style={[styles.innerContainer,{backgroundColor:color}]}>
                <Text style={[styles.textContainer]}>{title}</Text>
            </View>
        </Pressable>
    </View>
};

const styles = StyleSheet.create({
    container:{
        margin:16,
        flex:1,
        height:150,
        shadowColor:'white',
        shadowOffset:{height:5, width:2},
        shadowOpacity:0.3
    },
    innerContainer:{
        borderRadius:8,
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        flex:1
    },
    textContainer:{
        fontWeight:'bold',
        fontSize:18
    },
    pressedTile:{
        opacity:0.5
    }
})

export default CategoryTile;
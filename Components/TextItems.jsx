import {StyleSheet, Text, View} from "react-native";

const TextItems = ({duration, complexity,affordability,extraStyle}) => {
    return <>
        <View style={[styles.textItems]}>
            <Text style={[styles.textItem,extraStyle]}>{duration}m</Text>
            <Text style={[styles.textItem,extraStyle]}>{complexity}</Text>
            <Text style={[styles.textItem,extraStyle]}>{affordability}</Text>
        </View>
    </>
};

const styles = StyleSheet.create({
    textItem:{
        marginHorizontal:10,
    },
    textItems:{
        margin:10,
        flexDirection:'row',
        justifyContent:'center'
    },
})

export default TextItems;
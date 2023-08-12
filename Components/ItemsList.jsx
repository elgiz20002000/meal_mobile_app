import {StyleSheet, Text, View} from "react-native";

const ItemsList = ({data}) => {
    return <>
        {data.map((item, index) => {
            return <View style={styles.container} key={index}><Text style={styles.listItem}>{item}</Text></View>
        })}
    </>
};

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    listItem:{
        width:'75%',
        overflow:"hidden",
        textAlign:"center",
        backgroundColor:'white',
        color:'black',
        borderRadius:12,
        marginVertical:5,
        padding:7
    }
})

export default ItemsList;
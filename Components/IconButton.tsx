import {Pressable} from "react-native";
import  {Ionicons} from '@expo/vector-icons'
const IconButton = ({onPress, active}) => {
    return <Pressable style={({pressed}) => pressed || active ? {opacity:0.3} : null} onPress={onPress}>
        <Ionicons name={'star'} size={36} color={'white'}/>
    </Pressable>
};

export default IconButton;
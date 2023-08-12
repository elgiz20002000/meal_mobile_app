import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoryScreen from "./screens/category";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealScreen from "./screens/MealScreen";
import AboutMealScreen from "./screens/AboutMealScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import Ionicons from '@expo/vector-icons/Ionicons'
import {createContext, useState} from "react";


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
export const mainContext = createContext()


const DrawerScreens = () => {
    return <Drawer.Navigator screenOptions={{
        drawerStyle:{
            backgroundColor: '#123456',
        },
        drawerLabelStyle:{
          color:'white'
        },
        headerStyle: {
            backgroundColor: '#123456',
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
            backgroundColor: '#11406c'
        }
    }}>
        <Drawer.Screen name={'CategoryScreen'} options={{
            title:"Category",
            drawerIcon:({color, }) => <Ionicons name={'albums-outline'} color={'white'}  size={18} />
        }} component={CategoryScreen}/>
        <Drawer.Screen name={'FavoriteScreen'} options={{
            title:"Favorite",
            drawerIcon:({color, }) => <Ionicons name={'heart-outline'} color={'white'}  size={18} />
        }} component={FavoriteScreen}/>
    </Drawer.Navigator>
}

export default function App() {
    const [favorite, setFavorite] = useState([])
    const  {Provider} = mainContext

    return <>
        <StatusBar style="light"/>
        <Provider value={{favorite, setFavorite}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: '#123456',
                    },
                    headerTintColor: 'white',
                    contentStyle: {
                        backgroundColor: '#11406c'
                    }
                }}>
                    <Stack.Screen name='Drawer' component={DrawerScreens} options={{
                        headerShown:false

                    }}/>
                    <Stack.Screen name='MealScreen' component={MealScreen}/>
                    <Stack.Screen name='AboutMeal' component={AboutMealScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    </>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

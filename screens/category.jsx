import {FlatList} from "react-native";
import {CATEGORIES} from "../extra-files/data/dummy-data";
import CategoryTile from "../Components/CategoryTile";

const CategoryScreen = ({navigation}) => {

    return <FlatList numColumns={2} data={CATEGORIES} renderItem={(item) => <CategoryTile  item={item.item}/>}
                     keyExtractor={item => item.id}
    />
};

export default CategoryScreen;
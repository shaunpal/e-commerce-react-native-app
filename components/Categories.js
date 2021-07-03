import React from 'react';
import { StyleSheet, Dimensions,TouchableOpacity, SafeAreaView, Image, } from 'react-native';

const mortages = [
    { id: 1, category: "Books", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/mortages/books-category-mortage.png" },
    { id: 2, category: "Electronics", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/mortages/electronics-category-mortage.png" },
    { id: 3, category: "Shoes", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/mortages/shoes-category-mortage.png" },
    { id: 4, category: "Clothing", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/mortages/clothing-category-mortage.png" }
]

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Categories = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.container}>
             {mortages.map(mortage => (
                 <TouchableOpacity key={mortage.id} onPress={() => navigation.navigate(mortage.category)}>
                    <Image
                        style={styles.mortages}
                        source={{ uri: mortage.src }}
                    />
                </TouchableOpacity>
             ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: "column",
    },
    mortages: {
        marginTop: 10,
        width: screenWidth-10,
        height: screenHeight/6,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
    }
});

export default Categories;
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

const mortages = [
    { id: 1, category: "Books", src: "file://assets/pics/mortages/books-category-mortage.png" },
    { id: 2, category: "Electronics", src: "file://assets/pics/mortages/electronics-category-mortage.png" },
    { id: 3, category: "Shoes", src: "file://assets/pics/mortages/shoes-category-mortage.png" },
    { id: 4, category: "Clothing", src: "file://assets/pics/mortages/clothing-category-mortage.png" }
]

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
        width: 400,
        height: 150,
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
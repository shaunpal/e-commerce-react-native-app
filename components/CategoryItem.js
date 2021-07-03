import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import SideBar from './SideBar';
import { useRoute } from '@react-navigation/native';
import { ItemContext } from '../contexts/ItemContext';


const screenWidth = Dimensions.get('window').width;


const CategoryItem = ({navigation}) => {
    const [openMenu, setOpenMenu] = useState(false);

    const getSideMenu = (openMenu) => {
        setOpenMenu(openMenu);
    }
  
    const { mycart, myitems } = useContext(ItemContext);

    const [items, setItems] = myitems;
    const [cart, setCart] = mycart;

    const route = useRoute();
    const getRoute = () => {
        return route.name
    }
    
    const addItem = (item) => {
        item.qty = 1
        item.total = item.price
        setCart([...cart, item])
    }

    useEffect(() => {

    }, [cart, addItem])
      return (
        <SafeAreaView style={styles.container}>
            <SideBar isOpenMenu={openMenu} navigation={navigation} />
            <View style={styles.introbar}> 
                { !openMenu ? 
                <Feather name="menu" size={30} color="grey" style={{paddingLeft: 8}} onPress={() => getSideMenu(!openMenu)} /> : 
                <EvilIcons name="close" size={30} color="black" style={{paddingLeft: 8}} onPress={() => getSideMenu(!openMenu)} />
                }
                <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 30 }}>{getRoute()}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <AntDesign name="user" size={30} color="black" style={{paddingRight: 12}} onPress={() => {navigation.navigate('Profile')} }/>
                    <AntDesign name="shoppingcart" size={30} color="black" style={{paddingRight: 8}} onPress={() => {navigation.push('Cart')} }/>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollview}>
             <View style={styles.container}>

             
            {items[route.name.toLowerCase()].map(item => (
                <View style={styles.subcontainer} key={item.id}>
                    <Image 
                        style={item.category === "Books" ? styles.bookview : styles.itemview} 
                        source={{ uri: item.src }}
                        resizeMode={'contain'}
                    />
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Category: {item.category}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.description}</Text>
                    {cart.filter(it => it.id === item.id).length === 0 || cart.length === 0 ?
                    <View style={ styles.centeredspaceeven }>
                        <TouchableOpacity style={styles.centeredrow} onPress={() => addItem(item)}><AntDesign name="shoppingcart" size={24} color="black" /><Text>Add to Cart</Text></TouchableOpacity>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "tomato", top: 2 }}>${item.price}</Text>
                    </View>
                    :
                    <View style={ styles.centeredspaceeven }>
                        <TouchableOpacity style={styles.centeredrow}><FontAwesome5 name="check-circle" size={24} color="green" /><Text>Added</Text></TouchableOpacity>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "tomato", top: 2 }}>${item.price}</Text>
                    </View>
                    }
                </View>
                
            ))}
           </View>
            </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      subcontainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: "column",
        paddingBottom: 20,
      },
      introbar: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        paddingBottom: 8,
        paddingTop: 20
      },
      bookview: {
        height: 300,
        width: 185,
      },
      itemview: {
        height: 450,
        width: 380
      },
      scrollview: {
        width: screenWidth,
        flexGrow: 1,
        position: "relative",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        overflow: "scroll"
    },
    showGallery: {
        display: "flex",
    },
    hideGallery: {
        display: "none"
    },
    centeredrow: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
        paddingTop: 5
    },
    centeredspaceeven: {
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center",
        width: "100%"
    }
});
      
export default CategoryItem;
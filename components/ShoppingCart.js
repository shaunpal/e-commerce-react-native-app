import React, { useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Image, Dimensions, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { ItemContext } from '../contexts/ItemContext';
import CartHeader from './CartHeader';
import { AntDesign } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height
export var cartlen = 1;

const Cart = () => {

    const { mycart } = useContext(ItemContext);

    const [cart, setCart] = mycart;

    const [deleteWindow, setDeleteWindow] = useState(false);

    const [selectdelete, setSelectDelete] = useState(null);
        
    const itemToRemove = (option, item) => {
        setDeleteWindow(option);
        setSelectDelete(item);
    } 

    const remove = () => {
        setCart(cart.filter(item => item.id !== selectdelete.id));
        setDeleteWindow(!deleteWindow);
    }

    useEffect(() => {
        cartlen = cart.length;
    }, [cart, remove]);  

    return (
        <SafeAreaView style={styles.container}>
            <View style={cart.length !== 0 ? styles.header : styles.emptycart}>
                <CartHeader cart={cart} />
            </View>
            <ScrollView contentContainerStyle={cart.length !== 0? styles.scrollcontainer : styles.scrollcontainerempty}>
                
                {cart.length === 0?
                <Text style={{ fontSize: 18 }}>EMPTY CART</Text>
                    :
                <View>
                    {cart.map(item => (
                        <View key={item.id} style={styles.itemview} >
                            <AntDesign style={{ paddingRight: 5 }} name="delete" size={24} color="black" onPress={() => itemToRemove(!deleteWindow, item)} />
                            <Image 
                                resizeMode={'contain'}
                                source={{ uri: item.src }}
                                style={{ width: 70, height: 70}}
                            />
                            <View style={{ flexDirection: "column", width: screenWidth/1.8 }}>
                                <Text style={{ fontSize: 15 }}>{item.description}</Text>
                                <Text>Category: <Text style={{ color: "tomato" }}>{item.category}</Text></Text>
                                <View style={{ flexDirection: "row", justifyContent: "flex-end",  }}>
                                    <Text style={{ color: "tomato", fontWeight: "bold", marginRight: 15, fontSize: 18 }}>$ {parseFloat(item.price*item.qty).toFixed(2)}</Text>
                                </View>    
                            </View>
                            <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: 10}}>
                                <AntDesign name="pluscircleo" size={24} color="black" onPress={() => { item.qty+=1; item.total = item.price*item.qty; setCart([...cart], item)  }} />
                                <Text style={{ fontSize: 18, paddingTop: 5, paddingBottom: 5 }}>{item.qty}</Text>
                                <AntDesign name="minuscircleo" size={24} color="black" onPress={() => {
                                    if(item.qty == 1){
                                        item.qty = 1
                                        item.total = item.price*item.qty
                                        setCart([...cart], item)
                                    }else {
                                        item.qty -= 1
                                        item.total = item.price*item.qty
                                        setCart([...cart], item)}
                                    } } />
                            </View>        
                        </View>
                    ))}
                </View>
                }
            </ScrollView>
                {deleteWindow ? 
                    <View style={styles.deletebg}>
                        <View style={styles.deletecontainer}>
                            <Text>Remove item</Text>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Button 
                                    title="Yes"
                                    color="black" onPress={() => remove()} />
                                <Button
                                    title="No"
                                    color= "red" onPress={() => itemToRemove(!deleteWindow, null)} />
                            </View>
                        </View>
                    </View>
                    :
                    null
                }
            
            <View style={cart.length !== 0 ? styles.footer : styles.emptycart}>
                <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' style={styles.footerbutton} onPress={() => console.log("checkout")}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>PROCEED TO CHECKOUT  &gt;&gt;</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
    },
    deletecontainer: {
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: "center",
        height: 100,
        width: 200
      },
    deletebg: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        display: 'flex',
        width: screenWidth,
        height: screenHeight,
        zIndex: 5,
        left: 0,
        position: "absolute",
      },
    hidden: {
        display: "none"
    },
    header: {
        position: "absolute",
        left: 0,
        top: 0,
        width: screenWidth,
        zIndex: 1,
        backgroundColor: '#fff'
    },
    footer: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: screenWidth,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    emptycart: {
        display: 'none'
    },
    footerbutton: {
        bottom: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        height: 60,
        zIndex: 2,
        width: screenWidth,
        zIndex: 1
    },
    scrollcontainer: {
        width: screenWidth,
        flexGrow: 1,
        position: "relative",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
        overflow: "scroll",
        top: screenHeight/15,
        height: screenHeight+(cartlen*screenHeight),
    },
    scrollcontainerempty: {
        position: "relative",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        width: screenWidth,
        height: screenHeight
    },
    itemview: {
        flexDirection: "row", 
        justifyContent: 'space-evenly', 
        alignItems: "center",
        width: screenWidth,
        height: 140
    }
});  
export default Cart;

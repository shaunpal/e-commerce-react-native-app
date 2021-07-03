import React, { useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CartHeader = ({cart}) => {

    const getTotal = () => {
        let price = 0;
        for(const x of cart){
            price += parseFloat(x.total)
        }
        return price;
    }
    const getTotalitemQty = () => {
        let qty = 0;
        for(const x of cart){
            qty += parseInt(x.qty)
        }
        return qty;
    }

    useEffect(() => {
        
    }, [cart])

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', left: 0 }}>Orders</Text>
                <Text>{getTotalitemQty()} items</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'  }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 20 }}>Total:</Text>
                <Text style={{ fontSize: 35, color: "tomato", fontWeight: 'bold' }}>${cart.length > 0? parseFloat(getTotal()).toFixed(2) : <Text>0.00</Text>} </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      height: 60,
    },
});  
export default CartHeader;
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <SafeAreaView style={styles.container} key={index}>
      <View style={{paddingTop: 20}}>
        <Image
            source={ {uri: item.src} }
            resizeMode="contain"
            style={styles.image}
        />
      </View> 
      <View style={styles.header}>
        <Text style={styles.body}>{item.description}</Text>
        <View style={styles.bodyinfo}>
            <Text style={styles.bodycategory}>Category: {item.category}</Text>
            <Text style={styles.bodyprice}>$SGD {item.price}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 20,
    textAlign: "center",
    flexWrap: "wrap"
  },
  bodyinfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 5
  },
  bodycategory: {
    marginRight: 60
    
  },
  bodyprice: {
    fontSize: 15,
    color: "tomato",
    fontWeight: "bold",
    
  },
  bookview: {
      width: 200,
      height: 150
  }
})

export default CarouselCardItem
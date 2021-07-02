import React from 'react'
import { View, Image,StyleSheet } from "react-native"

const CustomSlideItem = ({ index, item, style, width }) => {
    return (
        <View key={index} style={styles.slider}>
            <Image 
                style={styles.slider}
                source={{ uri: item.loc }} 
            />
        </View>

    );
}

const styles = StyleSheet.create({
    slider: {
      width: 420,
      height: 280,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 20,
      paddingBottom: 18
    }
  });

  export default CustomSlideItem;
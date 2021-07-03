import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState, useContext} from 'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselItem';
import CustomSlideItem from './ImageSliderItem';
import ImageSlider from 'react-native-image-slider';
import { Feather, AntDesign, EvilIcons } from '@expo/vector-icons';
import SideBar from './SideBar';
import { useRoute } from '@react-navigation/native';
import {ItemContext} from './../contexts/ItemContext';
import { ScreenHeight } from 'react-native-elements/dist/helpers';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const images = [
  { loc: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/front%20screen/discover%20items.png"},
  { loc: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/front%20screen/discover%20shopping%20bags2.jpeg"},
  { loc: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/front%20screen/summer-sale.png" }
]

 const Home = ({navigation}) => {
  const isCarousel = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const { myitems } = useContext(ItemContext);

    const [items, setItems] = myitems;

  const getSideMenu = (openMenu) => {
      setOpenMenu(openMenu);
  }

  const route = useRoute();
    const getRoute = () => {
        return route.name
    }
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
                <AntDesign name="shoppingcart" size={30} color="black" style={{paddingRight: 8}} onPress={() => {navigation.push('Cart')} } />
            </View>
        </View>
        <ScrollView  contentContainerStyle={styles.scrollview}>
            <View style={styles.imageslider}>
                <ImageSlider 
                    autoPlayWithInterval={3000}
                    images={images}
                    customSlide={CustomSlideItem}
                />
            </View>
            <View style={styles.subheader}>
                <Text style={styles.subheadertext}>Newest &amp; Bestsellers</Text>
            </View>
            <View style={styles.carouselcontainer}>
                <Carousel style={styles.carousel}
                    layout={'default'}
                    data={items.books}
                    renderItem={CarouselCardItem}        
                    layoutCardOffset={9}
                    ref={isCarousel}  
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH} 
                    inactiveSlideShift={0}
                    useScrollView={true}
                />
            </View>
            <View style={styles.flashbannerview}>
                <Image 
                style={styles.flashbanner} 
                source={ { uri: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/front%20screen/flash-sale.gif" } }
                />
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", width: screenWidth, height: screenHeight/6, top: 20 }}>
                <View>
                    <Image 
                        style={{ width: screenWidth/3, height: screenWidth/3, borderRadius: 8 }}
                        source={ { uri: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/front%20screen/shoe-promo.gif" } }/>
                </View>
                <View>
                    <Image 
                        style={{ width: screenWidth/2, height: screenWidth/3, marginLeft: 5, borderRadius: 10 }}
                        source={ { uri: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/front%20screen/app-idea-animated-1.gif" } }/>
                </View>
            </View>
        <StatusBar style="auto" />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  slider: {
    width: screenWidth,
    height: screenHeight/3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30
  },
  introbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 8,
    paddingTop: 20
  },
  flashbanner: {
      borderRadius: 10,
      width: screenWidth-40,
      height: ScreenHeight/10
  },
  flashbannerview: {
    width: screenWidth,
    alignItems: "center", 
    justifyContent: "center",
    height: ScreenHeight/8 
},
  imageslider: {
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center",
    height: screenHeight/3 
  },
  subheader: {
      height: ScreenHeight/12,
      top: 20,
      width: screenWidth
  },
  subheadertext : {
    fontSize: 20,
    left: 20,
    fontWeight: "bold"
  },
  carousel: {
    flex: 1,
  },
  carouselcontainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    height: screenHeight/2
},
  scrollview: {
      height: screenHeight+200,
      flexGrow: 1,
      position: "relative",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: "column",
      overflow: "scroll"
  }
});

export default Home;
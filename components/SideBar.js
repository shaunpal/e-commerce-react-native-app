import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Image, Text } from 'react-native';
import { Ionicons, Foundation, FontAwesome5,EvilIcons } from '@expo/vector-icons';

const SideBar = ({isOpenMenu, navigation}) => {
    
    return (
        <SafeAreaView
            style={ isOpenMenu? styles.sidemenubackground : styles.sethidden}> 
            <View style={isOpenMenu? styles.sidebarmenu : styles.sethidden}>
                <View style={styles.sidebaroptions}>
                    <View>
                        <Image 
                            resizeMode={'contain'}
                            style={{ width: 200, height: 200 }}
                            source={require("./../assets/logo.png")}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 50 }}>
                        <Ionicons name="home-outline" size={30} color="black" />
                        <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 5 }} onPress={() => navigation.push('Shop')}>Home</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 50}}>
                        <Foundation name="burst-sale" size={40} color="black" />
                        <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 5 }} onPress={() => navigation.push('Shop')}>Sale</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 50 }}>
                        <FontAwesome5 name="tasks" size={30} color="black" />
                        <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 5 }} onPress={() => navigation.push('Categories')}>Categories</Text>
                    </View>
                </View>    
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sidemenubackground: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
        zIndex: 1,
        left: 0,
        position: "absolute",
        top: 100
    },
    sidebarmenu: {
        backgroundColor: "white",
        height: "100%",
        width: 300,
        shadowColor: "#000",
        left: 0,
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        flexDirection: "column",
        position: "absolute",
        zIndex: 2,
    },
    sethidden:{
        display: "none"
    },
    setvisible:{
        display: "flex"
    },
    sidebaroptions: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        marginLeft: 50,
        paddingBottom: 50
    }
  });

  export default SideBar;
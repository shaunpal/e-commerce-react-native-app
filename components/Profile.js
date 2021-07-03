import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input';
import { FloatingLabelInput } from 'react-native-floating-label-input'
 

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const UserProfile = () => {
    
    const [fullname, setFullname] = useState("Bob Bobby");
    const [editname, setEditname] = useState(false);

    const [username, setUsername] = useState("Bob");
    const [editusername, setEditusername] = useState(false);

    const phoneInput = useRef(null);
    const [contact, setContact] = useState("6512345678");
    const [editcontact, setEditcontact] = useState(false);

    const [address, setAddress] = useState("123 Elm Street");
    const [editaddress, setEditaddress] = useState(false);

    const [email, setEmail] = useState("test@example.com");
    const [validemail, setValidEmail] = useState(true);
    const [editemail, setEditemail] = useState(false);

    const checkEmail = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            setValidEmail(false);
        }else {
            setValidEmail(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexDirection: "column", justifyContent: "flex-start", height: screenHeight, top: 20, alignItems: "center", width: screenWidth }}> 
                <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 30 }}>
                    <Image 
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                        source={require("./../assets/pics/user.png")} 
                    />
                    <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 30 }}>{username}</Text>
                </View>

                <View style={styles.textinputlayout}>
                    <FloatingLabelInput
                        onChangeText={fullname => setFullname(fullname)}
                        value={fullname}
                        editable={editname}
                        placeholder="John Doe"
                        label={"Full Name"}
                        fontSize={18}
                    />
                    {!editname?
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 10 }}>   
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>edit</Text> 
                        <AntDesign name="edit" size={25} color="black" onPress={() => setEditname(!editname)} />
                    </View>
                        :
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 10 }}>   
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>save</Text> 
                        <AntDesign name="save" size={24} color="black" onPress={() => setEditname(!editname)} />
                    </View>
                }
                </View>
                <View style={styles.textinputlayout}>
                    <FloatingLabelInput 
                        onChangeText={username => setUsername(username)}
                        value={username}
                        editable={editusername}
                        placeholder="Username"
                        label={"Username"}
                        fontSize={18}
                        leftComponent={
                            <Image
                              style={{height: 30, width: 30}}
                              source={{
                                uri: 'https://image.flaticon.com/icons/png/512/25/25231.png',
                              }}
                            />
                          }
                    />
                    {!editusername?
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 5 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>edit</Text> 
                            <AntDesign name="edit" size={25} color="black" onPress={() => setEditusername(!editusername)} />
                        </View>
                            :
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 5 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>save</Text> 
                            <AntDesign name="save" size={24} color="black" onPress={() => setEditusername(!editusername)} />
                        </View>
                    }
                </View>
                    
                <View style={styles.mobileinfo}>
                    <View style={{ width: "73%", marginRight: 30}}>
                        <PhoneInput style={{marginRight: 30}}
                            ref={phoneInput}
                            defaultValue={contact}
                            defaultCode="DM"
                            layout="first"
                            onChangeText={(contact) => {
                                setContact(contact);
                    
                            }}
                            onChangeFormattedText={(contact) => {
                                setContact(contact)
                                
                            }}
                            withDarkTheme
                            withShadow
                            disabled={!editcontact}
                            
                        />
                    </View>
                    {!editcontact?
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 10 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>edit</Text> 
                            <AntDesign name="edit" size={25} color="black" onPress={() => setEditcontact(!editcontact)} />
                        </View>
                            :
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 10 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>save</Text> 
                            <AntDesign name="save" size={24} color="black" onPress={() => setEditcontact(!editcontact)} />
                        </View>
                    }
                </View>

                <View style={styles.textinputlayout}>  
                    <FloatingLabelInput 
                        style={!editaddress? styles.input : styles.inputeditable}
                        onChangeText={address => setAddress(address)}
                        value={address}
                        editable={editaddress}
                        placeholder="123 Elm Street"
                        label={"Address"}
                        fontSize={18}
                    />
                    {!editaddress?
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 5 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>edit</Text> 
                            <AntDesign name="edit" size={25} color="black" onPress={() => setEditaddress(!editaddress)} />
                        </View>
                            :
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 5 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>save</Text> 
                            <AntDesign name="save" size={24} color="black" onPress={() => setEditaddress(!editaddress)} />
                        </View>
                    }
                </View>
                <View style={styles.textinputlayout}>
                    <FloatingLabelInput 
                        style={!editemail? styles.input : validemail? styles.inputeditable : styles.invalidemailinput}
                        onChangeText={email => { checkEmail(email); setEmail(email)}}
                        value={email}
                        editable={editemail}
                        placeholder="test@example.com"
                        label={"Email"}
                        fontSize={18}
                        inputStyles={{
                            color: validemail? "black" : "red",
                            paddingBottom: 5
                        }}
                    />
                    {!editemail?
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 5 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>edit</Text> 
                            <AntDesign name="edit" size={25} color="black" onPress={() => setEditemail(!editemail)} />
                        </View>
                            :
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", left: 5 }}>   
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>save</Text> 
                            <AntDesign name="save" size={24} color="black" onPress={() => {
                                        if(validemail === true){
                                            setEditemail(!editemail)
                                        }
                                    }
                                 } />
                        </View>
                    }
                </View>
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
    },
    inputeditable: {
        height: 40,
        width: 200,
        margin: 12,
        paddingLeft: 5,
        borderWidth: 1,
        borderRadius: 10
    },
    input: {
        height: 40,
        margin: 12,
        left: -10
    },
    profileinfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        marginTop: 20
    },
    mobileinfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    invalidemailinput: {
        borderColor: "red"
    },
    textinputlayout: {
        paddingLeft: 35, 
        paddingRight: 35,
        width: screenWidth,
        height: screenHeight/6, 
        backgroundColor: '#fff', 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center"
    }
});

export default UserProfile;
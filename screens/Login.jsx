import React, { useState } from 'react';
import {View,SafeAreaView, StyleSheet, Text, Image,TextInput, TouchableOpacity, Pressable} from 'react-native';
import { colors } from '../constant/Constant';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker'

const Login = ({navigation}) => {
    const [isSinIn, setIsSinIn] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userImg, setUserImg] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleNavigation = async () => {
            
            if(!isSinIn && name.length > 0 && email.length > 0 && password.length > 0) {
                const user = {
                    name:name,
                    email:email,
                    password:password,
                    userImg: userImg
                }
                await AsyncStorage.setItem('userProfil', JSON.stringify(user))
                navigation.navigate('Welecom')
            } else if(isSinIn && email.length > 0 && password.length > 0){
                const user = {
                    email:email,
                    password:password
                }
                await AsyncStorage.setItem('userProfil', JSON.stringify(user))
                navigation.navigate('Welecom')
            } else {
                alert('Veiller remplir tout les champs')
            }

    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
    
        if (!result.canceled) {
            setUserImg(result.assets[0].uri);
            setIsChecked(true)
        }
      };
    return (
        <SafeAreaView style={styles.container}>
            {!isSinIn ?
                <View style={styles.containerImg}>
                <Image
                    source = {!isChecked ? require('../img/profil.png') : {uri:userImg}}
                    style = {styles.userImg}
                />
                <TouchableOpacity 
                    onPress={pickImage}
                    style={styles.iconImg}
                >
                    <MaterialIcons style={styles.icon} name="add-photo-alternate" />
                </TouchableOpacity>
            </View>
            : 
            <Text style={styles.titleSin}>Sign Up</Text>
            }
                
                <View style={styles.containerInput}>
                    {!isSinIn &&
                        <TextInput
                            placeholder='Name'
                            style={styles.input}
                            onChangeText={text => setName(text)}
                        />
                    }
                    <TextInput
                        placeholder='Email'
                        keyboardType='email-address'
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        placeholder='PassWord'
                        secureTextEntry
                        style={styles.input}
                        onChangeText={text => setPassword(text)}
                    />
                    <Button
                        style={styles.Button}
                        handleNavigation={handleNavigation}
                        iconSize={24}
                        iconColor={colors.WHITE}
                        btnTitle={"Sign Up"}
                    />
                    <TouchableOpacity
                        onPress={() => setIsSinIn(changed=>!changed)}
                    >
                        <Text style={styles.isSinIn}> 
                            {isSinIn? "to sign up" : "to login"}
                        </Text>
                    </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.BACK,
        
    },
   
    userImg: {
        width: wp('20%'),
        height: hp('10%'),
        borderRadius: wp('15%'),
        marginTop: hp('1.5%')
    },
    containerImg: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconImg: {
        alignSelf:'flex-end',
        paddingHorizontal: wp('2%')
    },
    icon: {
        fontSize:wp('7%'),
        color: colors.GREEN
    },
    input: {
        backgroundColor: colors.GREEN,
        borderRadius: wp('4%'),
        paddingHorizontal: wp('5%') ,
        paddingVertical: hp('1%'),
        fontSize: wp('3%'),
        marginVertical: hp('2%')
    },
    containerInput: {
        width: wp('100%'),
        paddingHorizontal: wp('10%'),
        paddingVertical: hp('3%')
    },
    Button: {
        backgroundColor: colors.ORANGE,
        borderRadius: wp('4%'),
        paddingHorizontal: wp('5%') ,
        paddingVertical: hp('1.4%'),
        alignItems: 'center',
        marginVertical: hp('4')
    },
    isSinIn: {
        textAlign: 'center',
        color: colors.GREEN,
        fontSize: wp('4%')
    },
    titleSin:{
        fontSize: hp('3%'),
        textAlign: 'center',
        color: colors.WHITE,
        fontWeight: 'bold'
    }
})

export default Login;

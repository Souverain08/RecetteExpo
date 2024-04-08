import React, { useEffect, useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { colors, recipe } from '../constant/Constant';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Categorie from '../component/Categorie';
import Recipes from '../component/Recipes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {

    const [ activeCat, setActiveCat] = useState("Beef")
    const [ recipeChekedData, setRecipeChekedData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userImg, setUserImg] = useState('')

    // recuperation de item 
    const recup = async () => {
        let userIfo = await AsyncStorage.getItem('userProfil')

        if(userIfo.length > 0) {
            const user = JSON.parse(userIfo)
            setEmail(user.email)
            setName(user.name)
            setUserImg(user.userImg)
        }
        
    }
    useLayoutEffect(() => {
            recup()
        },[])
      // ce pour filtrer les recipe qu'on a choisie

        const userPrpfil = {
            name: name,
            email: email,
            userImg: userImg
        }
      // ce pour filtrer les recipe qu'on a choisie
    const handleCheked = (recipeCheked) => {
        const filterCategory = recipe.filter(val => val.strCategory == recipeCheked);
        setRecipeChekedData(filterCategory);
    }

   

    // ce pour nous permetre de choir la categorie numero avant de continuer 

    useEffect(() => {
        const filterCategory = recipe.filter(val => val.strCategory == activeCat );
        setRecipeChekedData(filterCategory);
    }, [])


    return (
            <SafeAreaView style={styles.container}>
                <StatusBar 
                    backgroundColor={colors.BACK}
                />
                <View style={styles.containerSheeld}>
                    <View style={styles.userContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProfilUser', userPrpfil)}
                        >
                            <Image
                                source = {{uri: userImg}}
                                style = {styles.userImg}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <EvilIcons 
                                name="bell" 
                                size={40} 
                                color={colors.ORANGE} 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleHome}>Make your own food,</Text>
                        <Text style={styles.titleHome}>stay at <Text style={styles.titleHomeCheeld}>home</Text> </Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.inputSearch}
                        onPress={() => navigation.navigate('SeachRecipe')}
                    >
                        <Text style={styles.textInput}>Search any recipe</Text>
                            
                        <View >
                            <Ionicons name="search-circle" size={40} color={colors.ORANGE} />
                        </View>
                    </TouchableOpacity>
                   
                </View>
                <View style={styles.categorie}>
                        <Categorie 
                            activeCat={activeCat}
                            setActiveCat={setActiveCat}
                            handleCheked={handleCheked}
                        />
                    
                </View>
                <Text style={styles.recipTitle}>Recipe</Text>
                <View style={styles.recipes}>
                    
                    <View>
                        <Recipes 
                           recipeChekedData={recipeChekedData} 
                        />
                    </View>
                </View>

                 
                
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        backgroundColor: colors.BACK,
        flex:1,
        
    },
    containerSheeld: {
        width: wp('100%'),
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: wp('6.5%')
    },
    categorie: {
        width: wp('100%'),
        paddingHorizontal: wp('4%'),
    },
    userImg: {
        width: wp('15%'),
        height: hp('7%'),
        borderRadius: wp('15%'),
        marginTop: hp('1.5%')
    },
    userContainer: {
        width: wp('90%'),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
    },
    title: {
        paddingVertical: hp('4%'),
    },
    titleHome: {
        color: colors.WHITE,
        fontWeight: 'bold',
        fontSize: hp('4%')
    },
    titleHomeCheeld: {
        color: colors.ORANGE
    },
    inputSearch: {
        width: wp('90%'),
        backgroundColor: colors.GREEN,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('0.5%'),
        borderRadius: wp('18%')
    },
    textInput: {
        alignSelf: 'center',
        width:wp('60%'),
        paddingVertical:hp('1%'),
        color: colors.GREEN2
    },
    recipes: {
        width: wp('100%'),
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        marginVertical: hp('3%')
    },
    recipTitle: {
        color: colors.WHITE,
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        paddingHorizontal: wp('7.5%')
    },
})

export default Home;

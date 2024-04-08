import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, recipe } from '../constant/Constant';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SeachRecipe = ({navigation}) => {

    const [resultseach, setResultSeach] = useState([]);


        const seachRecipe = (recipeCat) => {
            if(recipeCat) {
                let filterSeach = recipe && recipe.filter(valSeach => {
                    const valSeachData = valSeach.strCategory ? valSeach.strCategory.toUpperCase() : ''.toUpperCase()
                    const recipSeach = recipeCat.toUpperCase()
                    return valSeachData.indexOf(recipSeach) > -1
                });
                setResultSeach(filterSeach)
            }
            
        }
      
        

        let result = resultseach.map(valResult => {
            return (
                <TouchableOpacity 
                    style={styles.itemSeach}
                    key={valResult.idMeal}
                    onPress={() => navigation.navigate('Description', valResult)}
                >
                    <Text style={styles.titleSeach}>{valResult.strCategory}</Text>
                </TouchableOpacity>
            );
        })
     
    


    return (
        <View style={styles.containerSeach}>
            <View style={styles.containerSeachSheeld}>
                <View
                    style={styles.inputSearch}
                >
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Ionicons name="arrow-back-circle-sharp" size={40} color={colors.ORANGE} />
                    </TouchableOpacity>
                    <View>
                        <TextInput
                            placeholder='Search any recipe'
                            style={styles.textInput}
                            autoFocus={true}
                            onChangeText={ text => seachRecipe(text) }
                        />
                    </View>
                    
                    <TouchableOpacity >
                        <Ionicons 
                            name="search-circle" 
                            size={40} 
                            color={colors.ORANGE} 
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    style={styles.ScrollResult}
                >
                    {result} 
                </ScrollView>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    containerSeach: {
        backgroundColor: colors.BACK,
        flex:1,
        alignItems:'center',
    },
    containerSeachSheeld: {
        marginVertical:hp('3%')
    },
    inputSearch: {
        width: wp('90%'),
        backgroundColor: colors.GREEN,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('0.5%'),
        borderRadius: wp('18%'),
    },
    textInput: {
        alignSelf: 'center',
        width:wp('60%'),
        paddingVertical:hp('1%'),
    },
    titleSeach: {
        color:colors.GREEN,
        fontWeight: 'bold',
        fontSize: wp('4%'),
        textAlign: 'center'
    },
    itemSeach: {
        backgroundColor: colors.BACK,
        width: wp('90%'),
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('1.5%'),
        marginVertical: hp('2%'),
        borderRadius: wp('3%'),
        elevation:wp('2%') ,

    },
    ScrollResult: {
        flex: 1,
        width: wp('90%'),
    }
})

export default SeachRecipe;

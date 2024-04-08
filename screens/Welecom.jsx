import React, { useState } from 'react';
import {View,Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import { colors } from '../constant/Constant';
import Button from '../component/Button';

const Welecom = ({navigation}) => {

    const [isLod, setIsLod]= useState(false)

    const handleNavigation = () => {
            navigation.navigate('Home')
            
    }

    return (

        <View style={styles.container}>
            <Image
                source = {require('../img/BingoImg.png')}
                style = {styles.imgBingo}
            />
            <View style={styles.containerSheeld}>
                <Text style={styles.titleWelcom}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                    expedita facere. Aspernatur laboriosam nesciunt, impedit minus  
                </Text>
                <Button
                    style={styles.Button}
                    handleNavigation={handleNavigation}
                    iconName={"arrow-forward"}
                    iconSize={24}
                    iconColor={colors.WHITE}
                    btnTitle={"Get Started"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BACK,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerSheeld: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    imgBingo: {
        width: 400,
        height: 300
    },
    titleWelcom: {
        color: colors.WHITE,
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical:50
    },
    Button: {
        backgroundColor: colors.ORANGE,
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 30,
        borderRadius: 20
    },
});

export default Welecom;

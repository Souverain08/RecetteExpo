import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { colors } from '../constant/Constant';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Profil = ({navigation, route}) => {

    const data = route.params

    return (
        <View style={styles.container}>
           <View style={styles.icon}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name="arrow-back-circle-sharp" size={40} color={colors.GREEN} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="dots-vertical-circle" size={40} color={colors.GREEN} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerImg}>
                <Image
                    source = {{uri: data.userImg}}
                    style = {styles.userImg}
                />
                <View>
                    <Text style={styles.userTitle}>{data.email}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACK,
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('1%')
    },
    userImg: {
        width: wp('55%'),
        height: hp('27%'),
        borderRadius: wp('30%'),
        marginTop: hp('1.5%'),
    },
    containerImg: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userTitle: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.WHITE,
        marginTop: hp('3%')}
})

export default Profil;

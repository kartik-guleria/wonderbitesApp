import { StyleSheet } from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    ComIcons,
    DelIcons,
    NavIcons,
} from '../../../assets/index';

const styles = StyleSheet.create({
    text_color: {
        color: COLORS.white,
        fontSize: SIZES.h,
        fontWeight: SIZES.w5,
        fontFamily: FONTS.normal,
        marginLeft: 10,
        marginRight: 10,
    },
    buttonStyleRed: {
        backgroundColor: COLORS.red,
        height: 38,
        borderRadius: 12,
        alignItems: 'center',
        color: COLORS.white,
        alignSelf: 'center',
        fontSize: SIZES.h,
        justifyContent: 'center',
        fontFamily: FONTS.normal,
        fontWeight: 'bold',
    },
    buttonStyleGray: {
        height: 38,
        borderRadius: 12,
        margin: 15,
        borderColor: COLORS.red,
        borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: SIZES.h,
        justifyContent: 'center',
        fontFamily: FONTS.normal,
        fontWeight: 'bold',
    },

});
export default styles;

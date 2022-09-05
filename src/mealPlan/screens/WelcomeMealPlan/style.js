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

    },
    descText: {
        color: COLORS.black,
        fontFamily: FONTS.light,
        fontSize: SIZES.h2,
        // width: '100%',
        alignSelf: 'center',
        textAlign: 'left',
        justifyContent: 'center',
        lineHeight: SIZES.l3,
    },
    productItem: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 4,
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyleRed: {
        backgroundColor: COLORS.red,
        height: 38,
        borderRadius: 12,
        margin: 15,
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
        paddingLeft: 10,
        paddingRight: 10,
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

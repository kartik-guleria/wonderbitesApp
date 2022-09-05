import React from "react";
import { Text,View,SafeAreaView,Image,StyleSheet,TouchableOpacity } from "react-native";
import { FONTS,COLORS,SIZES } from "assets/";
import MyButton from "components/MyButton";
import ImageSlider from 'components/ImageSlider';
import { useTranslation } from 'react-i18next';

const MealPlanReady = props => {
  const { t, i18n } = useTranslation();
    const onClickGet = () => {
        props.navigation.navigate('SubscribeMealPlan');
    }
    const images = [
      require('../../../images/banner.png'),
      require('../../../images/banner.png'),
      require('../../../images/banner.png'),
    ];
    return (
        <SafeAreaView style={{
          flex: 1,backgroundColor:COLORS.white}}>
          <View style={{flex:1,justifyContent: 'space-between'}}>
          <View style ={{marginTop:100,marginLeft:16,marginRight:16}}>
          <Text
            style={{
              marginTop: 51,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h5,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l6,
            }}>
          {t('mealPlan:mealPlanReady')}
          </Text>
        </View>
        <ImageSlider images={images}/>
       <View>
        <MyButton title = {t('mealPlan:getMealPlan')} onSelect = {() => onClickGet()}/>
        <View
      style={{
        shadowColor: COLORS.titleBlack,
        shadowOpacity: 0.24,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        marginTop:-15,
        alignSelf:'center',
      }}>
      <TouchableOpacity style={styles.buttonStyleRed} onPress={()=> props.navigation.navigate('Q1')}>
        <View>
          <Text style={styles.text_color}>{t('mealPlan:redoQuiz')}</Text>
        </View>
      </TouchableOpacity>
    </View>
        </View>
        
        </View>


      </SafeAreaView>
    );
}

export default MealPlanReady;

const styles = StyleSheet.create({
    buttonStyleRed: {
      height: SIZES.btnHeight,
      alignItems: 'center',
      borderRadius: SIZES.r1,
      marginLeft: SIZES.mlr1,
      marginRight: SIZES.mlr1,
      justifyContent: 'center',
      fontSize: SIZES.h3,
      fontWeight: SIZES.w5,
      fontFamily: FONTS.normal,
      marginBottom:20,
    },
    text_color: {
      fontWeight: SIZES.w5,
      fontFamily:FONTS.normal,
      fontSize: SIZES.h4,
    },
  });
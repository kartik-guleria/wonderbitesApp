import React from "react";
import { SafeAreaView,View, TouchableOpacity,Text,FlatList, ScrollView} from "react-native";
import NavigationHeader from "components/NavigationHeader";
import ImageSlider from 'components/ImageSlider';
import { FONTS } from "assets/";
import { SIZES } from "assets/";
import { COLORS } from "assets/";
import { useTranslation } from 'react-i18next';

const MealDetails = props => {
    const { t, i18n } = useTranslation();
    INGRIDIENTS = [
        {id:1 , name : "granola bar",amount: "1pc"},
        {id:2 , name : "walnuts",amount: "20gr"},
        {id:3 , name : "kiwi",amount: "20gr"},
        {id:4 , name : "tomatos",amount: "20gr"},

    ]
    IMAGES = [
        require('/images/noodle.png'),
        require('/images/noodle.png'),
        require('/images/noodle.png'),
        require('/images/noodle.png'),
          ];
          NUTRIENTS = [
              {id:1, amount : '185', name :'Calories'},
              {id:2, amount : '20g', name :'Fats'},
              {id:3, amount : '20g', name :'Protein'},
              {id:4, amount : '20g', name :'Carbs'},

            ]
            const renderItem = itemData => {
                return(
                    <View style ={{alignItems:"center"}}>
        <Text style = {{fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w3}}>
                            {itemData.item.amount}
                        </Text>
                        <Text style = {{fontFamily:FONTS.normal,fontSize:SIZES.h2,fontWeight:SIZES.w5}}>
                            {itemData.item.name}
                        </Text>
                    </View>
                );
            };
            const renderIngridients = data => {
                return(
                    <View style ={{borderBottomColor:COLORS.darkGrey,borderBottomWidth:1,height:33,justifyContent:'center'}}>
                        <View style ={{flexDirection:'row',justifyContent:'space-between',marginLeft:11,marginRight:11}}>
                        <Text style = {{fontFamily:FONTS.normal,fontSize:SIZES.h2,fontWeight:SIZES.w5}}>
                                {data.item.name}</Text>
                 <Text style = {{fontFamily:FONTS.normal,fontSize:SIZES.h2,fontWeight:SIZES.w3}}>

                                {data.item.amount}</Text>
                        </View>
                    </View>

                );
            }
    return(
        <SafeAreaView style ={{backgroundColor:COLORS.white,flex:1}}>
            <NavigationHeader title = "Toast and fruits" navigation = {props.navigation}/>
        <ScrollView bounces= {false}>
        <View style = {{marginLeft:16,marginRight:16,marginBottom:16}}>
        <ImageSlider images={IMAGES} />

        <View style = {{marginTop:19,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style = {{fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w5,color:COLORS.darkGrey}}>
                Lunch
            </Text>
            <Text style = {{fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w7}}>
        WEEK 1: 
        <Text style = {{fontFamily:FONTS.normal,fontSize:SIZES.h2,fontWeight:SIZES.w5,color:COLORS.red}}> Day 1 - Mon,13 Sep
    </Text>
    </Text>
        </View>
        <View>
        <Text style = {{marginTop:16,fontFamily:FONTS.normal,fontSize:SIZES.h5,fontWeight:SIZES.w7}}>
        Toast and fruits
            </Text>
            <Text style = {{marginTop:20,fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w3}}>
        4.8, very popular
            </Text>
            <Text style = {{marginTop:25,fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w5}}>
            About the recipe
            </Text>
            <Text style = {{marginTop:16,fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w3}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada mi nunc nulla at venenatis quam mattis. Hendrerit ac odio integer lectus non netus. Ut mauris ut nulla id pharetra, pretium sit nunc.
            </Text>
            <Text style = {{marginTop:16,fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w5}}>
            Ingridients
            </Text>
            <FlatList
            contentContainerStyle={{borderTopWidth:1,borderLeftWidth:1,borderRightWidth:1,borderRadius:5,borderColor:COLORS.darkGrey,justifyContent:'space-between',marginTop:14}}
            bounces={false}
          data={INGRIDIENTS}
          renderItem={renderIngridients}
          keyExtractor={item => item.id}
        />
            <Text style = {{marginTop:23,fontFamily:FONTS.normal,fontSize:SIZES.h3,fontWeight:SIZES.w5}}>
            Nutrition Facts
            </Text>
            <FlatList
            contentContainerStyle={{marginTop:23,justifyContent:'space-between',flex:1}}
        horizontal
          bounces={false}
          data={NUTRIENTS}
          showsVerticalScrollIndicator="false"
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        </View>
        </View>
</ScrollView>
        </SafeAreaView>

    );
}

export default MealDetails;

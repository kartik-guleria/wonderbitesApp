import React, { useState, useEffect } from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native';
import { CUISINES } from 'data/dummy-data';
import ProductGridTile from 'components/ProductGridTile';
import MainStyle from 'styleSheet/MainStyle';
import HeaderRight from 'components/HeaderRight';
import { useTranslation } from 'react-i18next';
import { COLORS,SIZES,FONTS,DelIcons} from 'assets/index';
import { useNavigation } from '@react-navigation/native';
import { showProductRequest } from '../ProductDetailScreen/actions';
import { fetchCategoryProductRequest } from './actions'
//API Redux Saga Imports
import { useDispatch, useSelector } from 'react-redux';
import { addToCartRequest, addToWishlistRequest } from './actions'
import Loader from 'components/Loader';
import CuisineList from 'components/CuisineList';
import { cartListRequest } from '../CartScreen/actions';
import SuccessModel from 'components/SuccessModel';
import Modal from 'react-native-modal';
import styles from './style';
import CuisinesBottomSheet from 'components/CuisinesBottomSheet';
const CategoryScreen = ({ route }) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [isAlertVisible, setAlertVisible] = useState(false);
  const toggleAlert = () => {
    setAlertVisible(!isAlertVisible);
  };
  const [isAddAlertVisible, setAddAlertVisible] = useState(false);
  const toggleAddAlert = () => {
    setAddAlertVisible(!isAddAlertVisible);
  };
  const [heart, setHeart] = useState(false);
  const { categoryId } = route.params;
  const catProductData = useSelector(state => state.CategoryProductsReducer.catProductData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryProductRequest({ catId: categoryId, params: { with: ["products", "products.media"] } }));
  }, []);

  const onAddToCart=(itemData) => {
    dispatch(addToCartRequest({
      "action": "ADD",
      "products": {
        [itemData.item.id]: {
          "qty": 1
        }
      }
    }));
    dispatch(cartListRequest());
toggleAddAlert();
  };
  const onAddToWishlist = (itemData) => {
    dispatch(addToWishlistRequest(
      {
        "action": "ADD", "products": { [itemData.item.id]: { "qty": 1 } }
    }));
    toggleAlert();
    setHeart(true);
  };
  
  const loading = useSelector(state => state.CategoryProductsReducer.loading);

  const [selectedIndex, setSelectedIndex] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = id => {
    {id === '1' ? setModalVisible(true): null}
  };

  const onCuisineClick = id => {
    setSelectedIndex(id);
    toggleModal(id);    
  };
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const onPressClearAll =()=>{
      setModalVisible(false);
  };

  const renderCuisinesItem = items => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: SIZES.f1,
          borderColor: COLORS.grey,
          borderWidth: 1,
          borderRadius: SIZES.r1,
          height: 34,
          marginLeft: SIZES.mlr1,
          marginTop: 5,
          marginBottom: 5,
        }}
        onPress={() => onCuisineClick(items.item.id)}>
        {/* onPress={() => setSelectedIndex(items.item.id)}>
        {toggleModal()} */}
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={() => 
            setModalVisible(false)
          }
          swipeDirection="down"
          backgroundColor="#FFFFFF"
          style={{width: '100%', marginTop: 200, marginLeft: 0}}>
          <View style={{marginTop: 10}}>
            <CuisinesBottomSheet onPressClearAll={()=> onPressClearAll()} />
          </View>
        </Modal>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: SIZES.f1,
            height: 34,
            marginTop: 8,
            marginBottom: 8,
            marginLeft: 12,
            marginRight: 12,
          }}>
          <Text
            style={{
              alignContent: 'center',
              fontSize: SIZES.h,
              color: COLORS.black,
              fontWeight: SIZES.w5,
              fontFamily: FONTS.normal,
            }}>
            {items.item.title}
          </Text>
          <View style={{marginLeft: 10}}>
            {items.item.id === '1' ? DelIcons.blackDownArrow : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const Header = () => {
        return (
          <View>
          <View>
            <FlatList
              bounces={false}
              horizontal
              data={CUISINES}
              showsHorizontalScrollIndicator={false}
              keyExtractor={items => items.id}
              renderItem={renderCuisinesItem}
            />
          </View>
      <View>
        {loading ? <Loader style={{ position: 'relative', height: 100, width: 100, alignSelf: 'center' }} /> : null}
        <CuisineList />
      </View>
      </View>
    );
  };
  const renderProductGridItem = itemData => { 
    // alert(JSON.stringify(catProductData?.products));
    return (
      <ProductGridTile
        title={itemData.item.name}
        shortDesc={itemData.item.description}
        longDesc={itemData.item.description}
        price={itemData.item.price}
        image={itemData.item.thumbnail}
        kcal={itemData.item.calories}
        onAddPress={() => onAddToCart(itemData)}
        onAddWishlist={() => onAddToWishlist(itemData)}
        onSelect={() => {
          dispatch(showProductRequest(itemData.item.id)),
          navigation.navigate({
            name: 'ProductDetail',
            params: { productId: itemData.item.id },
          });
        }}
      />
    );
  };
  const checkLoginData = () =>{
      navigation.pop();
    };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <HeaderRight navigation={navigation}  onPressWonderbites = {() => checkLoginData()} />
      <View style={{ marginBottom: 50 }}>
         <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: COLORS.white }}
          numColumns={1}
          data={catProductData?.products}
          renderItem={renderProductGridItem}
          ListHeaderComponent={Header}
          keyExtractor={(item, index) => item.id}
        /> 
        <Modal isVisible={isAlertVisible}>
          <SuccessModel
            successTitle={"Product Added to Wishlist"}
            onSelect={toggleAlert}
            type="Success"
          />
        </Modal>
        <Modal isVisible={isAddAlertVisible}>
          <SuccessModel
            successTitle={"Product Added to Cart"}
            onSelect={toggleAddAlert}
            type="Success"
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default CategoryScreen;

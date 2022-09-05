import Config from 'react-native-config';
import { CANCEL } from 'redux-saga';
const API = {
  //Auth API's
  SIGN_UP_URL: `${Config.BASE_URL}/api/register`,
  LOGIN_URL: `${Config.BASE_URL}/api/login`,
  LOG_OUT_URL: `${Config.BASE_URL}/api/logout`,
  RESET_PASSWORD: `${Config.BASE_URL}/api/forgot-password`,

  //Address API's
  ADDRESS_LIST_URL: `${Config.BASE_URL}/api/addresses`,
  ADD_ADDRESS_URL: `${Config.BASE_URL}/api/addresses`,
  DELETE_ADDRESS_URL: `${Config.BASE_URL}/api/addresses/`,

  //Profile API's
  GET_PROFILE_URL: `${Config.BASE_URL}/api/users/auth`,
  UPDATE_PROFILE_URL: `${Config.BASE_URL}/api/users/`,

  //Cuisines API's
  CUISINES_LIST_URL: `${Config.BASE_URL}/api/cuisines`,

  //Categories API's
  CATEGORY_LIST: `${Config.BASE_URL}/api/categories`,

  //Products API's  
  PRODUCT_LIST: `${Config.BASE_URL}/api/products/`,

  //Product Images API's
  PRODUCT_IMAGES_URL: `${Config.BASE_URL}/api/productimages`,

  //Cart API's
  CART_LIST: `${Config.BASE_URL}/api/cart`,

  //Content Pages API's
  ABOUT_URL: `${Config.BASE_URL}/api/about`,
  TERMS_AND_CONDITIONS: `${Config.BASE_URL}/api/terms`,
  PRIVACY_POLICY: `${Config.BASE_URL}/api/privacy_policy`,
  CONTENT_POLICY: `${Config.BASE_URL}/api/content_policy`,

  //Settings API's
  DELETE_ACCOUNT_URL: `${Config.BASE_URL}/api/delete_account`,
  MY_SUBSCRIPTIONS_URL: `${Config.BASE_URL}/api/my_subscriptions`,
  CHANGE_EMAIL_URL: `${Config.BASE_URL}/api/change_email`,

  //Wishlist API's
  WISHLIST_SHOW_URL: `${Config.BASE_URL}/api/wishlists`,
  CREATE_WISHLIST_URL: `${Config.BASE_URL}/api/wishlists`,
  DELETE_WISHLIST_ITEM_URL: `${Config.BASE_URL}/api/wishlists`,

  //Banners API's
  BANNER_LIST_URL: `${Config.BASE_URL}/api/banner`,

  //Checkout API
  APPLY_COUPON_URL: `${Config.BASE_URL}/api/coupons/apply`,
  WONDERPOINTS_COUNT_URL: `${Config.BASE_URL}/api/wonderpoints/avail`,
  WONDERPOINTS_LIST_URL: `${Config.BASE_URL}/api/wonderpoints?page=`,
  CHECKOUT_API: `${Config.BASE_URL}/api/checkouts`,

  // Past Order
  ORDER_LIST_URL: `${Config.BASE_URL}/api/orders`,
  ORDER_DETAIL_URL: `${Config.BASE_URL}/api/orders`,

  //SIGN IN TO JOIN SCREEN JOIN
  // SEND_OTP_URL : , 

  SETTINGS: `${Config.BASE_URL}/api/settings`,

};
export default API;

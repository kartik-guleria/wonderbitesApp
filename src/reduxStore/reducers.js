import loginReducer from 'common/screens/SignInScreen/reducer';
import signUpReducer from 'common/screens/SignUpScreen/reducer';
import commonReducer from 'common/reducer';
import addAddressReducer from 'delivery/screens/AddAddressScreen/reducer';
import getUserReducer from 'common/screens/ProfileScreen/reducer';
import getAddressListReducer from 'delivery/screens/AddressListScreen/reducer';
import deleteUserAddressReducer from 'components/MyAddressesBottom/reducer';
import FetchPlacesReducer from 'delivery/screens/AskAddressScreen/reducer';
import signJoinReducer from 'common/screens/SignInToJoin/reducer';
import userUpdateReducer from 'delivery/screens/PersonalDetailScreen/reducer';
import CategoryListReducer from 'delivery/screens/MainScreen/reducer';
import CategoryProductsReducer from 'delivery/screens/CategoryScreen/reducer';
import CartReducer from 'delivery/screens/CartScreen/reducer';
import FetchCuisineReducer from 'delivery/screens/BottomViewScreen/reducer';
import ProductDetailReducer from 'delivery/screens/ProductDetailScreen/reducer';
import WishlistReducer from 'delivery/screens/WishlistScreen/reducer';
import NotificationsReducer from 'delivery/screens/NotificationViewScreen/reducer';
import PastOrdersReducer from 'delivery/screens/OrderHistoryScreen/reducer';
import PastOrderDetailReducer from 'delivery/screens/PastOrderDetailScreen/reducer';
import UpcomingOrdersReducer from 'delivery/screens/UpcomingOrderHistoryScreen/reducer';
import UpcomingOrderDetailReducer from 'delivery/screens/UpcomingOrderDetailScreen/reducer';
import VerificationCodeReducer from 'common/screens/VerificationCodeScreen/reducer';
import EmailVerificationReducer from 'common/screens/EmailVerificationCodeScreen/reducer';
import CheckoutReducer from 'delivery/screens/CheckoutScreen/reducer';
import PopularSearchReducer from 'delivery/screens/PopularSearchScreen/reducer';
import WonderPointsListReducer from 'delivery/screens/MyWonderPointsScreen/reducer';
import GetIngredientsListReducer from 'delivery/screens/AddIngrieidientsScreen/reducer';
import ResetPasswordReducer from 'common/screens/ResetPasswordScreen/reducer';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  commonReducer,
  loginReducer,
  signUpReducer,
  signJoinReducer,
  FetchPlacesReducer,
  addAddressReducer,
  getAddressListReducer,
  deleteUserAddressReducer,
  getUserReducer,
  userUpdateReducer,
  FetchCuisineReducer,
  CategoryListReducer,
  CategoryProductsReducer,
  CartReducer,
  ProductDetailReducer,
  WishlistReducer,
  NotificationsReducer,
  PastOrdersReducer,
  PastOrderDetailReducer,
  UpcomingOrdersReducer,
  UpcomingOrderDetailReducer,
  VerificationCodeReducer,
  EmailVerificationReducer,
  CheckoutReducer,
  PopularSearchReducer,
  WonderPointsListReducer,
  GetIngredientsListReducer,
  ResetPasswordReducer
});

export default appReducer;

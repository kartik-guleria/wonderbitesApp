import { all } from 'redux-saga/effects'; 
import SignInSaga from 'common/screens/SignInScreen/Saga';
import SignUpSaga from 'common/screens/SignUpScreen/Saga';
import SignJoinSaga from 'common/screens/SignInToJoin/Saga';
import FetchPlacesSaga from 'delivery/screens/AskAddressScreen/saga';
import UserUpdateSaga from 'delivery/screens/PersonalDetailScreen/Saga';
import AddAddressSaga from 'delivery/screens/AddAddressScreen/Saga';
import GetAddressListSaga from 'delivery/screens/AddressListScreen/saga';
import GetUserSaga from 'common/screens/ProfileScreen/Saga';
import DeleteAddressSaga from 'components/MyAddressesBottom/saga';
import MainSaga from 'delivery/screens/MainScreen/saga';
import CategoryScreenSaga from 'delivery/screens/CategoryScreen/saga'
import CartScreenSaga from 'delivery/screens/CartScreen/saga';
import ShowProductSaga from 'delivery/screens/ProductDetailScreen/saga'
import FetchCuisineSaga from 'delivery/screens/BottomViewScreen/saga';
import WishlistSaga from 'delivery/screens/WishlistScreen/Saga';
import NotificationSaga from 'delivery/screens/NotificationViewScreen/saga';
import PastOrdersSaga from 'delivery/screens/OrderHistoryScreen/saga';
import PastOrderDetailSaga from 'delivery/screens/PastOrderDetailScreen/saga';
import UpcomingOrdersSaga from 'delivery/screens/UpcomingOrderHistoryScreen/saga';
import UpcomingOrderDetailSaga from 'delivery/screens/UpcomingOrderDetailScreen/saga';
import VerificationCodeSaga from 'common/screens/VerificationCodeScreen/Saga';
import EmailVerificationSaga from 'common/screens/EmailVerificationCodeScreen/Saga';
import RegisterSaga from 'common/screens/RegisterScreen/Saga';
import CheckoutSaga from 'delivery/screens/CheckoutScreen/saga';
import PopularSearchSaga from 'delivery/screens/PopularSearchScreen/saga';
import WonderPonitsListSaga from 'delivery/screens/MyWonderPointsScreen/saga';
import GetIngredientsListSaga from 'delivery/screens/AddIngrieidientsScreen/saga';
import ResetPasswordSaga from 'common/screens/ResetPasswordScreen/saga';
const root = function* rootSaga() {
  yield all([
    SignInSaga(),
    SignJoinSaga(),
    SignUpSaga(),
    FetchPlacesSaga(),
    UserUpdateSaga(),
    AddAddressSaga(),
    GetUserSaga(),
    GetAddressListSaga(),
    DeleteAddressSaga(),
    MainSaga(),
    CategoryScreenSaga(),
    CartScreenSaga(),
    FetchCuisineSaga(),
    ShowProductSaga(),
    WishlistSaga(),
    NotificationSaga(),
    PastOrdersSaga(),
    UpcomingOrdersSaga(),
    UpcomingOrderDetailSaga(),
    PastOrderDetailSaga(),
    VerificationCodeSaga(),
    RegisterSaga(),
    EmailVerificationSaga(),
    CheckoutSaga(),
    PopularSearchSaga(),
    WonderPonitsListSaga(),
    GetIngredientsListSaga(),
    ResetPasswordSaga()
  ]);
};

export default root;

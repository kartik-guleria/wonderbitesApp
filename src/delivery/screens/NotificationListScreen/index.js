// import React from 'react';
// import {
//   View,
//   FlatList,
//   } from 'react-native';
// import MainStyle from 'styleSheet/MainStyle';
// import { useTranslation } from 'react-i18next';

// const NotificationListScreen = props => {
//   const { t, i18n } = useTranslation();
//   const renderItem = ({item}) => <Item title={item.title} />;

//   return (
//     <View style={MainStyle.mainBody}>
//       <View
//         style={[
//           MainStyle.MainContainerLight,
//           {marginLeft: 20, marginRight: 20, marginBottom: 100},
//         ]}>
//         <FlatList
//         bounces = {false}
//           data={null}
//           showsVerticalScrollIndicator="false"
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </View>
//     </View>
//   );
// };

// export default NotificationListScreen;


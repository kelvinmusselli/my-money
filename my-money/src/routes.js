import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './pages/Login';
import Home from './pages/Home';
import ListDepot from './pages/ListDepot';
import ListLoss from './pages/ListLoss';

// const BottomNavigation = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         title: 'Home',
//       },
//     },
//     ListDepot: {
//       screen: ListDepot,
//       navigationOptions: {
//         title: 'Entradas',
//       },
//     },
//     ListLoss: {
//       screen: ListLoss,
//       navigationOptions: {
//         title: 'Saídas',
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       showIcon: true,
//       showLabel: true,
//       activeTintColor: '#f00',
//     },
//     headerLayoutPreset: 'center',
//     headerBackTitleVisible: false,
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#fff',
//       },
//       headerTintColor: '#fff',
//     },
//   }
// );

// ROTAS
const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      // Login,
      Home,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;

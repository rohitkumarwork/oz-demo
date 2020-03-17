import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { Dimensions } from 'react-native';

// custom modules
import routes from './stackRoutes';
import DrawerScreen from './containers/DrawerScreen';
import PlaylistScreen from './containers/PlaylistScreen';
import ChannelVideosScreen from './containers/ChannelVideosScreen';
import SearchScreen from './containers/SearchScreen';
import { responsiveWidth } from './constants/dimensions';

// handle drawer width
const { width } = Dimensions.get('window');
const actualWidth = width - responsiveWidth(20);

// stack navigator for routes that does not consist drawer
const AuthStack = createStackNavigator(routes, {
  initialRouteName: 'MainScreen',
  navigationOptions: {
    header: null,
  },
});

// drawer navigator for screen that consist drawer
const DrawerNavigator = createDrawerNavigator(
  {
    ChannelVideosScreen: {
      screen: ChannelVideosScreen,
    },
    Playlist: {
      screen: PlaylistScreen,
    },
    SearchScreen: {
      screen: SearchScreen,
    },
  },
  {
    drawerWidth: actualWidth,
    contentComponent: DrawerScreen,
  },
);

// switching between drawer navigator nad stack navigator
const ScreenNavigation = createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    Home: {
      screen: DrawerNavigator,
    },
  },
  {
    initialRouteName: 'Auth',
    navigationOptions: {
      header: null,
    },
  },
);
export default ScreenNavigation;

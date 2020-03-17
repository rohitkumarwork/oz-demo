// Screen that does not consist drawer

import LoginScreen from './containers/LoginScreen';
import MainScreen from './containers/MainScreen';
import SettingsScreen from './containers/SettingScreen/SettingsScreen';
import UpcomingVideoScreen from './containers/UpcomingVideoScreen';
import MyProfile from './containers/MyProfileScreen/MyProfileScreen';
import NowPlayingScreen from './containers/NowPlayingScreen';
import SearchSelectedListScreen from './containers/SearchScreen/SearchSelectedListScreen';
import SearchSelectedInfoScreen from './containers/SearchScreen/SearchSelectedInfoScreen';
import SearchScreenPlayingScreen from './containers/SearchScreen/SearchScreenPlayingScreen';
import SearchTabScreen from './containers/SearchScreen/SearchTabScreen';
import SearchTabListScreen from './containers/SearchScreen/SearchTabListScreen';
import ProfileLatestClip from './containers/LatestClip/ProfileLatestClip/Profile';
import CommentScreen from './containers/LatestClip/CommentScreen/CommentScreen';
import ForgotPassword from './containers/ForgotPassword/ForgotPassword';
import SignUpScreen from './containers/SignUpScreen';

export default {
  Login: {
    screen: LoginScreen,
  },
  SignUpScreen: {
    screen: SignUpScreen,
  },
  ForgotPassword: {
    screen: ForgotPassword,
  },
  MainScreen: {
    screen: MainScreen,
  },

  UpcomingVideo: {
    screen: UpcomingVideoScreen,
  },

  Settings: {
    screen: SettingsScreen,
  },
  MyProfile: {
    screen: MyProfile,
  },
  NowPlaying: {
    screen: NowPlayingScreen,
  },
  SearchSelectedListScreen: {
    screen: SearchSelectedListScreen,
  },
  SearchSelectedInfoScreen: {
    screen: SearchSelectedInfoScreen,
  },
  SearchScreenPlayingScreen: {
    screen: SearchScreenPlayingScreen,
  },
  SearchTabScreen: {
    screen: SearchTabScreen,
  },
  ProfileLatestClip: {
    screen: ProfileLatestClip,
  },
  CommentScreen: {
    screen: CommentScreen,
  },
  SearchTabListScreen: {
    screen: SearchTabListScreen,
  },
};

import {
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

// custom modules
import { BaseStyle, Colors } from '../../constants';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from '../../constants/dimensions';

// interface style for channelVideoScreen
interface Style {
  rightButton: ViewStyle;
  mainContainer: ViewStyle;
  mainloginContainer: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  titleContainer: ViewStyle;
  titleText: TextStyle;
  loginText: TextStyle;
}

const aspectRatio = BaseStyle.DEVICE_HEIGHT / BaseStyle.DEVICE_WIDTH;

//  common styling  for channelVideoScreen

const styles = StyleSheet.create<Style>({
  rightButton: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: (BaseStyle.DEVICE_HEIGHT / 100) * 2.3,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 4,
    width: (BaseStyle.DEVICE_HEIGHT / 100) * 12,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 0.5,
  },
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
        ? (BaseStyle.DEVICE_HEIGHT / 100) * 12
        : (BaseStyle.DEVICE_HEIGHT / 100) * 10,
    paddingHorizontal: responsiveWidth(5),
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    paddingTop:
      Platform.OS === 'ios'
        ? (BaseStyle.DEVICE_HEIGHT / 100) * 2
        : (BaseStyle.DEVICE_HEIGHT / 100) * 4,
  },
  mainloginContainer: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
        ? (BaseStyle.DEVICE_HEIGHT / 100) * 12
        : (BaseStyle.DEVICE_HEIGHT / 100) * 10,
    paddingHorizontal: responsiveWidth(5),
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    paddingTop:
      Platform.OS === 'ios'
        ? (BaseStyle.DEVICE_HEIGHT / 100) * 2
        : (BaseStyle.DEVICE_HEIGHT / 100) * 4,
  },
  imageContainer: {
    height: responsiveHeight(5),
    width: responsiveWidth(5),
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    ...Platform.select({
      ios: {
        height: responsiveWidth(4),
        width: responsiveWidth(4),
      },
      android: {
        height: responsiveWidth(4.2),
        width: responsiveWidth(4.2),
      },
    }),

    resizeMode: 'cover',
    marginLeft: responsiveWidth(8),
  },
  titleContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: (BaseStyle.DEVICE_HEIGHT / 100) * 4,
    flex: 1,
  },
  titleText: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:
      aspectRatio > 1.6 ? responsiveFontSize(1.7) : responsiveFontSize(2),
  },

  loginText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: aspectRatio > 1.6 ? 12 : responsiveFontSize(1.5),
  },
});
export default styles;

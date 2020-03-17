import {
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

// custom modules
import { Colors, BaseStyle } from '../../constants';
import {
  responsiveWidth,
  responsiveHeight,
  getFontSize,
} from '../../constants/dimensions';

//  interface style for header
interface Style {
  headerStyle: ViewStyle;
  sideButtonStyle: ViewStyle;
  rightButton: ViewStyle;
  leftButton: ViewStyle;
  loginText: TextStyle;
  headerIconStyle: ImageStyle;
}

const styles = StyleSheet.create<Style>({
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
        ? (BaseStyle.DEVICE_HEIGHT / 100) * 10
        : 60,
    ...Platform.select({
      ios: {
        paddingTop:
          BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
            ? (BaseStyle.DEVICE_HEIGHT / 100) * 4
            : (BaseStyle.DEVICE_HEIGHT / 100) * 3,
        paddingBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 1,
      },
      android: {
        paddingTop: Platform.isTV ? 0 : (BaseStyle.DEVICE_HEIGHT / 100) * 2,
      },
    }),
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  sideButtonStyle: {
    alignItems: 'center',
  },

  rightButton: {
    margin: Platform.isTV ? responsiveHeight(1) : 0,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: (BaseStyle.DEVICE_HEIGHT / 100) * 2.3,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 5,
    width: (BaseStyle.DEVICE_WIDTH / 100) * 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 0.5,
  },

  leftButton: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    height: responsiveHeight(5),
    width: responsiveWidth(30),
    alignSelf: 'center',
    justifyContent: 'center',
  },

  headerIconStyle: {
    height: 35,
    width: 70,
  },

  loginText: {
    alignSelf: 'center',
    fontSize: getFontSize(10),
    color: Colors.Black,
  },
});

export default styles;

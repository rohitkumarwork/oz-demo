import {
  Platform,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

// custom mudules
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../constants/dimensions';
import { BaseStyle, Colors } from '../../../constants';
const imageHeight = BaseStyle.DEVICE_HEIGHT / 3 - 20;

// Style interface for search selected screen
interface Style {
  container: ViewStyle;
  header: ViewStyle;
  imageContainer: ViewStyle;
  imageBackTV: ImageStyle;
  imageBack: ImageStyle;
  image: any;
  headerContainer: ViewStyle;
  headerText: TextStyle;
  textLeftBottom: TextStyle;
  iconRightBottom: any;
}
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.Black,
    height: responsiveHeight(8),
  },
  imageContainer: {
    flexDirection: 'row',
    left: 0,
    marginRight: responsiveWidth(2),
    justifyContent: 'flex-start',
  },
  imageBackTV: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    resizeMode: 'contain',
  },
  imageBack: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: Platform.isTV
      ? BaseStyle.DEVICE_HEIGHT / 2 - 100
      : BaseStyle.DEVICE_HEIGHT / 3 - 20,
    maxWidth: Platform.isTV ? null : '100%',
    alignSelf: 'center',
  },

  headerContainer: {
    alignSelf: 'center',
    marginLeft: Platform.OS === 'android' ? responsiveWidth(27) : 0,
  },
  headerText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
  },
  textLeftBottom: {
    width: '70%',
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'flex-start',
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 25
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 7,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 20
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 9,
      },
    }),
    left: 20,
    color: Colors.white,
  },
  iconRightBottom: {
    alignSelf: 'flex-end',
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 39
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 11,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 30
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 13,
      },
    }),
    right: responsiveWidth(2),
    height: Platform.isTV ? responsiveHeight(10) : responsiveHeight(40),
    width: Platform.isTV ? responsiveWidth(10) : responsiveWidth(12),
  },
});
export default styles;

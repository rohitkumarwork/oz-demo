import { StyleSheet, Platform, TextStyle, ImageStyle } from 'react-native';

// custom modules
import { BaseStyle, Colors } from '../../constants';

//  custom modules
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../../constants/dimensions';
import { FontWeights } from '../../theme';

// style interface for playListScreen

interface Style {
  textRightTop: TextStyle;
  iconRightBottom: ImageStyle;
  textLeftBottom: any;
  image: any;
  imageBackTV: ImageStyle;
  imageBack: ImageStyle;
  dateView: any;
  latestClipContainer: any;
}
const imageHeight = BaseStyle.DEVICE_HEIGHT / 3 - 20;

const styles = StyleSheet.create<Style>({
  image: {
    width: '100%',
    height: Platform.isTV
      ? BaseStyle.DEVICE_HEIGHT / 2 - 100
      : BaseStyle.DEVICE_HEIGHT / 3 - 20,
    maxWidth: Platform.isTV ? null : '100%',
    alignSelf: 'center',
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
  textRightTop: {
    fontSize: responsiveFontSize(1.4),
    padding: responsiveHeight(1),
    alignSelf: 'flex-end',
    color: Colors.Black,
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
    left: Platform.isTV ? responsiveWidth(2) : responsiveWidth(10),
    color: Colors.white,
    fontWeight: FontWeights.Semibold,
  },
  iconRightBottom: {
    alignSelf: 'flex-end',
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 15
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 11,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 13
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 13,
      },
    }),
    right: responsiveWidth(2),
    height: responsiveHeight(5),
    width: responsiveWidth(5),
  },
  dateView: {
    backgroundColor: Colors.white,
    marginTop: Platform.isTV ? responsiveHeight(1) : null,
  },
  latestClipContainer: {
    marginTop: Platform.isTV ? -20 : null,
  },
});

export default styles;

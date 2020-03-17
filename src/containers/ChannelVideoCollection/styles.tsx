import {
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

// custom modules
import { BaseStyle, Colors } from '../../constants';
import { dynamicSize, getFontSize } from '../../constants/dimensions';
import { FontWeights } from '../../theme';

// interface  style for channelVideoScreen

interface Style {
  container: ViewStyle;
  centered: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  textLeftBottom: TextStyle;
  textLBottom: any;
  iconRightBottom: ImageStyle;
  TvStyle: ViewStyle;
}

const imageHeight = BaseStyle.DEVICE_HEIGHT / 3 - 20;

const styles = StyleSheet.create<Style>({
  TvStyle: {
    height: BaseStyle.DEVICE_HEIGHT / 2 - 9,
    width: BaseStyle.DEVICE_WIDTH / 2,
  },
  container: {
    height: '100%',
  },

  centered: {
    alignItems: 'center',
    margin: dynamicSize(30),
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: Platform.isTV
      ? BaseStyle.DEVICE_HEIGHT / 2 - 20
      : BaseStyle.DEVICE_HEIGHT / 3 - 20,
    maxWidth: Platform.isTV ? 0 : '100%',
    alignSelf: 'center',
  },
  textLeftBottom: {
    width: '70%',
    fontSize: getFontSize(18),
    alignSelf: 'flex-start',
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 42
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 7,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 35
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 9,
      },
    }),
    left: dynamicSize(20),
    color: Colors.white,
  },
  textLBottom: {
    fontWeight: FontWeights.Semibold,
    width: '70%',
    fontSize: getFontSize(18),
    alignSelf: 'flex-start',
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 42
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 7,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 35
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 9,
      },
    }),
    left: dynamicSize(20),
    color: Colors.white,
  },
  iconRightBottom: {
    width: '30%',
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
    right: dynamicSize(10),
    height: dynamicSize(30),
  },
});

export default styles;

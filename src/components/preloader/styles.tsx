import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

// custom modules
import { BaseStyle, Colors } from '../../constants';
import { getFontSize } from '../../constants/dimensions';

// interface style for preloader
interface Style {
  container: ViewStyle;
  loader: ViewStyle;
  backgroundImage: ImageStyle;
  prloaderImage: ImageStyle;
  textBlock: ViewStyle;
  textBlockText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: BaseStyle.DEVICE_WIDTH,
    height: '100%',
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: (BaseStyle.DEVICE_HEIGHT / 100) * 27,
    right: 0,
    left: 0,
    bottom: 0,
  },
  backgroundImage: {
    height: BaseStyle.DEVICE_HEIGHT,
  },
  prloaderImage: {
    height: (BaseStyle.DEVICE_WIDTH / 100) * 12,
    width: (BaseStyle.DEVICE_WIDTH / 100) * 20,
    alignSelf: 'center',
  },
  textBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: (BaseStyle.DEVICE_HEIGHT / 100) * 4,
  },
  textBlockText: {
    color: '#f3f3f3',
    backgroundColor: Colors.Transparent,
    bottom: (BaseStyle.DEVICE_HEIGHT / 100) * 4,
    fontSize: getFontSize(12),
  },
});

export default styles;

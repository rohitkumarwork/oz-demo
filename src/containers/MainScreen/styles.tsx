import {
  StyleSheet,
  Platform,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

// custom modules
import { BaseStyle, Colors } from '../../constants';

// style interface of mainScreen
interface Style {
  container: ViewStyle;
  posterUrl: ImageStyle;
  textBlockText: TextStyle;
  gridViewContainer: ViewStyle;
  platformTVview: ViewStyle;
}

// styling of mainScreen
const styles = StyleSheet.create<Style>({
  container: {
    height: '100%',
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: Platform.isTV ? 0 : (BaseStyle.DEVICE_HEIGHT / 100) * 2,
      },
    }),
  },

  posterUrl: {
    width: '100%',
    height: Platform.isTV
      ? BaseStyle.DEVICE_HEIGHT / 2 - 20
      : BaseStyle.DEVICE_HEIGHT / 3 - 20,
    maxWidth: Platform.isTV ? 0 : '100%',
    alignSelf: 'center',
  },
  platformTVview: {
    height: BaseStyle.DEVICE_HEIGHT / 2 - 5,
    width: BaseStyle.DEVICE_WIDTH / 2,
  },
  textBlockText: {
    color: '#f3f3f3',
    backgroundColor: Colors.Transparent,
    paddingTop: (BaseStyle.DEVICE_HEIGHT / 100) * 9,
  },
  gridViewContainer: {
    marginTop: (BaseStyle.DEVICE_HEIGHT / 100) * 5,
  },
});

export default styles;

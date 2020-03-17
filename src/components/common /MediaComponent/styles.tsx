import {
  Platform,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

// custom modules
import { Colors, BaseStyle } from '../../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from '../../../constants/dimensions';

// intreface style for media components

interface Style {
  container: ViewStyle;
  subContainer: ViewStyle;
  iconStyle: ViewStyle;
  imageStyle: ImageStyle;
  mediaText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    borderWidth: 1.25,
    justifyContent: 'space-around',
    borderColor: Colors.GhostWhite,
    borderRadius: 1.5,
    marginTop: Platform.isTV ? 0 : responsiveHeight(-5),
  },
  subContainer: {
    paddingVertical: (BaseStyle.DEVICE_HEIGHT / 100) * 1.2,
    borderRightWidth: 1.25,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(2),
    borderColor: Colors.GhostWhite,
  },
  iconStyle: {
    paddingRight: (BaseStyle.DEVICE_WIDTH / 100) * 1,
  },
  mediaText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.5),

    ...Platform.select({
      ios: {
        marginTop: responsiveWidth(0.125),
      },
      android: {
        marginTop: Platform.isTV ? -5 : responsiveWidth(0.125),
      },
    }),
  },
  imageStyle: {
    height: responsiveHeight(3),
  },
});

export default styles;

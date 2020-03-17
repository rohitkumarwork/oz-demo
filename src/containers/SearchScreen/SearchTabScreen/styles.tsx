import {
  Platform,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

// custom modules
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../constants/dimensions';
import { BaseStyle, Colors } from '../../../constants';

interface Style {
  container: ViewStyle;
  header: any;
  imageContainer: ViewStyle;
  image: any;
  imageBackTV: ImageStyle;
  imageBack: ImageStyle;
  headerContainer: ViewStyle;
  headerText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    marginTop: responsiveHeight(3.6),
  },
  header: {
    backgroundColor: 'blue',
    height: responsiveHeight(8),
    marginTop: Platform.OS === 'android' ? responsiveHeight(2) : null,
  },
  imageContainer: {
    flexDirection: 'row',
    left: 0,
    marginRight: responsiveWidth(2),
    justifyContent: 'flex-start',
  },
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
  },
  imageBack: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
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
});
export default styles;

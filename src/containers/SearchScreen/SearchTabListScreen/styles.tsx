import {
  Platform,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../constants/dimensions';
import { Colors, BaseStyle } from '../../../constants';
import { FontWeights } from '../../../theme';

interface Style {
  imageConatiner: ViewStyle;
  image: ImageStyle;
  textLeftBottom: TextStyle;
  iconRightBottom: ImageStyle;
  imageBack: ImageStyle;
  headerContainer: ViewStyle;
  headerText: TextStyle;
  headerTitle: ViewStyle;
  headerTitleText: any;
}

const styles = StyleSheet.create<Style>({
  imageConatiner: {
    flexDirection: 'row',
    left: 0,
    marginRight: responsiveWidth(2),
    justifyContent: 'flex-start',
  },
  image: {
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 15,
    width: (BaseStyle.DEVICE_WIDTH / 100) * 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textLeftBottom: {
    width: '80%',
    fontSize: responsiveFontSize(2.0),
    alignSelf: 'flex-start',
    color: Colors.Black,
    paddingLeft: (BaseStyle.DEVICE_WIDTH / 100) * 2,
  },
  iconRightBottom: {
    alignSelf: 'center',
    right: 10,
    height: 30,
    width: 40,
  },

  imageBack: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    resizeMode: 'cover',
  },
  headerContainer: {
    alignSelf: 'center',
    marginLeft: Platform.OS === 'android' ? responsiveWidth(27) : 0,
  },
  headerText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
  },
  headerTitle: {
    flex: 6,
    backgroundColor: Colors.white,
  },
  headerTitleText: {
    fontWeight: FontWeights.Semibold,
    alignSelf: 'center',
    marginTop: 20,
  },
});
export default styles;

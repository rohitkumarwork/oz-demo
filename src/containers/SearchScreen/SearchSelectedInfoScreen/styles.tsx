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
import { Colors, BaseStyle } from '../../../constants';
import { FontWeights } from '../../../theme';

// style interface of Search selected info
interface Style {
  container: ViewStyle;
  imageBackTV: ImageStyle;
  image: ImageStyle;
  imageBack: ImageStyle;
  imageConatiner: ViewStyle;
  textLeftBottom: TextStyle;
  titleStyle: any;
  titleContainer: ViewStyle;
  headerText: TextStyle;
  headerContainer: ViewStyle;
  header: ViewStyle;
  iconRightBottom: ImageStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.Black,
    height: responsiveHeight(8),
  },
  imageConatiner: {
    flexDirection: 'row',
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
  titleContainer: {
    flex: 6,
    backgroundColor: Colors.white,
  },
  titleStyle: {
    fontWeight: FontWeights.Semibold,
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  iconRightBottom: {
    alignSelf: 'center',
    right: responsiveWidth(2),
    height: Platform.isTV ? responsiveHeight(10) : responsiveHeight(40),
    width: Platform.isTV ? responsiveWidth(10) : responsiveWidth(12),
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

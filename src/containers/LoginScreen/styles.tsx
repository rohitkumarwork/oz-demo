import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
  ImageStyle,
} from 'react-native';

// custom moduels
import { Colors, BaseStyle } from '../../constants';
import { dynamicSize, getFontSize } from '../../constants/dimensions';
import { responsiveWidth } from '../../responsive/dimens';

// interface style for loginscreen
interface Style {
  flexOne: ViewStyle;
  mainArea: ViewStyle;
  container: ViewStyle;
  headerText: TextStyle;
  headerArea: ViewStyle;
  bottomArea: ViewStyle;
  buttonStyle: ViewStyle;
  buttonText: TextStyle;
  errorContainer: ViewStyle;
  errorText: TextStyle;
  textInputContainer: ViewStyle;
  TextiArea: ViewStyle;
  dontHaveAnAccountContainer: ViewStyle;
  dontHaveAnAccountText: TextStyle;
  imageUser: ImageStyle;
}

// styling for loginscreen
const styles = StyleSheet.create<Style>({
  flexOne: {
    flex: 1,
  },
  mainArea: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background_dark,
  },
  headerArea: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  headerText: {
    marginLeft: responsiveWidth(2),
    fontSize: Platform.isTV ? getFontSize(18) : getFontSize(25),
    color: Colors.white,
    fontWeight: '400',
  },
  bottomArea: {
    paddingHorizontal: dynamicSize(40),
  },
  buttonStyle: {
    backgroundColor: Colors.whiteColor,
    borderWidth: dynamicSize(2),
    borderColor: Colors.buttonBorderColor,
    marginTop: (BaseStyle.DEVICE_HEIGHT / 100) * 4,
    paddingVertical: (BaseStyle.DEVICE_HEIGHT / 100) * 1,
    borderRadius: dynamicSize(22),
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.PureBlack,
    fontSize: Platform.isTV ? getFontSize(10) : getFontSize(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  errorContainer: {
    position: 'relative',
  },
  errorText: {
    color: Colors.Red,
    textAlign: 'center',
    fontSize: getFontSize(15),
  },
  textInputContainer: {
    paddingVertical: (BaseStyle.DEVICE_HEIGHT / 100) * 1,
  },
  TextiArea: {
    marginBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 5,
  },
  dontHaveAnAccountContainer: {
    alignItems: 'flex-end',
    paddingTop: (BaseStyle.DEVICE_HEIGHT / 100) * 3,
  },
  dontHaveAnAccountText: {
    color: Colors.white,
    fontSize: getFontSize(15),
  },
  imageUser: {
    height: (BaseStyle.DEVICE_WIDTH / 100) * 25,
    width: (BaseStyle.DEVICE_WIDTH / 100) * 25,
  },
});

export default styles;

import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

//  custom modules
import { Colors } from '../../constants';
import {
  dynamicSize,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../constants/dimensions';

//  interface style for forgotpassword
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
  dontHaveAnAccount: TextStyle;
  forgotText: TextStyle;
  imageUnlock: ImageStyle;
}

// styling for forgotPasswordScreen
const styles = StyleSheet.create<Style>({
  flexOne: {
    flex: 1,
  },
  mainArea: {
    flex: 1,
    flexDirection: 'row',
  },
  imageUnlock: {
    height: responsiveWidth(22),
    width: responsiveWidth(22),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background_dark,
    paddingVertical: responsiveHeight(6),
  },
  headerArea: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  headerText: {
    fontSize: getFontSize(25),
    color: Colors.white,
    fontWeight: '400',
  },
  bottomArea: {
    marginTop: dynamicSize(100),
    paddingHorizontal: dynamicSize(20),
  },
  buttonStyle: {
    backgroundColor: Colors.whiteColor,
    borderWidth: dynamicSize(2),
    borderColor: Colors.buttonBorderColor,
    marginTop: responsiveHeight(4),
    paddingVertical: responsiveHeight(1),
    borderRadius: dynamicSize(22),
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.PureBlack,
    fontSize: getFontSize(16),
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
    paddingVertical: responsiveHeight(1),
  },
  TextiArea: {
    marginBottom: responsiveHeight(5),
  },
  dontHaveAnAccount: {
    color: Colors.white,
    fontSize: getFontSize(15),
    alignSelf: 'center',
    marginTop: dynamicSize(10),
  },
  forgotText: {
    color: Colors.white,
    padding: dynamicSize(30),
    fontSize: getFontSize(15),
  },
});

export default styles;

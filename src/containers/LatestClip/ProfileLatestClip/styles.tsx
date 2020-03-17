import { StyleSheet, Platform, TextStyle, ImageStyle } from 'react-native';

// custom modules
import { Colors, BaseStyle } from '../../../constants';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../../../constants/dimensions';

// interface styles for profile of latest screen
interface Style {
  imageBackground: ImageStyle;
  imageBackTV: ImageStyle;
  emailText: TextStyle;
  imageBack: ImageStyle;
  imageUser: ImageStyle;
  nameBoldText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  imageBackground: {
    height: responsiveHeight(40),
    width: BaseStyle.DEVICE_WIDTH,
    justifyContent: 'center',
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
  imageUser: {
    height: Platform.isTV ? responsiveWidth(15) : responsiveWidth(24),
    width: Platform.isTV ? responsiveWidth(15) : responsiveWidth(24),
    borderRadius: responsiveWidth(12),
    alignSelf: 'center',
  },
  nameBoldText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    paddingVertical: responsiveHeight(0.5),
  },
  emailText: {
    fontSize: responsiveFontSize(2),
    color: Colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    paddingVertical: responsiveHeight(0.5),
  },
});

export default styles;

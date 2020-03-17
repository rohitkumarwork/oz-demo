import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

// custom modules
import { responsiveHeight, getFontSize } from '../../constants/dimensions';
import { BaseStyle } from '../../constants';

// interface style of navigation header
interface Style {
  header: ViewStyle;
  imageContainer: ViewStyle;
  headerContainer: ViewStyle;
  headerText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  header: {
    height:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
        ? responsiveHeight(11)
        : responsiveHeight(9),
    flexDirection: 'row',
    paddingTop:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
        ? responsiveHeight(2)
        : responsiveHeight(2),
    paddingHorizontal:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
        ? responsiveHeight(1)
        : responsiveHeight(1),
  },
  imageContainer: {
    alignSelf: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  headerText: {
    color: 'white',
    fontSize: getFontSize(14),
    textAlign: 'center',
  },
});

export default styles;

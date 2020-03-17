import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

// custom modules
import { Colors } from '../../../constants';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../../../constants/dimensions';

// interfacing style used in comment screen
interface Style {
  flexOne: ViewStyle;
  safeAreaView: ViewStyle;
  scrollContainer: ViewStyle;
  firstComment: TextStyle;
  imageStyle2: ImageStyle;
  imageBackTV: ImageStyle;
  become: TextStyle;
  imageBack: ImageStyle;
  subContainer2: ViewStyle;
  bottomViewContainer: ViewStyle;
  bottomViewTextInput: ViewStyle;
  bottomViewText: TextStyle;
}
const styles = StyleSheet.create<Style>({
  flexOne: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -1,
  },
  scrollContainer: {
    marginBottom: responsiveHeight(3),
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
  subContainer2: {
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    bottom: responsiveHeight(2),
  },
  imageStyle2: {
    height: responsiveHeight(7),
  },

  firstComment: {
    marginHorizontal: responsiveWidth(17),
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  become: {
    marginHorizontal: responsiveWidth(17),
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.5),
  },
  bottomViewContainer: {
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    bottom: responsiveHeight(1),
    alignSelf: 'center',
    padding: responsiveWidth(1),
  },
  bottomViewTextInput: {
    flex: 1,
    borderColor: Colors.borderGray,
    borderWidth: 1,
    paddingLeft: responsiveWidth(2),
  },
  bottomViewText: {
    alignSelf: 'flex-end',
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(5),
  },
});

export default styles;

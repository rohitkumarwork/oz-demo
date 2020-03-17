import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Platform,
} from 'react-native';
import { Colors, BaseStyle } from '../../constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../constants/dimensions';

interface Style {
  MainContainer: ViewStyle;
  topTabView: ViewStyle;
  flatListContainer: ViewStyle;
  imageView: ImageStyle;
  drawerHeaderContainer: ViewStyle;
  bottomImageView: ImageStyle;
  bottomImageViewlogOut: ImageStyle;
  innerFlatListView: ViewStyle;
  textView: TextStyle;
  buttonPressed: TextStyle;
  button: TextStyle;
  subtextView: TextStyle;
  linesStyle: ViewStyle;
  textBottomTab: TextStyle;
  textBottomTab1: TextStyle;
  mainView: ViewStyle;
  flatListView: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  MainContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: responsiveHeight(0),
      },
      android: {
        paddingTop: Platform.isTV ? responsiveHeight(0) : responsiveHeight(2),
      },
    }),
    backgroundColor: Colors.drawerBackground,
  },
  flatListContainer: {
    height: responsiveHeight(90),
    flex: 1,
  },
  drawerHeaderContainer: {
    flexDirection: 'row',
  },
  imageView: {
    width: responsiveHeight(8),
    height: responsiveHeight(8),
    marginLeft: 7,
    resizeMode: 'contain',
  },
  bottomImageView: {
    width: responsiveHeight(6),
    height: responsiveHeight(6),
    resizeMode: 'contain',
  },
  bottomImageViewlogOut: {
    width: responsiveHeight(4),
    height: responsiveHeight(4),
    resizeMode: 'contain',
    marginTop: responsiveHeight(1),
  },

  textView: {
    fontSize: responsiveFontSize(2),
    color: Colors.white,
  },
  buttonPressed: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    color: Colors.text_gray,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    alignSelf: 'center',
  },

  subtextView: {
    fontSize: responsiveFontSize(1.2),
    color: Colors.Hex,
  },
  linesStyle: {
    width: responsiveWidth(75),
    alignItems: 'center',
    marginLeft: responsiveWidth(0.4),
    justifyContent: 'center',
    height: responsiveHeight(0.1),
    alignSelf: 'center',
    backgroundColor: Colors.HexGray86,
  },
  textBottomTab: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.2),
  },
  textBottomTab1: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.2),
    marginTop: responsiveHeight(1),
  },

  mainView: {
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10),
    height: responsiveHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topTabView: {
    alignItems: 'center',
    backgroundColor: Colors.PureBlack,
    justifyContent: 'center',
    width: responsiveWidth(40),
    paddingTop: BaseStyle.iPhoneXheight ? responsiveHeight(1.5) : 0,
    height: BaseStyle.iPhoneXheight ? responsiveHeight(8) : responsiveHeight(6),
    ...Platform.select({
      android: {
        marginTop: Platform.isTV ? responsiveHeight(0) : responsiveHeight(1.5),
      },
    }),
  },
  flatListView: {
    flex: 1,
    flexDirection: 'row',
    margin: responsiveHeight(0.8),
  },
  innerFlatListView: {
    flex: 1,
    paddingLeft: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
});

export default styles;

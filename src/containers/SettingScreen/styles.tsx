import {
  Platform,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

//  custom modules
import { BaseStyle, Colors } from '../../constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  dynamicSize,
} from '../../constants/dimensions';

interface Style {
  MainContainer: ViewStyle;
  headingContainer: ViewStyle;
  imageView: ImageStyle;
  imageView2: ImageStyle;
  linesStyle: ViewStyle;
  header: ViewStyle;
  headerContainer: ViewStyle;
  headerText: TextStyle;
  imageContainer: ImageStyle;
  fbheaderContainer: ViewStyle;
  fbheaderSubContainer: ViewStyle;
  text: any;
  fbSwitchContainer: ViewStyle;
  profileContainer: ViewStyle;
  profileText: TextStyle;
  textHeaderContainer: ViewStyle;
  textHeader: TextStyle;
  container: ViewStyle;
  modal_container: ViewStyle;
  modal_body: ViewStyle;
  title_modal: any;
  message_modal: any;
  input_container: TextStyle;
  btn_container: any;
  divider_btn: ViewStyle;
  touch_modal: ViewStyle;
  btn_modal_left: any;
  btn_modal_right: any;
  imageBackTV: any;
  imageBack: ViewStyle;
  toggleImageStyle: ImageStyle;
  toggleClickImageStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.DarkGrey,
  },
  headingContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  imageView: {
    alignItems: 'flex-start',
    width: responsiveWidth(6),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(1),
    resizeMode: 'contain',
  },
  imageView2: {
    alignItems: 'flex-start',
    width: responsiveWidth(5),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(1),
    resizeMode: 'contain',
  },
  linesStyle: {
    width: responsiveWidth(89),
    alignItems: 'center',
    marginLeft: responsiveWidth(0.4),
    justifyContent: 'center',
    height: responsiveHeight(0.1),
    alignSelf: 'center',
    backgroundColor: '#DBDBDB',
  },
  header: {
    backgroundColor: Colors.Black,
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
  headerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  headerText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
  },

  fbheaderContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
  },
  fbheaderSubContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: responsiveWidth(3),
    color: Colors.white,
    fontSize: responsiveFontSize(1.5),
  },
  fbSwitchContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  profileText: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.2),
  },
  textHeaderContainer: {
    flex: 2.5,
    alignItems: 'flex-end',
  },
  textHeader: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.5),
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        backgroundColor: 'rgba(0,0,0,0.62)',
      },
    }),
  },
  modal_container: {
    marginLeft: 30,
    marginRight: 30,
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
        elevation: 24,
        minWidth: 280,
        borderRadius: 5,
      },
      android: {
        backgroundColor: '#fff',
        elevation: 24,
        minWidth: 280,
        borderRadius: 5,
      },
    }),
  },
  modal_body: {
    ...Platform.select({
      ios: {
        padding: 10,
      },
      android: {
        padding: 24,
      },
    }),
  },
  title_modal: {
    fontWeight: 'bold',
    fontSize: 20,
    ...Platform.select({
      ios: {
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 5,
      },
      android: {
        textAlign: 'left',
      },
    }),
  },
  message_modal: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        textAlign: 'center',
        marginBottom: 10,
      },
      android: {
        textAlign: 'left',
        marginTop: 20,
      },
    }),
  },
  input_container: {
    textAlign: 'left',
    fontSize: 16,
    color: 'rgba(0,0,0,0.54)',
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 5,
        borderWidth: 1,
        borderColor: '#B0B0B0',
        paddingBottom: 5,
        paddingLeft: 10,
        marginBottom: 15,
        marginTop: 10,
      },
      android: {
        marginTop: 8,
        borderBottomWidth: 2,
        borderColor: '#009688',
      },
    }),
  },
  btn_container: {
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#B0B0B0',
        maxHeight: 48,
      },
      android: {
        alignSelf: 'flex-end',
        maxHeight: 52,
        paddingTop: 8,
        paddingBottom: 8,
      },
    }),
  },
  divider_btn: {
    ...Platform.select({
      ios: {
        width: 1,
        backgroundColor: '#B0B0B0',
      },
      android: {
        width: 0,
      },
    }),
  },
  touch_modal: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        paddingRight: 8,
        minWidth: 64,
        height: 36,
      },
    }),
  },
  btn_modal_left: {
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: 18,
        color: '#2699FF',
        textAlign: 'center',
        borderRightWidth: 5,
        borderColor: '#B0B0B0',
        padding: 10,
        height: 48,
        maxHeight: 48,
      },
      android: {
        textAlign: 'right',
        color: '#009688',
        padding: 8,
      },
    }),
  },
  btn_modal_right: {
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: 18,
        color: '#2699FF',
        textAlign: 'center',
        padding: 10,
      },
      android: {
        textAlign: 'right',
        color: '#009688',
        padding: 8,
      },
    }),
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
  toggleImageStyle: {
    height: dynamicSize(50),
    width: dynamicSize(70),
    borderRadius: dynamicSize(1),
  },
  toggleClickImageStyle: {
    marginRight: dynamicSize(5),
    backgroundColor: 'transparent',
  },
});

export default styles;

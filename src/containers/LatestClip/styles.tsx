import {
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { BaseStyle, Colors } from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from '../../constants/dimensions';

interface Style {
  mainContainer: ViewStyle;
  headerStyle: any;
  flatListContainer: ViewStyle;
  videoContainer: any;
  videoContainerComment: any;
  arrowButton: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  imageComment: any;
  headerText: TextStyle;
  mediacomponentContainer: any;
  mediacomponentContainerComment: any;
  arrowPressed: ViewStyle;
  nameBoldText: TextStyle;
  nameText: TextStyle;
  TvViewStyle: ViewStyle;
  TvViewComment: ViewStyle;
  imageArrow: ImageStyle;
}
const styles = StyleSheet.create<Style>({
  imageArrow: { height: responsiveHeight(4.5) },
  mainContainer: {
    backgroundColor: Colors.GhostWhite,
  },

  headerStyle: {
    paddingHorizontal: responsiveWidth(2.3),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        height: responsiveHeight(5),
        paddingTop: responsiveHeight(1),
      },
      android: {
        marginTop: Platform.isTV ? responsiveHeight(-7) : null,
        height: Platform.isTV ? responsiveHeight(20) : responsiveHeight(5),
        paddingTop: Platform.isTV ? null : responsiveHeight(1),
      },
    }),
  },

  flatListContainer: {
    marginTop: responsiveHeight(2),
    backgroundColor: Colors.white,
  },

  videoContainer: {
    ...Platform.select({
      ios: {
        height: Platform.isTV ? responsiveHeight(15) : null,
        bottom: Platform.isTV ? responsiveWidth(2.5) : responsiveWidth(6.5),
      },
      android: {
        height: Platform.isTV ? responsiveHeight(20) : null,
        bottom: responsiveWidth(6.5),
      },
    }),
  },

  videoContainerComment: {
    ...Platform.select({
      ios: {
        height: Platform.isTV ? responsiveHeight(25) : null,
        bottom: Platform.isTV ? responsiveWidth(2.5) : responsiveWidth(6.5),
      },
      android: {
        height: Platform.isTV ? responsiveHeight(25) : null,
        bottom: Platform.isTV ? responsiveWidth(6.5) : responsiveWidth(6.5),
      },
    }),
  },

  arrowButton: {
    alignSelf: 'flex-end',
    zIndex: 2,
    ...Platform.select({
      ios: {
        top:
          BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
            ? responsiveHeight(1.5)
            : responsiveHeight(2),
      },
      android: {
        top: Platform.isTV ? -30 : responsiveHeight(1.5),
      },
    }),

    paddingRight: responsiveWidth(1.2),
  },
  imageContainer: {},
  image: {
    ...Platform.select({
      ios: {
        bottom: Platform.isTV ? responsiveWidth(2.5) : responsiveWidth(10.5),
      },
      android: {
        bottom: Platform.isTV ? responsiveWidth(8.5) : responsiveWidth(10.5),
      },
    }),
    height: Platform.isTV ? responsiveWidth(6) : responsiveWidth(16),
    width: Platform.isTV ? responsiveWidth(6) : responsiveWidth(16),

    borderRadius: responsiveWidth(8),
    borderWidth: 2,
    borderColor: Colors.white,
    alignSelf: 'center',
    zIndex: 2,
  },

  imageComment: {
    height: Platform.isTV ? responsiveWidth(6) : responsiveWidth(16),
    width: Platform.isTV ? responsiveWidth(6) : responsiveWidth(16),
    ...Platform.select({
      ios: {
        bottom: Platform.isTV ? null : responsiveWidth(10.5),
      },
      android: {
        bottom: Platform.isTV ? null : responsiveWidth(10.5),
      },
    }),

    borderRadius: responsiveWidth(8),
    borderWidth: 2,
    borderColor: Colors.white,
    alignSelf: 'center',
    zIndex: 2,
  },

  headerText: {
    fontSize: responsiveFontSize(1.5),
  },

  mediacomponentContainer: {
    ...Platform.select({
      ios: {
        bottom: Platform.isTV ? responsiveWidth(2.5) : null,
        marginBottom: responsiveHeight(3),
      },
      android: {
        bottom: Platform.isTV ? responsiveWidth(8.5) : null,
        marginBottom: Platform.isTV ? null : responsiveHeight(3),
      },
    }),
    marginHorizontal: responsiveWidth(3),
  },

  mediacomponentContainerComment: {
    ...Platform.select({
      ios: {
        bottom: Platform.isTV ? responsiveHeight(3) : null,
        marginBottom: Platform.isTV ? null : responsiveHeight(3),
      },
      android: {
        bottom: Platform.isTV ? responsiveWidth(8.5) : null,
        marginBottom: Platform.isTV ? null : responsiveHeight(3),
      },
    }),

    marginHorizontal: responsiveWidth(3),
  },
  arrowPressed: {
    zIndex: 2,
    width: '100%',
    backgroundColor: Colors.blackTransparent,
    alignSelf: 'stretch',
    height: Platform.isTV
      ? responsiveHeight(20)
      : BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
      ? responsiveHeight(25)
      : responsiveHeight(32),
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(2.5),
  },
  nameBoldText: {
    fontSize: responsiveFontSize(2),
    fontWeight:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight ? '300' : '500',
    color: Colors.white,
  },
  nameText: {
    fontSize:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight
        ? responsiveFontSize(1.5)
        : responsiveFontSize(2),
    fontWeight:
      BaseStyle.DEVICE_HEIGHT >= BaseStyle.iPhoneXheight ? '100' : '300',
    color: Colors.white,
    paddingTop: responsiveHeight(2),
  },
  TvViewStyle: {
    height: responsiveHeight(42),
    width: responsiveWidth(2),
    justifyContent: 'flex-start',
  },
  TvViewComment: {
    height: responsiveHeight(60),
    width: responsiveWidth(1),
    justifyContent: 'flex-start',
  },
});

export default styles;

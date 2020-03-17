import { StyleSheet, Platform, ViewStyle, TextStyle } from 'react-native';

// custom modules

import { BaseStyle, Colors } from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from '../../constants/dimensions';

const isDeviceWidth = BaseStyle.DEVICE_WIDTH < BaseStyle.DEVICE_HEIGHT;

const imageHeight = BaseStyle.DEVICE_HEIGHT / 3 - 20;

// styling for upcomingVideoScrren
interface Style {
  container: ViewStyle;
  centered: ViewStyle;
  imageContainer: ViewStyle;
  displayDayText: TextStyle;
  image: any;
  unTappedViewStyle: ViewStyle;
  unTappedTopView: ViewStyle;
  listHeader: ViewStyle;
  tappedTopView: ViewStyle;
  tappedRightIconView: ViewStyle;
  tappedTitleView: ViewStyle;
  unTappedPlayIcon: any;
  unTappedDropIcon: ViewStyle;
  unTappedTime: any;
  unTappedVideoTitle: any;
  unTappedBottomView: ViewStyle;
  unTappedBottomChildView: ViewStyle;
  textDate: TextStyle;
  selectedTextDate: TextStyle;
  textCalendarDateSelected: TextStyle;
  textTime: TextStyle;
  textCard: TextStyle;
  textLeftBottom: TextStyle;
  iconRightBottom: any;
  calenderView: ViewStyle;
  iconLeftTop: ViewStyle;
  iconRightTop: any;
  iconTime: ViewStyle;
  fabContainer: ViewStyle;
  calendarGridContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    height: '100%',
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: Platform.isTV ? 0 : (BaseStyle.DEVICE_HEIGHT / 100) * 0,
      },
    }),
  },
  centered: {
    alignItems: 'center',
    margin: 30,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  displayDayText: { fontWeight: 'bold', fontSize: responsiveFontSize(1.6) },
  image: {
    width: '100%',
    height: Platform.isTV
      ? BaseStyle.DEVICE_HEIGHT / 2 - 100
      : BaseStyle.DEVICE_HEIGHT / 3 - 20,
    maxWidth: Platform.isTV ? null : '100%',
    alignSelf: 'center',
  },
  unTappedViewStyle: { flex: 1, backgroundColor: '#00000050' },
  unTappedTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  listHeader: { backgroundColor: 'white' },
  tappedTopView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#00000090',
    alignItems: 'center',
  },
  tappedRightIconView: {
    flex: 1,
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(1.5),
  },
  tappedTitleView: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  unTappedPlayIcon: {
    width: isDeviceWidth ? responsiveWidth(7) : responsiveWidth(3),
    height: isDeviceWidth ? responsiveWidth(7) : responsiveWidth(3),
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    right: responsiveWidth(1),
  },
  unTappedDropIcon: {
    flex: 1,
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(1.5),
  },
  unTappedTime: {
    fontSize: responsiveFontSize(1.2),
    width: isDeviceWidth ? null : responsiveWidth(15),
    left: responsiveWidth(2),
    color: Colors.white,
  },
  unTappedVideoTitle: {
    fontSize: responsiveFontSize(1.4),
    width: isDeviceWidth ? null : responsiveWidth(14),
    left: responsiveWidth(2),
    color: Colors.white,
  },
  unTappedBottomView: {
    width: '100%',
    height: responsiveHeight(5),
    justifyContent: 'center',
    position: 'absolute',
    bottom: Platform.isTV ? responsiveWidth(5) : 0,
  },
  unTappedBottomChildView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDate: {
    fontSize: responsiveFontSize(1.6),
    padding: responsiveWidth(0.5),
    alignSelf: 'center',
    color: Colors.Black,
  },
  selectedTextDate: {
    fontSize: responsiveFontSize(1.6),
    padding: responsiveWidth(0.5),
    alignSelf: 'center',
    color: Colors.white,
  },
  textCalendarDateSelected: {
    fontSize: responsiveFontSize(1.2),
    padding: responsiveWidth(0.5),
    alignSelf: 'center',
    color: Colors.white,
  },
  textTime: {
    fontSize: responsiveFontSize(1.6),
    marginLeft: responsiveWidth(0.5),
    color: Colors.white,
  },
  textCard: {
    fontSize: responsiveFontSize(1.5),
    paddingLeft: 5,
    color: Colors.white,
  },
  textLeftBottom: {
    width: '70%',
    fontSize: responsiveFontSize(1.8),
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 42
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 9,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 35
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 9,
      },
    }),
    left: responsiveWidth(2),
    color: Colors.white,
  },
  iconRightBottom: {
    marginBottom: responsiveWidth(5),
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 39
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 13,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 30
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 13,
      },
    }),
    right: responsiveWidth(1),
  },
  calenderView: { alignItems: 'center', justifyContent: 'center' },

  iconLeftTop: {
    justifyContent: 'center',
    left: responsiveWidth(1),
    height: responsiveWidth(8),
    width: responsiveWidth(8),
  },
  iconRightTop: {
    alignSelf: 'flex-end',
  },
  iconTime: {
    alignSelf: 'flex-start',
    ...Platform.select({
      ios: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 39
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 11,
      },
      android: {
        top: Platform.isTV
          ? (BaseStyle.DEVICE_HEIGHT / 100) * 30
          : imageHeight - (BaseStyle.DEVICE_HEIGHT / 100) * 13,
      },
    }),
    right: responsiveWidth(1),
    height: responsiveWidth(1),
    width: responsiveWidth(1),
  },
  fabContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  calendarGridContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    height: isDeviceWidth ? responsiveWidth(11) : responsiveWidth(6.5),
  },
});

export default styles;

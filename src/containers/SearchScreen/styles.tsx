import {
  StyleSheet,
  Platform,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

// custom modules

import { BaseStyle, Colors } from '../../constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  dynamicSize,
} from '../../constants/dimensions';
import { FontWeights } from '../../theme';

// style interface of search
interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
  image: ImageStyle;
  imageContainer: ViewStyle;
  textLeftBottom: TextStyle;
  titleStyle: any;
  titleContainer: ViewStyle;
  searchFeildStyle: any;
  mainSearchContainer: ViewStyle;
  iconRightBottom: ImageStyle;
}
// styling  for searchScreen

const styles = StyleSheet.create<Style>({
  container: {
    // flex:1,
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 100,

    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: Platform.isTV ? 0 : (BaseStyle.DEVICE_HEIGHT / 100) * 0,
      },
    }),
  },
  imageContainer: {
    flex: 1,
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 15,
    borderWidth: 1,
  },
  imageStyle: {
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 6,
    width: (BaseStyle.DEVICE_WIDTH / 100) * 8,
    marginLeft: (BaseStyle.DEVICE_HEIGHT / 100) * 2,
    alignSelf: 'center',
  },
  image: {
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 15,
    width: (BaseStyle.DEVICE_WIDTH / 100) * 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleContainer: {
    flex: 6,
    backgroundColor: 'white',
  },
  textLeftBottom: {
    width: '80%',
    fontSize: responsiveFontSize(2.0),
    alignSelf: 'flex-start',
    color: Colors.Black,
    paddingLeft: (BaseStyle.DEVICE_WIDTH / 100) * 2,
  },
  titleStyle: {
    fontWeight: FontWeights.Semibold,
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  mainSearchContainer: {
    margin: dynamicSize(10),
    flexDirection: 'row',
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 6,
    width: BaseStyle.DEVICE_WIDTH - (BaseStyle.DEVICE_WIDTH / 100) * 40,
  },
  searchFeildStyle: {
    padding: dynamicSize(5),
    width: dynamicSize(100),
    color: 'white',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.0),
    paddingTop: (BaseStyle.DEVICE_HEIGHT / 100) * 1,
    paddingLeft: (BaseStyle.DEVICE_WIDTH / 100) * 3,
  },
  iconRightBottom: {
    alignSelf: 'center',
    right: responsiveWidth(2),
    height: Platform.isTV ? responsiveHeight(10) : responsiveHeight(40),
    width: Platform.isTV ? responsiveWidth(10) : responsiveWidth(12),
  },
});

export default styles;

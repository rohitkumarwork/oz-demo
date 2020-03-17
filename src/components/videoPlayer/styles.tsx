import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

// custom modules
import { BaseStyle, Colors } from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  dynamicSize,
} from '../../constants/dimensions';

interface Style {
  container: ViewStyle;
  controls: ViewStyle;
  descriptionText: TextStyle;
  duration: TextStyle;
  loaderSmallContainer: ViewStyle;
  loaderSmall: ViewStyle;
  playIconStyle: ImageStyle;
  fullHeightWidth: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    height: BaseStyle.DEVICE_WIDTH / (16 / 9),
    width: '100%',
  },
  controls: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 40,
    justifyContent: 'space-around',
    // position: 'absolute',
    width: '100%',
  },
  descriptionText: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  duration: {
    color: Colors.white,
  },
  loaderSmallContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: (BaseStyle.DEVICE_HEIGHT / 100) * 5,
    right: (BaseStyle.DEVICE_WIDTH / 100) * 5,
    left: (BaseStyle.DEVICE_WIDTH / 100) * 5,
    bottom: (BaseStyle.DEVICE_WIDTH / 100) * 5,
  },
  loaderSmall: {
    alignSelf: 'center',
  },
  playIconStyle: {
    margin: dynamicSize(10),
    height: responsiveHeight(3.8),
    width: responsiveWidth(3.8),
  },
  fullHeightWidth: {
    // height: Dimensions.get('window').height,
  },
});

export default styles;

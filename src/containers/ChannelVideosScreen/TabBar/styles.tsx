import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

// custom modules
import { BaseStyle, Colors } from '../../../constants';

//  interface style for tabBar
interface Style {
  container: ViewStyle;
  imageMainView: ViewStyle;
  tab: ViewStyle;
  imageStyle: ImageStyle;
}

//  common styling for tabBar
const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.Red,
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 8,
    paddingHorizontal: (BaseStyle.DEVICE_WIDTH / 100) * 2.5,
  },
  imageMainView: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageStyle: {
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 7,
    width: (BaseStyle.DEVICE_WIDTH / 100) * 10,
    resizeMode: 'contain',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (BaseStyle.DEVICE_WIDTH / 100) * 20,
  },
});

export default styles;

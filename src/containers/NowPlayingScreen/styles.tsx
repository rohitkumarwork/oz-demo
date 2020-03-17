import { StyleSheet, Platform, ViewStyle } from 'react-native';

// custom modules
import { BaseStyle } from '../../constants';

// interfacing style for now playing screen
interface Style {
  scrollViewStyle: ViewStyle;
  controlBar: ViewStyle;
  image: any;
  container: ViewStyle;
  imageContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: Platform.isTV ? 0 : 24,
      },
    }),
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: Platform.isTV
      ? BaseStyle.DEVICE_HEIGHT / 2 - 20
      : BaseStyle.DEVICE_HEIGHT / 3 - 20,
    maxWidth: Platform.isTV ? null : '100%',
    alignSelf: 'center',
  },
  controlBar: {
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollViewStyle: {
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 70,
  },
});

export default styles;

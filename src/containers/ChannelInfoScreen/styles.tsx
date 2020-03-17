import {
  StyleSheet,
  Platform,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import { BaseStyle, Colors } from '../../constants';

// interface  style for channelInfoScreen
interface Style {
  container: ViewStyle;
  nameContainer: ViewStyle;
  contentContainerStyle: ViewStyle;
  image: any;
  name: TextStyle;
  bottomInfo: TextStyle;
  bottomInfoss: TextStyle;
  bottomContainer: ViewStyle;
  memberContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: Platform.isTV
      ? BaseStyle.DEVICE_HEIGHT / 2 - 20
      : (BaseStyle.DEVICE_HEIGHT / 100) * 42,
    maxWidth: Platform.isTV ? null : '100%',
    alignSelf: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '800',
  },
  bottomInfo: {
    fontWeight: '800',
    alignSelf: 'center',
    color: Colors.Black,
  },
  bottomInfoss: {
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.Black,
    marginLeft: 5,
  },
  memberContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  nameContainer: {
    marginTop: (BaseStyle.DEVICE_HEIGHT / 100) * 6,
    marginHorizontal: (BaseStyle.DEVICE_WIDTH / 100) * 3,
    flexGrow: 1,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
});

export default styles;

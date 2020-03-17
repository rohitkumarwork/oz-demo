import { StyleSheet, ViewStyle } from 'react-native';

// custom modules
import { Colors } from '../../constants';

//  interface style for progerss bar
interface Style {
  modalBackground: ViewStyle;
  activityIndicatorWrapper: ViewStyle;
  mainStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000080', // oPACITY IS 80 AFTER 6 0'S
  },
  mainStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.white,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;

import { StyleSheet, ViewStyle } from 'react-native';

// custom modules
import { BaseStyle } from '../../../../constants';
import { responsiveHeight } from '../../../../constants/dimensions';

interface Style {
  container: ViewStyle;
  tab: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: responsiveHeight(2),
  },
  tab: {
    width: (BaseStyle.DEVICE_WIDTH / 100) * 5,
    height: (BaseStyle.DEVICE_HEIGHT / 100) * 0.5,
  },
});

export default styles;

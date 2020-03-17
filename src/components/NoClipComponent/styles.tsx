import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

// custom moduels
import {
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../constants/dimensions';

// interface style for noclipcomponent
interface Style {
  yourClips: ViewStyle;
  imageIntroView: ViewStyle;
  imageIntro: ImageStyle;
  become: TextStyle;
}

const styles = StyleSheet.create<Style>({
  imageIntroView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(8),
  },
  imageIntro: {
    height: responsiveHeight(5),
    width: responsiveWidth(7),
  },
  yourClips: {
    marginTop: responsiveHeight(1),
  },
  become: {
    marginHorizontal: responsiveWidth(17),
    marginTop: responsiveHeight(1),
    fontSize: getFontSize(12),
  },
});
export default styles;

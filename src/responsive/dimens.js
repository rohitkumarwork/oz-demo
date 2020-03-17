//  used to get dimensions from react native module
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

//  used to get responsive height in all mobile devices
export const responsiveHeight = h => height * (h / 100);

//  used to get responsive  width in all mobile devices
export const responsiveWidth = w => width * (w / 100);

//  used to get responsive font sizes in all mobile devices
export const responsiveFontSize = f =>
  Math.sqrt(height * height + width * width) * (f / 100);

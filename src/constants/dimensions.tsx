import { Dimensions } from 'react-native';

// get height and width of running device
const { height, width } = Dimensions.get('window');

// variable to get dynamic font Size of text according to running devices
const STANDARD_WIDTH = 375;
const DEVICE_HEIGHT = height;
const DEVICE_WIDTH = width;
const K = DEVICE_WIDTH / STANDARD_WIDTH;
const USE_FOR_BIGGER_SIZE = true;

// function used for managing dynamic spacing in height perspective of all mobile phones ,tabs ,android tv ,appletv, ipad
export const responsiveHeight = (h: number) => DEVICE_HEIGHT * (h / 100);

// function used for managing dynamic spacing in width perspective of all mobile phones ,tabs ,android tv ,appletv, ipad
export const responsiveWidth = (w: number) => DEVICE_WIDTH * (w / 100);

export const responsiveFontSize = (f: number) =>
  Math.sqrt(height * height + width * width) * (f / 100);

// function used for managing dynamic size  in all mobile phones
export function dynamicSize(size: number) {
  return K * size;
}

// function used for managing fontSize  in all mobile phones
export function getFontSize(size: number) {
  if (USE_FOR_BIGGER_SIZE || DEVICE_WIDTH < STANDARD_WIDTH) {
    const newSize = dynamicSize(size);
    return newSize;
  }
  return size;
}

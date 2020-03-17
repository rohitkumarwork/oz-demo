import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Colors } from '../../../../constants';

function ColorLuminance(hexno: string, lumno: number) {
  // validate hex string
  let hex = String(hexno).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const lum = lumno || 0;

  // convert to decimal and change luminosity
  let rgb = '#';
  let c;
  let i;
  for (i = 0; i < 3; i = i + 1) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += `00${c}`.substr(c.length);
  }

  return rgb;
}
const TabBar = ({ brandColor, goToPage, tabs, activeTab }: any) => (
  <View style={[styles.container, { backgroundColor: brandColor }]}>
    {tabs.map((tab: any, i: number) => (
      <TouchableOpacity
        key={tab}
        onPress={() => goToPage(i)}
        style={[
          styles.tab,
          {
            backgroundColor:
              activeTab === i ? Colors.white : ColorLuminance(brandColor, 0.5),
          },
        ]}
      />
    ))}
  </View>
);
TabBar.propTypes = {
  brandColor: PropTypes.any,
  goToPage: PropTypes.func,
  tabs: PropTypes.array,
};
export default TabBar;

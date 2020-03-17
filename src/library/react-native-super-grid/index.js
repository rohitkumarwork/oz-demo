/* eslint react/no-array-index-key: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, ViewPropTypes, FlatList } from 'react-native';
import { chunkArray } from './utils';
import SuperGridSectionList from './SuperGridSectionList';

class SuperGrid extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.onLayout = this.onLayout.bind(this);
    this.getDimensions = this.getDimensions.bind(this);
    this.state = this.getDimensions();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.itemDimension !== this.props.itemDimension) {
      this.setState({
        ...this.getDimensions(
          this.state.totalDimension,
          nextProps.itemDimension,
        ),
      });
    }
  }

  onLayout(e) {
    const { staticDimension, horizontal, onLayout } = this.props;
    if (!staticDimension) {
      const { width, height } = e.nativeEvent.layout || {};

      this.setState({
        ...this.getDimensions(horizontal ? height : width),
      });
    }

    // run onLayout callback if provided
    if (onLayout) {
      onLayout(e);
    }
  }

  getDimensions(lvDimension, itemDim) {
    const {
      itemWidth,
      spacing,
      fixed,
      staticDimension,
      horizontal,
    } = this.props;
    let itemDimension = itemDim || this.props.itemDimension;
    if (itemWidth) {
      itemDimension = itemWidth;
    }

    const dimension = horizontal ? 'height' : 'width';
    const totalDimension =
      lvDimension || staticDimension || Dimensions.get('window')[dimension];
    const itemTotalDimension = itemDimension + spacing;
    const availableDimension = totalDimension - spacing; // One spacing extra
    const itemsPerRow = Math.floor(availableDimension / itemTotalDimension);
    const containerDimension = availableDimension / itemsPerRow;

    return {
      containerDimension,
      fixed,
      itemDimension,
      itemsPerRow,
      spacing,
      totalDimension,
    };
  }

  renderVerticalRow(data) {
    const {
      itemDimension,
      spacing,
      containerDimension,
      fixed,
      itemsPerRow,
    } = this.state;
    const rowStyle = {
      flexDirection: 'column',
      paddingRight: spacing,
      paddingTop: spacing,
    };
    if (data.isLast) {
      rowStyle.marginRight = spacing;
    }
    const itemContainerStyle = {
      ...this.props.itemContainerStyle,
      height: containerDimension,
      justifyContent: 'center',
      paddingBottom: spacing,
    };
    let itemStyle = {};
    if (fixed) {
      itemStyle = {
        height: itemDimension,
        justifyContent: 'center',
      };
      delete itemContainerStyle.paddingBottom;
    }

    return (
      <View style={rowStyle}>
        {(data || []).map((item, i) => (
          <View key={`${data.key}_${i}`} style={itemContainerStyle}>
            <View style={itemStyle}>
              {this.props.renderItem(item, i + data.rowNumber * itemsPerRow)}
            </View>
          </View>
        ))}
      </View>
    );
  }

  renderHorizontalRow(data) {
    const {
      itemDimension,
      containerDimension,
      spacing,
      fixed,
      itemsPerRow,
    } = this.state;
    const rowStyle = {
      flexDirection: 'row',
      paddingBottom: spacing,
      paddingLeft: spacing,

    };
    if (data.isLast) {
      rowStyle.marginBottom = spacing;
    }
    const itemContainerStyle = {
      ...this.props.itemContainerStyle,
      flexDirection: 'column',
      justifyContent: 'center',
      paddingRight: spacing,
      width: containerDimension,
    };
    let itemStyle = {};
    if (fixed) {
      itemStyle = {
        alignSelf: 'center',
        width: itemDimension,
      };
    }

    return (
      <View style={rowStyle}>
        {(data || []).map((item, i) => (
          <View key={`${data.key}_${i}`} style={itemContainerStyle}>
            <View style={itemStyle}>
              {this.props.renderItem(item, i + data.rowNumber * itemsPerRow)}
            </View>
          </View>
        ))}
      </View>
    );
  }

  renderRow({ item }) {
    // item is array of items which go in one row
    const { horizontal } = this.props;
    if (horizontal) {
      return this.renderVerticalRow(item);
    }
    return this.renderHorizontalRow(item);
  }

  render() {
    const {
      items,
      style,
      spacing,
      fixed,
      itemDimension,
      renderItem,
      horizontal,
      onLayout,
      ...props
    } = this.props;
    const { itemsPerRow } = this.state;

    const chunked = chunkArray(items, itemsPerRow); // Splitting the data into rows

    // Adding metadata to these rows
    const rows = chunked.map((r, i) => {
      const keydRow = [...r];
      keydRow.key = `row_${i}`;
      keydRow.rowNumber = i; // Assigning a row number to each row to allow proper indexing later
      keydRow.isLast = chunked.length - 1 === i;
      return keydRow;
    });

    return (
      <FlatList
        ref={ref => {
          this.myRef = ref;
        }}
        data={rows}
        renderItem={this.renderRow}
        style={[
          {
            ...(horizontal
              ? { paddingLeft: spacing }
              : { paddingTop: spacing }),
          },
          style,
        ]}
        onLayout={this.onLayout}
        {...props}
        horizontal={horizontal}
      />
    );
  }
}

SuperGrid.propTypes = {
  fixed: PropTypes.bool,
  horizontal: PropTypes.bool,
  itemContainerStyle: ViewPropTypes.style,
  itemDimension: PropTypes.number,
  itemWidth: PropTypes.number, // for backward compatibility
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  onLayout: PropTypes.func,
  onRef: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  spacing: PropTypes.number,
  staticDimension: PropTypes.number,
  style: ViewPropTypes.style,
};

SuperGrid.defaultProps = {
  fixed: false,
  horizontal: false,
  itemContainerStyle: undefined,
  itemDimension: 120,
  itemWidth: null,
  spacing: 10,
  staticDimension: undefined,
  style: {},
};

export default SuperGrid;
export { SuperGridSectionList };

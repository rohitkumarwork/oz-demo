import React from 'react';
import { FlatList } from 'react-native';
import { chunkArray } from '../../library/react-native-super-grid/utils';

export default function MyFlatList(props: any) {
  const chunked = chunkArray(props.items, null);

  const rows = chunked.map((r: any, i: number) => {
    const keydRow = [...r];
    return keydRow;
  });

  return (
    <FlatList
      style={[
        {
          ...(props.horizontal
            ? { paddingLeft: props.spacing }
            : { paddingTop: props.spacing }),
        },
        props.style,
      ]}
      data={rows}
      renderItem={props.renderItem}
      {...props}
      scrollEnabled={props.scrollEnabled}
    />
  );
}

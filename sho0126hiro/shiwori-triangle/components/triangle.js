import * as React from 'react';

import { Text, View, StyleSheet, Image ,ART , AppRegistry} from 'react-native';

const {
  Surface,
  Shape,
  Path,
} = ART;

export default class Triangle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Surface width={100} height={100}>
          <Shape
            d={'M50 0 L 0 100 L 100 100 Z'}
            fill={'red'}
            strokeWidth={1}
          />
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('ARTSample', () => Triangle);

import React from 'react';
import { StyleSheet, Text, View ,Dimensions,AppRegistry } from 'react-native';

import { ART } from 'react-native';
import * as d3shape from 'd3-shape';
const { width } = Dimensions.get('window')
const {
    Surface,
    Group,
    Shape
  } = ART

const margin = -5;



const colors = [
    '#F44336', '#fff', '#673AB7', '#3F51B5',
    '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722'
]

export default class PieGraph extends React.Component {
  render() {
    var cmp = this.props.cmp;
    // 描画用データ
    const pieData = [
        { number: cmp, name: 'read' },
        { number: 100-cmp, name: 'mada' }
    ];
    // 円グラフを作成する
    var arcs = d3shape.pie().sort(null).value((item) => item.number)(pieData)
    const pieChart = { paths: [] }
    arcs.map((arc, index) => {
        const path = d3shape.arc().outerRadius(65).padAngle(.00).innerRadius(0)(arc)
        pieChart.paths.push({ path })
    })
    console.log(pieChart.paths);
    return (
        <View stye = {{flex:1}}>
            <Surface width={width/2} height={width/2.5}>
            <Group x={width / 4 -4} y={width / 5}>
            {
                pieChart.paths.map((item, index) =>
                (
                    <Shape
                    key={`pie_shape_${index}`}
                    fill={colors[index]}
                    stroke={colors[0]}
                    strokeWidth={3}
                    d={item.path}
                    />
                ))
            }
            </Group>
            </Surface>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

AppRegistry.registerComponent('d3example', () => d3example);
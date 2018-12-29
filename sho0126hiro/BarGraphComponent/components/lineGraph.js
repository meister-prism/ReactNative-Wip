import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {BarChart,LineChart,Grid , XAxis,YAxis} from 'react-native-svg-charts';

export default class BarGraph extends React.Component {
    render() {
        // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const data = [2,3,6,2,4,1,5,7,9,2,4,1];
        const contentInset = { top: 20, bottom: 20 }
        return (
            <View style={{ height:200 ,flexDirection: 'row'}}>
                <YAxis
                    data={ data }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize:10,
                    }}
                    numberOfTicks={10 }
                    formatLabel={ value => `${value}冊` }
                />
                <View style={{flex:1}}>
                    <LineChart
                        style={{ flex: 1 ,marginLeft : 10}}
                        data={ data }
                        gridMin={ 0 }
                        contentInset={contentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid/>
                    </LineChart>
                    
                    <XAxis
                        data={ data }
                        formatLabel={ (value, index) => index }
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                    />
                
                </View>
                
            </View>
        )
    }
}
{/*}
return (
    <View style={{ height:200,flexDirection: 'row'}}>
        <YAxis
            style={{marginTop:-10}}
            data={ data }
            contentInset={ contentInset }
            svg={{
                fill: 'grey',
                fontSize:10,
            }}
            numberOfTicks={10 }
            formatLabel={ value => `${value}冊` }
        />
        <View style={{flex:1,marginLeft : 10}}>
        
            <BarChart
                style={{ flex: 1 }}
                data={ data }
                gridMin={ 0 }
                contentInset={{ top: 10, bottom: 10 }}
                svg={ {fill}}
            >
                <Grid/>
            </BarChart>
            <XAxis
                style={{ marginHorizontal: 0 }}
                data={ data }
                formatLabel={ (value, index) => xaxisText[index] }
                contentInset={{ left: 13, right: 13 }}
                svg={{ fontSize: 10, fill: 'black' }}
            />
        </View>
    </View>
)
        */}
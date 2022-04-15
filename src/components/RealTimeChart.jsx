import React from "react"
import { generateDrinkStats } from '@nivo/generators'
import range from 'lodash/range'
import last from 'lodash/last'
import * as time from 'd3-time'
import { timeFormat } from 'd3-time-format'
import {Line, } from '@nivo/line';
const data = generateDrinkStats(18)
const commonProperties = {
    width: 500,
    height: 400,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    data,
    animate: true,
    enableSlices: 'x',
}
export default class RealTimeChart extends React.Component {
    constructor(props) {
        super(props)

        const date = new Date()
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)

        this.state = {
            dataA: range(100).map(i => ({
                x: time.timeMinute.offset(date, i * 30),
                y: 50 + Math.round(Math.random() * 2),
            })),
            
        }

        this.formatTime = timeFormat('%Y %b %d')
    }

    componentDidMount() {
        this.timer = setInterval(this.next, 100)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    next = () => {
        const dataA = this.state.dataA.slice(1)
        dataA.push({
            x: time.timeMinute.offset(last(dataA).x, 30),
            y: 50 + Math.round(Math.random() * 5),
        })
        

        this.setState({ dataA })
    }

    render() {
        const { dataA } = this.state

        return (
            <Line
                {...commonProperties}
                margin={{ top: 30, right: 50, bottom: 60, left: 50 }}
                data={[
                    { id: 'A', data: dataA },
                    
                ]}
                xScale={{ type: 'time', format: 'native' }}
                yScale={{ type: 'linear', max: 100 }}
                axisTop={{
                    format: '%H:%M',
                    tickValues: 'every 5 hours',
                }}
                axisBottom={{
                    format: '%H:%M',
                    tickValues: 'every 5 hours',
                    legendPosition: 'middle',
                    legendOffset: 46,
                }}
                axisRight={{}}
                enablePoints={false}
                enableGridX={true}
                curve="monotoneX"
                animate={false}
                motionStiffness={120}
                motionDamping={50}
                isInteractive={false}
                enableSlices={false}
                useMesh={true}
                theme={{
                    axis: { ticks: { text: { fontSize: 14 } } },
                    grid: { line: { stroke: '#ddd', strokeDasharray: '1 2' } },
                }}
            />
        )
    }
}
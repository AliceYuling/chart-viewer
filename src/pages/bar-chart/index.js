import React from 'react'
import BarChart from '../../components/d3/bar-chart.js'

class BarChartContainer extends React.Component {
  render() {
    const data = [
      {
        output: 6199.9,
        date: '2018-12'
      }, {
        output: 5543.0,
        date: '2018-11'
      },
      {
        output: 5330.2,
        date: '2018-10'
      },
      {
        output: 5483.1,
        date: '2018-9'
      },
      {
        output: 6404.9,
        date: '2018-8'
      },
      {
        output: 6400.2,
        date: '2018-7'
      },
      {
        output: 5550.6,
        date: '2018-6'
      },
      {
        output: 5443.3,
        date: '2018-5'
      },
      {
        output: 5107.8,
        date: '2018-4'
      },
      {
        output: 5283.4,
        date: '2018-3'
      }
    ]
    return (
      <div>
        <BarChart data={data} />
      </div>
    )
  }
}

export default BarChartContainer

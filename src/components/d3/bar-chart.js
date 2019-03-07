import React from 'react'
import * as d3 from 'd3'

class BarChart extends React.Component {
  componentDidMount() {
    const data = this.props.data
    const containerWidth = this.barChart.parentElement.offsetWidth
    const margin = { top: 40, right: 64, bottom: 80, left: 64}
    const width = containerWidth - margin.left - margin.right // 计算宽度
    const height = 720 - margin.top -margin.bottom // 计算高度
    const x = d3.scaleBand()
                  .range([0, width])
                  .padding(0.1)
                  .domain(data.map(function(d) {return d.date})) // x轴
    const y = d3.scaleLinear()
                  .range([0, height])
                  .domain([d3.max(data, d=>d.output), 0]) // y轴
    const count = 13
    const steps = d3.ticks(0, d3.max(data, d=>d.output), count - 1)
    // 给container设置宽高
    const chart = d3.select(this.barChart)
      .attr('width', containerWidth)
      .attr('height', height + margin.top + margin.bottom)

    const g = chart.append('g')
              .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // 设置背景横条颜色的函数
    const bgColor = function(d) {
      const index = steps.indexOf(d)
      return index % 2 ? '#ccc' : '#ddd'
    }
    // x轴
    g.append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    // y轴
    g.append('g')
      .attr('class', 'axis y-axis')
      .call(d3.axisLeft(y))

    // 绘制背景横条
    g.selectAll('.cross-strip')
      .data(steps)
      .enter()
      .append('rect')
      .attr('class', 'cross-strip')
      .attr('fill', d => bgColor(d))
      .attr('stroke', 'none')
      .attr('stroke-width', 0)
      .attr('x', 1)
      .attr('y', d => y(d) - height/count)
      .attr('height', (d, i) => (y(steps[i]) - y(steps[i + 1])))
      .attr('width', width)

    // 绘制柱状图
    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('fill', '#AB82FF')
      .attr('x', d => x(d.date))
      .attr('y', d => y(d.output))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.output))

    // 添加柱状图上的数据
    g.selectAll('bar-text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d.output)
      .attr('text-anchor', 'middle')
      .attr('x', d => x(d.date))
      .attr('y', d => y(d.output))
      .attr('transform', 'translate(' + x.bandwidth()/2 + ',' + 20 + ')')
      .attr('fill', '#333')

    // 添加label
    chart.append('text')
          .attr('class', 'label x-label')
          .attr('x', width)
          .attr('y', height)
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
          .text('月份')

    chart.append('text')
          .attr('class', 'label y-label')
          .attr('x', 0)
          .attr('y', 0)
          .attr('transform', 'translate(' + 0 + ',' + margin.top + ')')
          .text('发电量（亿千瓦时）')
    
    // 添加标题
    chart.append('text')
          .attr('class', 'label y-label')
          .attr('text-anchor', 'middle')
          .attr('x', containerWidth/2)
          .attr('y', margin.top/2)
          .text('2018年国家发电量统计数据')
  }

  render() {
    return (
      <div className="bar-chart-container">
        <svg ref={compInstance=>{this.barChart=compInstance}}></svg>
      </div>
    )
  }
}

export default BarChart
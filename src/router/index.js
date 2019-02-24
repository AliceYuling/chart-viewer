import React from 'react'
import { Route, Switch } from 'react-router-dom'
// components
import Home from '../pages/home'
import BarChart from '../components/d3/bar-chart'
import LineChart from '../components/d3/line-chart'
import SvgIcon from '../components/svg/svg-icon'
import SvgMap from '../components/svg/svg-map'

export const MainRoute = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/bar-chart' component={BarChart}></Route>
    <Route exact path='/line-chart' component={LineChart}></Route>
    <Route exact path='/svg-icon' component={SvgIcon}></Route>
    <Route exact path='/svg-map' component={SvgMap}></Route>
  </Switch>
)
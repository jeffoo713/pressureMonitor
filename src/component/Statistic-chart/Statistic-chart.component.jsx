import React from 'react';

import { BarChart } from 'react-easy-chart';

const StatChart = ({ hypo, nor, pre, st1, st2 }) => (
  <div style={{ marginTop: '30px'}}>
    <BarChart 
      axisLabels={{x: 'Category', y: 'Percentage'}}
      axes
      data={[
      {x: 'Hypotension', y: `${hypo}`, color:'#7a796a'}, 
      {x: 'Normal', y: `${nor}`, color:'#1a83b8'}, 
      {x: 'Prehypertension', y: `${pre}`, color:'#11960c'}, 
      {x: 'Stage1 Hypertension', y: `${st1}`, color:'#ffe203'},
      {x: 'Stage2 Hypertension', y: `${st2}`, color:'#d92b2b'}
      ]}
      yDomainRange={[0, 100]} 
      height={350}
      width={650}
    />
  </div>
)

export default StatChart;
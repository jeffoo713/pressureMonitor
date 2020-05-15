import React from 'react';

import { BarChart } from 'react-easy-chart';

const StatChart = ({ hypoPerc, norPerc, prePerc, st1Perc, st2Perc }) => (
  <div style={{ marginTop: '30px'}}>
    <BarChart 
      axisLabels={{x: 'Category', y: 'Percentage'}}
      axes
      data={[
      {x: 'Hypotension', y: `${hypoPerc}`*100, color:'#7a796a'}, 
      {x: 'Normal', y: `${norPerc}`*100, color:'#1a83b8'}, 
      {x: 'Prehypertension', y: `${prePerc}`*100, color:'#11960c'}, 
      {x: 'Stage1 Hypertension', y: `${st1Perc}`*100, color:'#ffe203'},
      {x: 'Stage2 Hypertension', y: `${st2Perc}`*100, color:'#d92b2b'}
      ]}
      yDomainRange={[0, 100]} 
      height={350}
      width={650}
    />
  </div>
)

export default StatChart;
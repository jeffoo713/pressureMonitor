import React from 'react';

import Container from '../../Container/Container.component';
import MeasurementGauge from '../../Gauge/Gauge.component';

import { BarChart } from 'react-easy-chart';

class StatisticsPage extends React.Component {
  constructor() {
    super()

    this.state = { 
      sys:136, 
      dia: 87, 
      bpm: 70 
    }
  }
  render() {
    return (
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
          <MeasurementGauge value={this.state.sys} label='AVG.SYS' color={'#FF6384'} />
          <MeasurementGauge value={this.state.dia} label='AVG.DIA' color={'#36A2EB'} />
          <MeasurementGauge value={this.state.bpm} label='AVG.BPM' color={'#FFCE56'} />
        </div>
        <div>
          <BarChart 
            axisLabels={{x: 'Category', y: 'Percentage'}}
            axes
            data={[
            {x: 'Hypotension', y: '23', color:'#7a796a'}, 
            {x: 'Normal', y: '20', color:'#1a83b8'}, 
            {x: 'Prehypertension', y: '50', color:'#11960c'}, 
            {x: 'Stage1 Hypertension', y: '20', color:'#ffe203'},
            {x: 'Stage2 Hypertension', y: '10', color:'#d92b2b'}
            ]}
            yDomainRange={[0, 100]} 
            height={350}
            width={650}
            barWidth={20}
          />
        </div>
      </Container>
    )
  }
}

export default StatisticsPage;
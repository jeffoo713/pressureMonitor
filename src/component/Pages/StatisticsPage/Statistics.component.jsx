import React from 'react';

import Container from '../../Container/Container.component';

import MeasurementGauge from '../../Gauge/Gauge.component';

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
      </Container>
    )
  }
}

export default StatisticsPage;
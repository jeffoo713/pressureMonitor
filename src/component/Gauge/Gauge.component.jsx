import React from 'react';

import Gauge from 'react-svg-gauge';

const MeasurementGauge = ({value, label, color }) => (
    <Gauge value={value} label={label} color={color} max={200} min={0} width={170} height={130} />
  );

export default MeasurementGauge;
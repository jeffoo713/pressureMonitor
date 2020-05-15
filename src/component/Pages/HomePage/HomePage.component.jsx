import React from 'react';
import { withRouter } from 'react-router-dom';

import Container from '../../Container/Container.component';
import Chart from '../../Chart/Chart.component';
import CustomButton from '../../Button/Button.component';

const HomePage = ({ history, match }) => {
  const toAddPage = () => ( history.push(`${match.url}add`))
  return(
  <Container>
    <Chart/>
    <div style={{ marginTop: '20px'}}>
      <CustomButton handleClick={toAddPage} >START TO ADD</CustomButton>
    </div>
  </Container>
)};

export default withRouter(HomePage);
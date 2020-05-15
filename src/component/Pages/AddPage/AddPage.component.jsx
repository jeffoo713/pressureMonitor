import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import Bar from '../../Bar/Bar.component';
import InputLabels from '../../Input-labels/Input-labels.component';
import Chart from '../../Chart/Chart.component';
import CalendarIcon from '../../Calendar/Calendar-icon.component';
import CalendarForm from '../../Calendar/Calendar.component';
import Container from '../../Container/Container.component';
import CustomButton from '../../Button/Button.component';

import { Col, Form } from 'react-bootstrap';

import { returnItem } from '../../../redux/data/data.utils';

import { addItem, calculateStats } from '../../../redux/data/data.actions';
import { toggleCalendar } from '../../../redux/calendar/calendar.actions';
import { selectHiddenCalendar } from '../../../redux/calendar/calendar.selectors';
import { selectDataArr } from '../../../redux/data/data.selectors';

class AddPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sys: '',
      dia: '',
      bpm: '',
      date: undefined
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { sys, dia, bpm, date } = this.state;
    const itemToAdd = returnItem({ sys, dia, bpm, date })

    this.props.addItem(itemToAdd);
    this.props.calculateStats(this.props.dataArr);

    this.setState({
      sys: '',
      dia: '',
      bpm: '',
      date: undefined
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    if (value >= 0 && value <= 200 ) {
      this.setState({ [name]: value });
    } else {
      alert('Data should be between 0 and 200')
    }
  }

  dateChange = inputDate => {
    this.setState({ date: inputDate });
    this.props.toggleCalendar();
  }

  render() {
    const { toggleCalendar, hiddenCalendar } = this.props;
    return (
      <div style={{ height: '100%' }} >
        <Bar />
        <Container>
          <div
            className="bg-danger col-12"
            style={{
              paddingTop: '30px',
              paddingBottom: '20px',
              marginBottom: '50px',
              borderRadius: '7px'
            }}
          >
            <InputLabels />
            <Form.Group
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingTop: '20px'
              }}
            >
              <Col>
                <Form.Control
                  size="lg"
                  placeholder="SYS"
                  type="number"
                  name='sys'
                  value={this.state.sys}
                  onChange={this.handleChange}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  size="lg"
                  placeholder="DIA"
                  type="number"
                  name='dia'
                  value={this.state.dia}
                  onChange={this.handleChange}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  size="lg"
                  placeholder="BPM"
                  type="number"
                  name='bpm'
                  value={this.state.bpm}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Form.Group>
            <CalendarIcon toggleCalendar={toggleCalendar} />
            { hiddenCalendar? null
              : <div style={{ 
              width: '300px', 
              position: 'absolute', 
              zIndex: '9999' 
              }}>
              <CalendarForm dateChange={this.dateChange} value={this.state.date} />
              </div> 
            }
            <CustomButton handleClick={this.handleSubmit} >
              ADD
            </CustomButton>
          </div>
          <Chart />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  hiddenCalendar: selectHiddenCalendar,
  dataArr: selectDataArr
});

const mapDispachToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  calculateStats: dataArr => dispatch(calculateStats(dataArr)),
  toggleCalendar: () => dispatch(toggleCalendar())
})

export default connect(mapStateToProps, mapDispachToProps)(AddPage);
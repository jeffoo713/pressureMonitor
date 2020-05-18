import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import InputLabels from '../../Input-labels/Input-labels.component';
import Chart from '../../Chart/Chart.component';
import CalendarIcon from '../../Calendar/Calendar-icon.component';
import CalendarForm from '../../Calendar/Calendar.component';
import Container from '../../Container/Container.component';
import CustomButton from '../../Button/Button.component';
import InputField from '../../Input-field/Input-field.component';

import Col from 'react-bootstrap/Col';

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
      <div>
        <Container>
          <div
            style={{
              paddingTop: '30px',
              paddingBottom: '20px',
              marginBottom: '50px',
              border: 'solid 1px'
            }}
          >
            <InputLabels />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingTop: '20px'
              }}
            >
              <Col>
                <InputField
                  placeholder="SYS"
                  type="number"
                  name='sys'
                  value={this.state.sys}
                  handleChange={this.handleChange}
                />
              </Col>
              <Col>
                <InputField
                  placeholder="DIA"
                  type="number"
                  name='dia'
                  value={this.state.dia}
                  handleChange={this.handleChange}
                />
              </Col>
              <Col>
                <InputField
                  placeholder="BPM"
                  type="number"
                  name='bpm'
                  value={this.state.bpm}
                  handleChange={this.handleChange}
                />
              </Col>
            </div>
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
            <CustomButton 
              variant="primary"
              className="col-8 mx-auto"
              handleClick={this.handleSubmit} 
            >
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
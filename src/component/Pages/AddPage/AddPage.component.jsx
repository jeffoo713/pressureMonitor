import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import Bar from '../../Bar/Bar.component';
import InputLabels from '../../Input-labels/Input-labels.component';
import Chart from '../../Chart/Chart.component';

import { Jumbotron, Button, Col, Form } from 'react-bootstrap';
import './AddPage.styles.scss';
import 'react-calendar/dist/Calendar.css';

import CalendarIcon from '../../Calendar/Calendar-icon';
import CalendarForm from '../../Calendar/Calendar.component';
class AddPage extends React.Component {
  constructor() {
    super()

    this.state = {
      sys: '',
      dia: '',
      bpm: '',
      date: undefined,
      data: [],
      calendarHidden: true
    }
  }

  selectMonth = (month) => {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthData = monthArr[month]
    return monthData
  }

  storeData = ({ sys, dia, bpm }) => {
    const id = uuidv4();
    const defautDate = new Date()
    const dateObj = this.state.date === undefined? defautDate: this.state.date ;
    const date = dateObj.getDate()
    const month = this.selectMonth(dateObj.getMonth())
    const year = dateObj.getYear()+1900
    
    const inputDate = `${month} ${date},${year}`
    console.log(date, month, year)
    this.state.data.push({ id, sys, dia, bpm, inputDate });

    this.setState({
        sys: '',
        dia: '',
        bpm: '',
        date: undefined
    }, () => console.log(this.state));
  }

  handleSubmit = event => {
    event.preventDefault();
    const { sys, dia, bpm } = this.state;
    //function to add the data
    this.storeData({ sys, dia, bpm });
  }

  handleChange = event => {
    const { name, value } = event.target;
    if (value > 0) {
      this.setState({ [name]: value });
    }
  }

  toggleCalendar = () => {
    this.setState({ calendarHidden: !this.state.calendarHidden })
  }

  dateChange = inputDate => {
    this.setState({ date: inputDate });
    this.toggleCalendar();
  }

  render() {
    const { calendarHidden } = this.state
    return (
      <div style={{ height: '100%' }} >
        <Bar />
        <Jumbotron
          className='col-8 mx-auto'
          style={{ 
            padding: '40px, 50px',  
            paddingTop: '40px',
            marginTop: '30px' 
          }}
        >
          <div
            className="bg-danger col-12"
            style={{
              paddingTop: '30px',
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
            <CalendarIcon toggleCalendar={this.toggleCalendar} />
            { calendarHidden? null
              : <div style={{ 
              width: '300px', 
              position: 'absolute', 
              zIndex: '9999' 
              }}>
              <CalendarForm dateChange={this.dateChange} value={this.state.date} />
              </div> 
            }
            <Button
                variant="primary"
                className="col-8 mx-auto"
                style={{ marginTop: '10px', marginBottom: '20px' }}
                onClick={this.handleSubmit}
            >
              ADD
            </Button>
          </div>
          <Chart />
        </Jumbotron>
      </div>
    )
  }
}

export default AddPage;
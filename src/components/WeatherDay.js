import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {
  render() {
    return (
      <Card>
        <ListGroup>
          <ListGroup.Item>
            date:{this.props.day.date}
          </ListGroup.Item>
          <ListGroup.Item>
            description:{this.props.day.description}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default WeatherDay;
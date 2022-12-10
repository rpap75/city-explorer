import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class MovieDay extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <Card>
        <ListGroup>
          <ListGroup.Item>
            movie:{this.props.data.movie.title}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default MovieDay;
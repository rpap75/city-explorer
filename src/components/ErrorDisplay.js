import React from "react";
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class ErrorDisplay extends React.Component {
  render() {
    return (

      this.props.errorMsg ?
        <>
          <Alert variant="danger">
            There Was An Error
            <Button onClick={this.props.handleError}>
              Thanks Go Away
            </Button>
          </Alert>
        </>
        : null

    )
  }
}

export default ErrorDisplay;
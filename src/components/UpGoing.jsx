import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class UpGoing extends Component {
  render() {
    return (
      <p>
        <FormattedMessage id={"UpGoing.hello"} defaultMessage={"hello"} />
      </p>
    );
  }
}

export default UpGoing;

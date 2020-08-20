import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>
            {this.props.jobName}
          </h4>
          <h4>
            {this.props.profile} {this.props.profileName}
          </h4>
          <hr
            style={{ borderTop: "3px solid #833fb2", width: "50%" }}
          />
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div className="layout">
        <Grid className="landing-grid">
          <Cell  col={12}>
            <img
              src="https://ingsolar.cl/wp-content/uploads/2020/02/img_avatar-png-300x300.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React
                Native | NodeJS
              </p>
              <div className="social-links">
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  <i
                    rel="noopener noreferrer"
                    className="fab fa-google-plus-g"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  <i
                    rel="noopener noreferrer"
                    className="fab fa-github-alt"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  <i
                    rel="noopener noreferrer"
                    className="fab fa-free-code-camp"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  <i
                    rel="noopener noreferrer"
                    className="fab fa-youtube-square"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;

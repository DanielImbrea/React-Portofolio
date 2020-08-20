import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card
            shadow={5}
            style={{
              minWidth: "450",
              margin: "auto",
              borderRadius: "20px",
              padding: "11px",
            }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "276px",

                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ad voluptatibus vitae illo reprehenderit libero ex
              officiis ducimus facere dicta nobis?
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            shadow={5}
            style={{
              minWidth: "450",
              margin: "auto",
              borderRadius: "20px",
              padding: "11px",
            }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "276px",

                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ad voluptatibus vitae illo reprehenderit libero ex
              officiis ducimus facere dicta nobis?
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            shadow={5}
            style={{
              minWidth: "450",
              margin: "auto",
              borderRadius: "20px",
              padding: "11px",
            }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "276px",

                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
              }}
            >
             React Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ad voluptatibus vitae illo reprehenderit libero ex
              officiis ducimus facere dicta nobis?
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is FlexBox</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Bootstrap</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>FlexBox</Tab>
          <Tab>Bootstrap</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
} from "react-mdl";
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Daniel Imbrea</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "2em",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium enim laboriosam minus impedit dolor illum
              unde tempore fugit maxime eos. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Cum, accusamus!.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis eaque fuga autem odit nam debitis voluptas libero, quam dignissimos.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton",   }}
                  >
                    <i
                      className="fa fa-phone-square"
                      aria-hidden="true"
                    />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i
                      className="fa fa-fax"
                      aria-hidden="true"
                    />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                    />
                    daniel_imbrea@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i
                      className="fa fa-skype"
                      aria-hidden="true"
                    />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import './App.css';
import Main from './Components/Main'
import { Link } from 'react-router-dom'
class App extends Component {
  render() {


  return (
    <div>
      <Layout fixedHeader>
        <Header
          className="header-color"
          title={
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/home"
            >
              MyPortofolio
            </Link>
          }
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/home"
            >
              MyPortofolio
            </Link>
          }
        >
    
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          {/* <h1> randez componenta prin main pe fiecare pagina</h1>     */}
          <Main />
        </Content>
      </Layout>
    </div>
  );
}
}
export default App;

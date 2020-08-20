import React from 'react';
import { Switch, Route} from 'react-router-dom'
import About from './Aboutme'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'
import Landing from './Landingpage'
const Main = () => (
  <Switch>
    <Route path="/home" component={Landing} />
    <Route path="/aboutme" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);
export default Main
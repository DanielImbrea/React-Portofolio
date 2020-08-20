import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './Experience'
import Skills from './Skills'
class Resume extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Daniel Imbrea</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr
              style={{ borderTop: "3px solid #833fb2", width: "50%" }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem mollitia totam iusto repellendus ad
              deserunt reprehenderit consequatur eveniet praesentium
              omnis nam similique, odio in nostrum illo possimus natus
              explicabo blanditiis? Modi eligendi at fuga eius non qui
              rerum dolorem quia!
            </p>
            <hr
              style={{ borderTop: "3px solid #833fb2", width: "50%" }}
            />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>0755189998</p>
            <h5>Email</h5>
            <p>DanielImbrea1991@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr
              style={{ borderTop: "3px solid #833fb2", width: "50%" }}
            />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName={"Technical High School Haralamb Vasiliu"}
              profile={"Profile:"}
              profileName={"Economic"}
              schoolDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error incidunt quaerat perspiciatis fuga nihil reprehenderit rem corporis veniam quia?"
              }
            />

            <Education
              startYear={2018}
              endYear={2022}
              schoolName={
                "Faculty of Electronics, Telecommunications & Information Technology"
              }
              profile={"Profile:"}
              profileName="Telecomunications"
              schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error incidunt quaerat perspiciatis fuga nihil reprehenderit rem corporis veniam quia?"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Internship"
              jobDescription="HTML, CSS , BOOTSTRAP, JQUERY, JAVASCRIPT, RESPONSIVE, FLEXBOX"
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Internship"
              jobDescription="HTML, CSS , PHP ENTRY LEVEL, JAVASCRIPT, RESPONSIVE, FLEXBOX, SASS"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="JavaScript" progress={65} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="NodeJS" progress={40} />
            <Skills skill="React" progress={40} />
        
          </Cell>
        </Grid>
      </div>
    );
  }

}

export default Resume;
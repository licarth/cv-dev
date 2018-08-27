import React, { Component } from 'react';
import './CV.css';
import airbusImage from './pfd.png'
import planeur from './planeur.svg'
import tools from './tools.svg'
import education from './education.svg'
import sports from './sports.svg'
import cc from './cc.svg'
import cloud from './cloud.svg'
import uk from './uk.svg'
import teamLogo from './team.svg'
import Gauge from 'a320-ecam-gauges'
import _ from 'lodash';
import { techLogos } from './svgLogos'
import profilePic from './profilePic.png'
import photoIdentite from './photo_identite.jpg';
import PersonalProjects from './PersonalProjects'
import { RoundLogo, LogoLeft } from './LogoLeft'

const A = (props) => {
  return <span className="a320" style={props.style}>{props.txt}</span>;
}

const Aero = () => {
  return <div id="aero" class="section aero">
    <LogoLeft img={planeur} />
    <div className="titreSection">Aeronautics</div>
    <div class="gridcontainer content">
      <div className="title">
        <b>Ultralight</b>
      </div>
      <div>Solo Ultralight flights - 15 hours - Theoritical Instructor License </div>
      <div className="title">
        <b>Glider</b>
      </div>
      <div>Duo flights - 7 flight hours</div>
    </div>
  </div>
}

const XpItem = ({ yearStart, yearEnd, title, company, location, items, technologies, team }) => {
  return <div className="xpItem">
    <div className="xpSection xpTitle">
      <b>
        <span class="a320">{yearStart} {yearEnd ? "> " : ""}{yearEnd}</span> - {title} - {company}, {location}</b>
    </div>
    {!_.isEmpty(team) ?
      <div className="xpSection xpContent xpTeam">
        <RoundLogo img={teamLogo} size={"60%"} className="techToolsLogo" />
        <p style={{ fontWeight: "bold" }}>{team}</p>
      </div>
      : ""}
    {!_.isEmpty(items) ?
      <div className="xpSection xpContent xpDetails">
        {_.map(items, i => <p>{i}</p>)}
        {/* {items} */}
      </div>
      : ""}
    {!_.isEmpty(technologies) ?
      <div className="xpSection xpTechnologies">
        <RoundLogo img={tools} size={"60%"} className="techToolsLogo" />
        <div className="techLogos">
          {_.map(technologies, t => <div className="logo">{techLogos[t]}</div>)}
        </div>
      </div>
      : ""}
  </div >
}

const ProfesionnalExperience = () => {
  return <div id="experience" class="section experience">
    <LogoLeft img={cloud} />
    <div className="titreSection">Software Engineering</div>
    <div className="content">
      <XpItem {...{
        yearStart: "2018",
        title: "2 months - Freelance Software Engineer",
        team: "DevOps - 2 months",
        company: "Opla.ai",
        location: "Remote",
        items: [
          "Designed and implemented their CI/CD pipeline.",
          "Moved to a single-repo approach.",
          "Drove the adoption of Kubernetes.",
          "e2e testing with Cypress.",
        ],
        technologies: [
          "node",
          "docker",
          "js",
          "cypress",
          // "react",
          "k8s",
          "gcp",
          "circleci",
        ]
      }} />
      <XpItem {...{
        yearStart: "2017",
        title: "Software Engineer",
        team: "Coverage Team - Fast Integrations Project",
        company: "GoEuro GmbH",
        location: "Berlin",
        items: [
          "Fast-paced, small interdisciplinary team of 5 people",
          "Developed a Node.js set of microservices to maintain inventory and bookings of small bus companies",
          "PDF ticket emission, with various PNRs, QR codes or barcodes",
          "Integrated more than 15 bus companies in 2 months",
        ],
        technologies: [
          "node",
          "docker",
          "js",
          // "react",
          "k8s",
          "gcp",
        ]
      }} />
      <XpItem {...{
        yearStart: 2016,
        yearEnd: 2017,
        title: "Software Engineer",
        team: "Search Core",
        company: "GoEuro GmbH",
        location: "Berlin",
        items: [
          "Built a new version of the search engine.",
          "Introduced first Docker services at GoEuro",
        ],
        technologies: [
          "node",
          "docker",
          "js",
          "gcp",
        ]
      }} />
      <XpItem {...{
        yearStart: 2015,
        yearEnd: 2016,
        title: "Software Engineer",
        team: "Search Engine Optimization",
        company: "GoEuro GmbH",
        location: "Berlin",
        items: [
          "Built a SEO platform for the website's landing pages",
          "Server-side HTML generation",
          "~10 million landing pages with rich data from user searches (prices, itineraries)",
          "Crawled at 50 QPS by search engines - 100 ms latency",
        ],
        technologies: [
          "java",
          "gcp",
        ]
      }} />
      <XpItem {...{
        yearStart: 2014,
        yearEnd: 2015,
        title: "Software Engineer",
        team: "Provider Integration Team",
        company: "GoEuro GmbH",
        location: "Berlin",
        items: [
          "Implementing connectors to 3rd party APIs (train and bus providers)",
          "Screen scraping",
        ],
        technologies: [
          "java",
          "gcp",
        ]
      }} />
      <XpItem {...{
        yearStart: 2012,
        title: "Intern Software Engineer",
        company: "Google",
        location: "Madrid",
        items: [
        ]
      }} />
      <XpItem {...{
        yearStart: 2012,
        title: "Intern Software Engineer",
        company: "Squadmail",
        location: "Berlin",
        items: [
        ]
      }} />
    </div>
  </div >
}

const EducationItem = ({ yearEnd, desc }) => {
  return [<div className="title">
    <b>
      <span class="a320">{yearEnd}</span>
    </b>
  </div>,
  <div>
    {desc}
  </div>
  ]
}

const Education = () => {
  return <div id="education" class="section education">
    <LogoLeft img={education} />
    <div className="titreSection">Education</div>
    <div class="gridcontainer content" >
      <EducationItem {...{
        yearEnd: 2014,
        desc: "Supélec, Gif-sur-Yvette. Master of Science in Engineering."
      }} />
      <EducationItem {...{
        yearEnd: 2012,
        desc: "Exchange semester with ESCP Berlin.",
      }} />
      <EducationItem {...{
        yearEnd: 2010,
        desc: "Lycée Sainte-Geneviève, Versailles. Classes préparatoires PCSI – PC*."
      }} />
      <EducationItem {...{
        yearEnd: 2007,
        desc: "Baccalauréat, with honors."
      }} />
    </div>
  </div>
}

const Languages = () => {
  return <div id="languages" class="section languages">
    <LogoLeft img={uk} />
    <div className="titreSection">Languages</div>
    <div class="gridcontainer content" style={{ gridTemplateColumns: `1fr 7fr 2fr` }}>
      <div>English</div>
      <div>
        <span class="a320 b">C2</span> - 5 years of profesionnal experience working in English
                <br></br>
        <b>TOEIC</b> <span class="a320 b"> 990/990 </span> Listening and Reading - 28/02/2018
                <br></br>
      </div>
      <div>
        Spanish
                <span class="a320 b"> B1</span>
        <br></br>
        <br></br> German
                <span class="a320 b"> A2</span>
      </div>
    </div>
  </div>
}

const Other = () => {
  return <div id="others" class="section others">
    <LogoLeft img={sports} size='70%' />
    <div className="titreSection">Other Activities</div>
    <div class="gridcontainer content" >
      <div className="title">
        <b>Societies</b>
      </div>
      <div className="title">
        Supélec Sports assiciation - Vice-President - 2012
        <br></br>
        Vice president of the “​ Bureau des Sports​ ” at Supélec, a committee of 12 students which is in
          charge of a 400-member sports association that allow students of the school to practice 20
          different sports and that organizes every year a sports tournament which attracts more than
          2000​ ​ students​ ​ from​ ​ French​ ​ universities.
            I developed the web-based tournament subscription & management application (managing
            2600​ ​ subscriptions)
      </div>
      <div className="title">
        <b>Sports</b>
      </div>
      <div>Ski - Roller - Tennis - Kitesurf</div>

      <div className="title">
        <b>Tutoring</b>
      </div>
      <div>PédagogiePlus, Gif-sur-Yvette - Tutoring high school students in Mathematics, Physics and
Chemistry. Evaluating learners’ weaknesses and preparing suitable material adapted to their
needs.​ ​ (Sept.-​ ​ July​ ​ 2010)</div>
    </div>
  </div>
}

const Credits = () => {
  return <div id="credits" class="section credits">
    <LogoLeft img={cc} size='70%' />
    <div className="titreSection">Credits</div>
    <div class="gridcontainer content" >
      <div className="title">
        <b>Logos</b>
      </div>
      <div>
        Creative commons from the Noun Project by :
         <ul>
          <li>Austin Condiff</li>
          <li>Simon Sim</li>
          <li>Sergey Kashin</li>
          <li>Dinosoft Labs</li>
          <li>Mulham</li>
          <li>Mister Pixel</li>
          <li>Three Six Five</li>
        </ul>
      </div>
    </div>
  </div>
}

const CV = () => {
  return (
    <div className="CV">
      <div className="content-grid">
        {/* <div className="profilePic"
          style={{
            // borderRadius: "6px",

          }}
        > */}
        {/* <img src={profilePic}
          className="profilePic"
          style={{
            width: "100%"
          }} /> */}
        {/* </div> */}
        <img className="photo" src={photoIdentite} />
        <div className="nom">
          <b style={{ fontSize: `1.5em`, fontVariant: 'small-caps' }}>Thomas Carli</b>
          <br></br>
          <A style={{ fontSize: `0.8em` }} txt='+33 6 77 80 25 71' />
          <br></br>
          thomas.carli@gmail.com
              <br></br>
          <A style={{ fontSize: `0.8em` }} txt='28' /> y/o
              <br></br>
        </div>

        <div className="background">
        </div>
        <div className="topright"></div>
        <div class="titre" style={{ fontSize: '2em', textAlign: `center`, fontVariant: 'small-caps' }}>
          <b>Software Engineer</b>
          <p>looking for freelance missions</p>
        </div>

        {/* <div className="left-col"> */}
        {/* <img id="plane" src={airbusImage} /> */}
        {/* </div> */}

        <div class="sections">
          <ProfesionnalExperience />
          <Education />
          <Languages />
          {/* <PersonalProjects /> */}
          <Other />
          <Aero />
          <Credits />
        </div>
        <div className="footer"></div>
        <div className="footerRight">
          <p>
            The source of this page is <a href="https://github.com/licarth/cv-dev/">available on Github.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CV;

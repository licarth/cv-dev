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
import Gauge from 'a320-ecam-gauges'
import _ from 'lodash';
import { ReactLogo, NodejsLogo } from './techLogos'

const A = (props) => {
  return <span className="a320" style={props.style}>{props.txt}</span>;
}

const LogoLeft = ({ img, size }) => {
  return <RoundLogo img={img} size={size} className={"logoleft"} />
}

const RoundLogo = ({ img, size, className }) => {
  return <div className={className + " roundLogo"}>
    <div>
      <svg viewBox="0 0 200 200">
        <defs>
          <filter id="f1" x="-20%" y="-20%" width="200%" height="200%">            <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <circle cx="100" cy="100" r="100"
          filter="url(#f1)"
        />
      </svg>
    </div>
    <div
      className='logo'
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        position: 'absolute'
      }}>
      <img src={img}
        style={{
          margin: 'auto',
          width: size,
        }}
      />
    </div>
  </div>
}

LogoLeft.defaultProps = {
  size: '70%',
};


const Aero = () => {
  return <div id="aero" class="section aero">
    <LogoLeft img={planeur} />
    <div className="titreSection">Aeronautics</div>
    <div class="gridcontainer content">
      <div>
        <b>ULM</b>
      </div>
      <div>Laché en ULM 3 axes - 15 heures de vol - Licence théorique d’instructeur ULM</div>
      <div>
        <b>Planeur</b>
      </div>
      <div>7 heures de vol</div>
    </div>
  </div>
}

const techLogos = {
  node: <NodejsLogo />,
  react: <ReactLogo />
}

const XpItem = ({ yearStart, yearEnd, title, company, location, items, technologies }) => {
  return <div className="xpItem">
    <div className="xpSection xpTitle">
      <b>
        <span class="a320">{yearStart} {yearEnd ? "> " : ""}{yearEnd}</span> - {title} - {company}, {location}</b>
    </div>
    {!_.isEmpty(items) ?
      <div className="xpSection xpContent">
        <ul>
          {_.map(items, i => <li>{i}</li>)}
        </ul>
      </div>
      : ""}
    {!_.isEmpty(technologies) ?
      <div className="xpSection xpTechnologies">
        <RoundLogo img={tools} size={"60%"} className="techToolsLogo" />
        <div className="techLogos">
          {_.map(technologies, t => techLogos[t])}
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
        yearStart: 2014,
        yearEnd: 2018,
        title: "Software Engineer",
        company: "GoEuro GmbH",
        location: "Berlin",
        items: [
          "Travel search engine for bus, flight, and train tickets.",
          "10 million unique visitors per month.",
          "International dev team.",
          "Développement et maintenance d'applications distribuées.",
          "Traitement de données du transport aérien, ferroviaire et routier.",
          "3 ans d’expérience comme interviewer technique en entretiens d’embauche."
        ],
        technologies: [
          "node",
          "react",
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
  return [<div>
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
    <div class="gridcontainer content" style={{ gridTemplateColumns: `3cm 1fr` }}>
      <div>
        <b>Societies</b>
      </div>
      <div>
        Supélec Sports assiciation - Vice-President - 2012
        <br></br>
        Vice president of the “​ Bureau des Sports​ ” at Supélec, a committee of 12 students which is in
          charge of a 400-member sports association that allow students of the school to practice 20
          different sports and that organizes every year a sports tournament which attracts more than
          2000​ ​ students​ ​ from​ ​ French​ ​ universities.
            I developed the web-based tournament subscription & management application (managing
            2600​ ​ subscriptions)
      </div>
      <div>
        <b>Sports</b>
      </div>
      <div>Ski - Roller - Tennis - Kitesurf</div>

      <div>
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
    <div class="gridcontainer content" style={{ gridTemplateColumns: `3cm 1fr` }}>
      <div>
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
        </ul>
      </div>
    </div>
  </div>
}

const CV = () => {
  return (
    <div className="CV">
      <div className="content-grid">
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

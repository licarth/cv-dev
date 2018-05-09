import React from 'react'
import Gauge from 'a320-ecam-gauges'
import { LogoLeft } from './LogoLeft';
import code from './code.svg'
import { withState, compose, withHandlers } from 'recompose'
import './Gauge.css'

const addState = compose(
    withState("gaugeValue", "setValue", 20.0),
    withHandlers({
        changeValue: ({ setValue, gaugeValue }) =>
            (e) => setValue(gaugeValue + 10)
    })
)

const PersonalProjects = ({ changeValue, gaugeValue }) => {
    return <div
        // style={{
        //     left: gaugeValue,
        // }}
        onClick={changeValue}
        className="section personalprojects">
        <LogoLeft img={code} />
        <div className="titreSection">Personal projects</div>
        <Gauge

            value={gaugeValue} />
    </div>
}

export default addState(PersonalProjects);
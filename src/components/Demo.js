import React from 'react'
import CSSModules from 'react-css-modules';
import {Button} from 'react-bootstrap';
import {alerts, buttons } from 'bootstrap-css';
import styles from './Demo.css';
Object.assign(styles, alerts, buttons)

function Demo( props) {

    const { route } = props

    return (
		<div styleName="alert alert-info">
			<h1>react-css-module test!</h1>
			<h4>Normal BootStrap:</h4>
			<button type="button" styleName="btn btn-default">Learn More</button>
			<br/>
			<h4>React BootStrap:</h4>
			<Button>Learn more</Button>
		</div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )

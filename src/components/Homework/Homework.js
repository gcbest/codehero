import React from 'react';
import './Homework.css';
import descriptions from './Descriptions.js';
import { Button, Row } from 'react-materialize';

import axios from 'axios';
// import { Link } from 'react-router';

// import { render } from 'react-dom';
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';


function onChange(newValue) {
  console.log('change',newValue);
}

// function yellMayday() {
// 		axios({
// 		  method: 'post',
// 		  url: 'https://hooks.slack.com/services/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',
// 		  data: {
// 		    "text":"This is a line of text.\nAnd this is another one."
// 		  }
// 		});

// 		console.log('Mayday button clicked');
// 	}

function onMaydayClick() {
	console.log('Mayday button clicked');
	// Slackbot triggered

	axios.get('/slack-hook')
	.then(function (response) {
  		console.log('Mayday button clicked');
    	console.log(response);
    })
    .catch(function (error) {
		console.log(error);
		});
};


const Homework = ({
	params
}) => {

	const titles = ({
		'01': 'Week 01: Portfolio',
		'02': 'Week 02: Bootstrap Portfolio', 
		'03': 'Week 03: Hangman',
		'04': 'Week 04: JQuery',
		'05': 'Week 05: Timers Trivia',
		'06': 'Week 06: AJAX Giphy API', 
		'07': 'Week 07: Firebase Rock Paper Scissors', 
		'10': 'Week 10: Intro to Node', 
		'11': 'Week 11: JavaScript Constructors', 
		'12': 'Week 12: Node.js and MySQL', 
		'13': 'Week 13: Node & Express Web Server with Friend Finder', 
		'14': 'Week 14: Handlebars with Eat the Burger', 
		'15': 'Week 15: Sequelize', 
		'18': 'Week 18: MongoDB', 
		'19': 'Week 19: React'
	})

	return (

		<div className="homework">
			{ titles[params.weekId] } 
			<Row>
				<Button onClick={ () => { onMaydayClick() } } className='mayday #ef5350 red lighten-1' waves='light'>MAYDAY!</Button>
			</Row>
			<AceEditor
				className="ace-editor"
			    mode="javascript"
			    theme="monokai"
			    enableBasicAutocompletion={true}
			    enableEmmet={true}
			    onChange={onChange}
			    name="UNIQUE_ID_OF_DIV"
			    width="100%"
			    editorProps={{$blockScrolling: true}}
			    defaultValue={ descriptions[params.weekId] }
			/>


		</div>
		
	);


export { Homework as default };
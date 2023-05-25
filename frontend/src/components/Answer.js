import React from 'react';
import classes from './Answer.module.css';

const Answer = (props) => {
	let answers = Object.keys(props.answer).map((qAnswer, i) => (
		<li
			className={`${
				props.correctAnswer === qAnswer
					? classes.correct
					: props.clickedAnswer === qAnswer
					? classes.wrong
					: undefined
			} ${i === 0 ? classes.left : classes.right}`}
			onClick={() => props.checkAnswer(qAnswer)}
			key={qAnswer}
		>
			<h2>{props.answer[qAnswer]}</h2>
		</li>
	));

	return (
		<>
			<ul
				disabled={props.clickedAnswer ? true : false}
				className={classes.answers}
			>
				{answers}
			</ul>
			<h2>
				{props.correctAnswer
					? 'Prawidłowa odpowiedź'
					: props.clickedAnswer
					? 'Błędna odpowiedź'
					: undefined}
			</h2>
		</>
	);
};

export default Answer;

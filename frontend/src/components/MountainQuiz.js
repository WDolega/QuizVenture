import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import Answer from '../components/Answer';
import classes from './MountainQuiz.module.css';

import { useState } from 'react';

const quizAnswers = {
	1: {
		1: {
			1: 'K2',
			2: 'Mount Everest',
		},
		2: {
			1: 'Denali',
			2: 'Kilimanjaro',
		},
		3: {
			1: 'Aconcagua ',
			2: 'Mont Blanc',
		},
		4: {
			1: 'Pomnik Chrystusa Odkupiciela w Rio de Janeiro',
			2: 'Pomnik Jezusa Chrystusa Króla Wszechświata w Świebodzinie',
		},
	},
	2: {
		1: {
			1: 'Rysy',
			2: 'Babia Góra',
		},
		2: {
			1: 'Tarnica',
			2: 'Turbacz',
		},
		3: {
			1: 'Sky Tower',
			2: 'Warsaw Spire',
		},
		4: {
			1: 'Rysy',
			2: 'Gerlach',
		},
	},
	3: {
		1: {
			1: 'Rysy',
			2: 'Babia Góra',
		},
		2: {
			1: 'Tarnica',
			2: 'Turbacz',
		},
		3: {
			1: 'Sky Tower',
			2: 'Warsaw Spire',
		},
		4: {
			1: 'Rysy',
			2: 'Gerlach',
		},
	},
	4: {
		1: {
			1: 'Rysy',
			2: 'Babia Góra',
		},
		2: {
			1: 'Tarnica',
			2: 'Turbacz',
		},
		3: {
			1: 'Sky Tower',
			2: 'Warsaw Spire',
		},
		4: {
			1: 'Rysy',
			2: 'Gerlach',
		},
	},
};

const correctQuizAnswers = {
	1: {
		1: '2',
		2: '1',
		3: '1',
		4: '2',
	},
	2: {
		1: '1',
		2: '1',
		3: '2',
		4: '2',
	},
	3: {
		1: '1',
		2: '1',
		3: '2',
		4: '2',
	},
	4: {
		1: '1',
		2: '1',
		3: '2',
		4: '2',
	},
};

const MountainQuiz = (props) => {
	// initiate the state
	// const [questions, setQuestions] = useState({
	// 	1: 'What US city is known as the "birthplace of jazz"?',
	// 	2: 'What is the capital of Greece?',
	// 	3: 'What planet gave birth to Superman?',
	// });
	const [answers, setAnswers] = useState(quizAnswers[props.level]);
	const [correctAnswers, setCorrectAnswers] = useState(
		correctQuizAnswers[props.level]
	);
	const [correctAnswer, setCorrectAnswer] = useState(0);
	const [clickedAnswer, setClickedAnswer] = useState(0);
	const [step, setStep] = useState(1);
	const [score, setScore] = useState(0);
	const navigate = useNavigate();

	// method that checks the answer
	const checkAnswer = (answer) => {
		if (answer === correctAnswers[step]) {
			setScore(score + 1);
			setCorrectAnswer(correctAnswers[step]);
			setClickedAnswer(answer);
		} else {
			setCorrectAnswer(0);
			setClickedAnswer(answer);
		}
	};

	// method to move to the next question
	const nextStep = (step) => {
		setStep(step + 1);
		setCorrectAnswer(0);
		setClickedAnswer(0);
	};

	const endHandler = () => {
		navigate('..');
	};

	const nextLvlHandler = () => {
		navigate(`..`);
		navigate(`/mountains/level-${props.level + 1}`);
	};

	return (
		<div className={classes.mountainsQuiz}>
			{step <= Object.keys(answers).length ? (
				<>
					{/* <Question question={questions[step]} /> */}
					<h1>Co jest wyższe?</h1>
					<Answer
						answer={answers[step]}
						step={step}
						checkAnswer={checkAnswer}
						correctAnswer={correctAnswer}
						clickedAnswer={clickedAnswer}
					/>
					<button
						className={classes.nextStep}
						disabled={
							clickedAnswer && Object.keys(answers).length >= step
								? false
								: true
						}
						onClick={() => nextStep(step)}
					>
						Następne pytanie
					</button>
				</>
			) : (
				<div className={classes.result}>
					<h1>Ukończyłeś quiz!</h1>
					<h2>
						Twój wynik to: {score} z {Object.keys(answers).length}
					</h2>
					{/* <button onClick={nextLvlHandler}>Następny poziom</button> */}
					<button onClick={endHandler}>Powrót do menu</button>
				</div>
			)}
		</div>
	);
};

export default MountainQuiz;

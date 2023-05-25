import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Quiz.module.css';

const Quiz = (props) => {
	const [selectedState, setSelectedState] = useState(null);
	const [selectedCapital, setSelectedCapital] = useState(null);
	const [matchedPairs, setMatchedPairs] = useState([]);
	const [allMatched, setAllMatched] = useState(false);
	const navigate = useNavigate();

	const states = props.states;
	const sortedStates = [...states].sort((a, b) => a.name.localeCompare(b.name));
	const sortedCapitals = [...states].sort((a, b) =>
		a.capital.localeCompare(b.capital)
	);

	const handleStateClick = (name) => {
		setSelectedState(name);
		if (selectedCapital) {
			checkAnswer(name, selectedCapital);
		}
	};

	const handleCapitalClick = (capital) => {
		setSelectedCapital(capital);
		if (selectedState) {
			checkAnswer(selectedState, capital);
		}
	};

	const checkAnswer = (stateName, capitalName) => {
		const pair = { state: stateName, capital: capitalName };
		if (states.some((s) => s.name === stateName && s.capital === capitalName)) {
			setMatchedPairs((matchedPairs) => [...matchedPairs, pair]);
		}
		setSelectedState(null);
		setSelectedCapital(null);
	};

	const isMatched = (stateName, capitalName) => {
		return matchedPairs.some(
			(pair) => pair.state === stateName && pair.capital === capitalName
		);
	};

	const endHandler = () => {
		navigate('..');
	};

	useEffect(() => {
		setAllMatched(
			sortedStates.every(
				(state) => isMatched(state.name, state.capital) === true
			)
		);
	}, [matchedPairs]);

	return (
		<div className={classes.container}>
			<div className={classes.states}>
				{sortedStates.map((state) => (
					<button
						key={state.name}
						onClick={() => handleStateClick(state.name)}
						className={
							classes.button +
							' ' +
							(selectedState === state.name ? classes.selected : '')
						}
						disabled={isMatched(state.name, state.capital)}
					>
						{state.name}
					</button>
				))}
			</div>
			{allMatched && (
				<div className={classes.result}>
					<h1>Ukończyłeś quiz!</h1>
					<button onClick={endHandler}>Powrót do menu</button>
				</div>
			)}
			<div className={classes.capitals}>
				{sortedCapitals.map((state) => (
					<button
						key={state.capital}
						onClick={() => handleCapitalClick(state.capital)}
						className={
							classes.button +
							' ' +
							(selectedCapital === state.capital ? classes.selected : '')
						}
						disabled={isMatched(state.name, state.capital)}
					>
						{state.capital}
					</button>
				))}
			</div>
		</div>
	);
};

export default Quiz;
